import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';


import API from "../../../API.js"
import LoadingSpinner from "../../../LoadingSpinner.js";
import ErrorModal from "../../../ErrorModal.js";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner.js"
import $ from 'jquery';

import './CareerApply.scss'
import '../../../authentication/pages/Authentication.scss'
import AuthBanner from "../../../authentication/pages/AuthBanner";
import MessagePopup from "../../../authentication/pages/MessagePopup.js";

const CareerApply = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    $(function () {
      $(window).scrollTop(0);
    });
  }, [])

  const [message, setMessage] = useState(null);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const maxSize = 3 * 1024 * 1024
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const updatedFiles = [...files, ...selectedFiles];
    const exceedingFiles = updatedFiles.filter(file => file.size > maxSize);

    if (exceedingFiles.length > 0) {
      setError('The file size is exceeds 3MB');
    } else {
      setError('');
    }

    setFiles(updatedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.dataTransfer.files);
    const updatedFiles = [...files, ...selectedFiles];

    const exceedingFiles = updatedFiles.filter(file => file.size > maxSize);

    if (exceedingFiles.length > 0) {
      setError('Some files exceed 3MB in size');
    } else {
      setError('');
    }

    setFiles(updatedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleSelectFiles = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e)  => {
    localStorage.setItem('LoginRedirectURL', `/`);
    e.preventDefault();
    if (error) {
        return; 
    }
    if (files.length === 0) {
      setError('Please select at least one file');
      return; 
    }

    setIsLoading(true)
    const jobId = id;
    const userId = localStorage.getItem('userID'); 
    const formData = new FormData();
    formData.append("user", userId);
    formData.append("job", jobId);
    files.forEach((file, index) => {
        formData.append(`file${index}`, file);
    });

    try {
        const response = await API.post("/recruitment/job-applications/", formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });
        setIsLoading(false)
        setIsMessageModalOpen(true)
        console.log(response);
      } catch (error) {
        setIsLoading(false)
        setIsErrorModalOpen(true);
        setMessage(error.message || "An error occurred.");
      }

  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    const exceedingFiles = updatedFiles.filter(file => file.size > maxSize);
    if (exceedingFiles.length === 0) {
      setError('');
    }
  };


  return (
    <div className='signup auth-container'>
      <AuthBanner
        pageName={"apply-job"}
        titleWeb={"Take The Next Step<br/>Towards Your Dream<br/>Career"}
        titleTab={"Take The Next Step<br/>Towards Your Dream Career"}
        titleMob={"Take The Next<br/>Step Towards<br/>Your Dream<br/>Career"}
        paraWeb={"Boost your chances with a powerful first<br/>impression - upload your resume now!"}
        paraTab={"Boost your chances with a powerful <br/>first impression - upload your resume<br/>now!"}
        paraMob={"Boost your chances with a powerful<br/>first impression - upload your<br/>resume now!"}
        buttonText=""
        buttonOnClick=''
        iconTopWeb={'66%'}
        iconLeftWeb={'53%'}
        iconRotationWeb={30}
        iconTopTab={'67%'}
        iconLeftTab={"47%"}
        iconRotationTab={200}
        iconTopMob={'55%'}
        iconLeftMob={150}
        iconRotationMob={70}
      />
      <div className='card'>
        <form onSubmit={handleSubmit}>
            <label>Upload Your Resume</label>
            <div className="form-card" >
                
                <div  className="drag-and-drop" onClick={handleSelectFiles} onDrop={handleDrop} onDragOver={handleDragOver} >
                    <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    multiple
                    accept=".pdf"
                    />
                    <div>
                    <svg width="66" height="52" viewBox="0 0 66 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1790_17768)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8619 51.5H4.53846C2.04903 51.5 0 49.4317 0 46.8864V21.3675H66V46.8769C66 49.4317 63.9695 51.5 61.4615 51.5H34.1381V30.6372L41.5322 38.1692L43.2382 36.4314L32.9977 26L22.7572 36.4314L24.4632 38.1692L31.8573 30.6372V51.5H31.8619ZM0 19.0442V5.11361C0 2.56361 2.03976 0.5 4.557 0.5H29.5857L34.1381 9.77444H61.4337C63.9556 9.77444 66 11.8475 66 14.3975V19.0442H0Z" fill="#648197"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1790_17768">
                    <rect width="66" height="51" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>

                    </div>
                    <span className="drag-text">Drag & Drop<br/>your files here</span>
                </div>

                
                <div className="file-list">
                    {files.map((file, index) => (
                        <div key={index} className="file-item">
                            <svg width="30" height="39" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33333 2.33398C1.49233 2.33398 0 3.83398 0 5.66732V19.0006V25.6673V35.6673C0 37.5006 1.49233 39.0006 3.33333 39.0006H26.6667C28.5083 39.0006 30 37.5006 30 35.6673V25.6673V19.0006V12.334L20 2.33398H3.33333Z" fill="#C0392B"/>
                                <path d="M3.33333 0.666992C1.49233 0.666992 0 2.16699 0 4.00032V17.3337V24.0003V34.0003C0 35.8337 1.49233 37.3337 3.33333 37.3337H26.6667C28.5083 37.3337 30 35.8337 30 34.0003V24.0003V17.3337V10.667L20 0.666992H3.33333Z" fill="#E74C3C"/>
                                <path d="M30 10.667L20 0.666992V7.33366C20 9.16699 21.4917 10.667 23.3333 10.667H30Z" fill="#C0392B"/>
                                <path d="M26.8536 17.334H26.3703C26.2203 17.5007 25.3686 18.6673 25.0003 19.0007C24.9003 19.1673 24.7503 19.3339 24.6653 19.3339C23.427 20.8339 20.7936 23.334 19.2136 24.6674C19.007 24.834 18.807 25.0006 18.7703 25.0006C18.6603 25.1673 17.607 25.8339 17.1336 26.1672C15.6253 27.1672 13.8553 28.0006 12.4803 28.3339C9.76681 29.0006 7.64964 28.8339 4.90097 27.5006C4.07031 27.1673 2.88681 26.5006 2.23797 26.0006C1.60131 25.5006 1.66847 25.5007 1.66947 26.334V27.1674L2.09914 27.334C2.65031 27.6673 3.83997 28.3339 4.61564 28.6672C5.20664 29.0005 5.39081 29.1673 5.06014 29.1673C4.75547 29.0006 3.02647 29.0006 2.36214 29.1673H1.69547C1.68014 29.1673 1.66764 29.5006 1.66764 29.834V30.5007H1.88981C2.84581 30.1674 4.89764 30.1672 5.85281 30.3339C6.97747 30.5005 7.76881 30.6672 8.71931 31.1672C10.5328 32.0005 12.037 33.6672 12.692 35.3339L12.8253 35.6673H13.5586H14.292L14.252 35.5007C14.017 34.5007 13.357 33.3339 12.5403 32.5006C12.0036 31.8339 11.0558 31.1673 10.6823 30.8339H10.5563C10.4956 30.6673 9.86214 30.3339 9.59147 30.3339C9.43747 30.1672 9.31197 30.1672 9.31197 30.1672C9.31197 30.0006 9.42864 30.0006 9.57114 30.1672C9.92697 30.1672 11.36 30.0006 12.0086 29.834C13.8053 29.5006 15.5053 28.8339 17.2236 27.8339C17.8403 27.5005 19.2403 26.3339 19.8003 26.0006C20.217 25.5006 20.3503 25.5006 20.1803 25.6673C20.1203 25.834 20.0053 26.0005 19.922 26.1672C19.8403 26.3339 19.697 26.5006 19.6053 26.6673C18.3086 28.6673 17.477 31.1673 17.252 34.0006C17.2203 34.5006 17.1936 35.0006 17.1936 35.1672V35.6673H21.0803H24.967L24.8403 35.5007C24.1403 34.5007 23.272 32.3339 22.9803 30.8339C22.7403 29.6673 22.6686 27.8339 22.8186 26.8339C23.2553 24.1672 24.7436 21.8339 27.3003 20.3339C27.5636 20.1672 27.9036 20.0007 28.0553 19.834L28.3336 19.6674V19.1673C28.3336 18.8339 28.3136 18.5006 28.2886 18.5006C27.682 18.8339 26.332 19.6673 25.712 20.0006C25.3803 20.3339 25.3603 20.3339 25.672 20.0006C26.1186 19.5006 26.8886 18.6672 27.707 17.6672L28.0886 17.334H27.2536H26.8536Z" fill="#ECF0F1"/>
                            </svg>
                            <span className="file-name">{file.name}</span>
                            {file.size <= maxSize ? (
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866569 16.0008 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9991 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C39.9898 14.6988 37.8794 9.61762 34.1309 5.86909C30.3824 2.12057 25.3012 0.0101653 20 0ZM29.5192 16.5L18.25 27.2692C17.9587 27.5433 17.5731 27.6948 17.1731 27.6923C16.9776 27.6951 16.7835 27.6592 16.6019 27.5865C16.4204 27.5139 16.255 27.4061 16.1154 27.2692L10.4808 21.8846C10.3245 21.7483 10.1974 21.5817 10.1071 21.395C10.0168 21.2083 9.96525 21.0052 9.95545 20.798C9.94564 20.5909 9.97783 20.3839 10.0501 20.1894C10.1223 19.995 10.2331 19.8172 10.3758 19.6667C10.5186 19.5162 10.6902 19.3962 10.8805 19.3137C11.0708 19.2312 11.2759 19.1881 11.4833 19.1869C11.6907 19.1857 11.8962 19.2264 12.0874 19.3067C12.2787 19.3869 12.4517 19.505 12.5962 19.6538L17.1731 24.0192L27.4038 14.2692C27.703 14.0082 28.0914 13.873 28.488 13.8918C28.8845 13.9105 29.2584 14.0818 29.5316 14.3699C29.8048 14.658 29.956 15.0405 29.9537 15.4374C29.9514 15.8344 29.7957 16.2151 29.5192 16.5Z" fill="#61B43D"/>
                                    </svg>
                                ) : 
                                (
                                <button onClick={() => handleRemoveFile(index)}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#E95656"/>
                                        <path d="M33.7766 9.91219V16.2583C33.7766 16.5389 33.6651 16.8079 33.4668 17.0062C33.2684 17.2046 32.9994 17.316 32.7189 17.316H26.3727C26.1646 17.3157 25.9611 17.2539 25.7879 17.1385C25.6147 17.0231 25.4794 16.8592 25.399 16.6672C25.3185 16.4752 25.2965 16.2638 25.3356 16.0594C25.3748 15.8549 25.4734 15.6666 25.6191 15.518L28.0518 13.0853L27.4833 12.5168C26.0036 11.0387 24.119 10.0325 22.0676 9.62538C20.0162 9.21822 17.8901 9.42837 15.9581 10.2293C14.0261 11.0301 12.3749 12.3858 11.2132 14.1249C10.0515 15.864 9.43151 17.9085 9.43151 19.9999C9.43151 22.0913 10.0515 24.1358 11.2132 25.8749C12.3749 27.614 14.0261 28.9697 15.9581 29.7706C17.8901 30.5715 20.0162 30.7816 22.0676 30.3745C24.119 29.9673 26.0036 28.9611 27.4833 27.4831C27.5806 27.3836 27.6968 27.3045 27.825 27.2505C27.9533 27.1965 28.0911 27.1686 28.2303 27.1686C28.3695 27.1686 28.5072 27.1965 28.6355 27.2505C28.7638 27.3045 28.88 27.3836 28.9773 27.4831C29.1751 27.6814 29.2862 27.95 29.2862 28.2301C29.2862 28.5102 29.1751 28.7788 28.9773 28.9771C27.202 30.7515 24.9404 31.9597 22.4785 32.4488C20.0166 32.938 17.465 32.6863 15.1461 31.7255C12.8273 30.7646 10.8454 29.1378 9.45108 27.0507C8.05672 24.9636 7.3125 22.51 7.3125 19.9999C7.3125 17.4899 8.05672 15.0362 9.45108 12.9492C10.8454 10.8621 12.8273 9.23525 15.1461 8.2744C17.465 7.31356 20.0166 7.06182 22.4785 7.55102C24.9404 8.04021 27.202 9.24838 28.9773 11.0228L29.5458 11.5913L31.9653 9.17181C32.112 9.0229 32.2996 8.92083 32.5043 8.87847C32.709 8.83611 32.9217 8.85538 33.1155 8.93382C33.3085 9.01557 33.4736 9.15148 33.5909 9.32512C33.7082 9.49875 33.7727 9.70267 33.7766 9.91219Z" fill="white"/>
                                    </svg>
                                </button>
                                )}
                         
                        </div>
                    ))}
                </div>
                
                {error && <div className="error">{error}</div>}
            </div>
            <button className="button-black-box" type="submit">APPLY</button>
        </form>


      </div>

      <ErrorModal message={message} state={isErrorModalOpen} setterFunction={setIsErrorModalOpen} okClickedFunction={() => navigate('/sign-up')} />
      {isLoading && <FixedOverlayLoadingSpinner />}
      {isMessageModalOpen&&
      <MessagePopup 
            setterFunction={setIsMessageModalOpen}
            okClickedFunction={() => navigate('/career')}
            pageName={""}
            titleWeb={"Hurray! Your Resume has<br/>been successfully<br/>uploaded"}
            titleTab={"Hurray! Your Resume<br/>has been successfully<br/>uploaded"}
            titleMob={"Hurray! Your<br/>Resume has<br/>been<br/>successfully<br/>uploaded"}
            paraWeb={"Great job! Your resume has been successfully<br/>uploaded, putting you one step closer to your<br/>career goals."}
            paraTab={"Great job! Your resume has been <br/> successfully uploaded, putting you one <br/>step closer to your career goals."}
            paraMob={"Great job! Your resume has been <br/>successfully uploaded, putting<br/>you one step closer to your<br/>career goals."}
            buttonText="BROWSE FOR MORE JOBS"
            buttonOnClick='/career'
            iconTopWeb={'47%'}
            iconLeftWeb={'70%'}
            iconRotationWeb={40}
            iconTopTab={'53%'}
            iconLeftTab={"55%"}
            iconRotationTab={215}
            iconTopMob={'60%'}
            iconLeftMob={170}
            iconRotationMob={10}
            navigateTo = "/career"
            timeout={30000}
        />
      }
    </div>

  )

}

export default CareerApply

