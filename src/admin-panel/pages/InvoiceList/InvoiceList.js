import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./InvoiceList.css"
import { Modal } from "react-bootstrap";

import API from '../../../API';
import ErrorModal from "../../../ErrorModal";
import PositiveModal from "../../../PositiveModal";
import DeleteConfirmModal from "../../../DeleteConfirmModal";
import FixedOverlayLoadingSpinner from "../../../FixedOverlayLoadingSpinner"

import Pagination from "../../../Pagination";
import {fetchInvoiceDataAndGeneratePdf} from '../../../GeneralFunctions'

import $ from 'jquery';


const InvoiceList = () => {

    let navigate = useNavigate();

    const [data, setData] = useState(null);
    const [searchKey, setSearchKey] = useState(null);

    const [page, setPage] = useState(1);
    const [pageSize, selectPageSize] = useState(10);

    const [message, setMessage] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [isDeleteConfModalOpen, setIsDeleteConfModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const [idSelected, setIdSelected] = useState(0);
    const [isActionModalOpen, setActionModalOpen] = useState(false);

    useEffect(() => {
        $(function() {
      $(window).scrollTop(0);
      });
      }, []) 

    useEffect(() => {
        loadTableData();
    }, [page, pageSize, searchKey]);





    const loadTableData = () => {
        setData(null);
        setIsMessageModalOpen(false);

        let apiUrl = `/invoices/?page=${page}&page_size=${pageSize}`;

        // setting search key as a parameter

        if (searchKey !== null) {
            apiUrl += `&search_key=${searchKey}`;
        }


        API.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setMessage(error.message);
                setIsErrorModalOpen(true);
            });
    }



    const Search = (key) => {

        if (key === "Enter") {

            const searchKEY = document.getElementById("search-input").value
            console.log("searchKey from layout", searchKEY);

            setSearchKey(searchKEY);
        }

    }


    const deleteItem = () => {
        setIsLoading(true)
        API.delete(`/invoices-delete/${idSelected}`)
            .then(response => {
                setMessage("Item deleted successfully");
                setIsLoading(false)
                setIsMessageModalOpen(true)
            })
            .catch(error => {
                setMessage(error.message);
                setIsLoading(false)
                setIsErrorModalOpen(true);
            });
    }

    
    return (
        <div className='px-0 px-md-4 py-3 full-screen-table-container'>
            <div className='text-end'>
                {/* <button className='lightbrick-btn f-xs px-4'>Add Product</button> */}
                {/* <Link to='/Layout2/Maintanance' className='lightbrick-btn f-xs px-3 add-prod-link'><i className="fa-solid fa-scroll me-1"></i>New Invoice</Link> */}
            </div>

            <div className='d-flex align-items-center my-3'>
                <div className='relative w-100'>
                    <input className='nav-search-inp w-100 fw-600' placeholder='Start typing search for Invoices' id='search-input'   onKeyUp={(e) => Search(e.key)}></input>
                    <div className='search-i-position'><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div>

            <div className='product-table tbl_scroll table-box rwd-table'>
                <table>
                    <thead>
                        <tr className='bg-white'>
                            <th className='fw-600 f-13'>INVOICE NO</th>
                            <th className='fw-600 f-13'>ISSUED DATE</th>
                            <th className='fw-600 f-13'>CUSTOMER</th>
                            <th className='fw-600 f-13'>EMAIL</th>
                            <th className='fw-600 f-13'>SUB TOTAL</th>
                            <th className='fw-600 f-13'>TRANSIST</th>
                            <th className='fw-600 f-13'>TAX</th>
                            <th className='fw-600 f-13'>DISCOUNT</th>
                            <th className='fw-600 f-13'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody id='table'>

                        {data && data.results.length > 0 && data.results.map((item, index) => {
                            return (
                                <tr>
                                    <td  data-th="Invoice No" className='fw-500 f-xs brick-clr fw-600' role="button" onClick={()=>{localStorage.setItem("itemSelectedId", item.id);navigate("/admin/invoice/details")}}><u>#{item.id}</u></td>
                                    <td data-th="Issued Date"  className='fw-500 f-xs'>{item.order_date}</td>
                                    <td data-th="Customer"  className='fw-500 f-xs'>{item.firstname} {item.lastname}</td>
                                    <td data-th="Email"  className='fw-500 f-xs'>{item.email}</td>
                                    <td data-th="Sub Total"  className='fw-500 f-xs'>£{item.total}</td>
                                    <td data-th="Transist"  className='fw-500 f-xs'>£0.00</td>
                                    <td data-th="Tax"  className='fw-500 f-xs'>£0.00</td>
                                    <td data-th="Discount"  className='fw-500 f-xs'>£0.00</td>
                                    <td data-th="Action"  className='fw-500'>
                                        {/* <button><i className="fa-solid fa-pen clr-33363F"></i></button> */}
                                        <button onClick={()=>fetchInvoiceDataAndGeneratePdf(item.order_id)}><i className="fa-solid fa-download clr-33363F"></i></button>
                                    </td>
                                </tr>
                            )
                        })}



                    </tbody>
                </table>

                {data &&
                    <Pagination
                        totalItems={data.count}
                        pageSize={pageSize}
                        currentPage={page}
                        setCurrentPage={setPage}>
                    </Pagination>
                }

            </div>
            <ErrorModal state={isErrorModalOpen} message={message} setterFunction={setIsErrorModalOpen} okClickedFunction={loadTableData} />
            {isMessageModalOpen && <PositiveModal message={message} setterFunction={setIsMessageModalOpen} okClickedFunction={loadTableData} />}
            {isDeleteConfModalOpen && <DeleteConfirmModal resourceName={'invoice'} setterFunction={setIsDeleteConfModalOpen} onDeleteFunction={deleteItem}></DeleteConfirmModal>}
            {isLoading && <FixedOverlayLoadingSpinner />}
        </div>
    )

}

export default InvoiceList