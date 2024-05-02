
import API from './API';
import { UK_COUNTIES } from './Constants';
import { saveAs } from 'file-saver'; // Import file-saver library
import InvoiceTemplate from './InvoiceTemplate'; // Replace with your path to InvoiceTemplate
import { pdf } from '@react-pdf/renderer'; // Import from react-pdf/renderer


export const getCategoryName = (catId, categories) => {
console.log("catId",catId)
           if (categories && categories.results && categories.results.length > 0) {
            let temp = categories.results.find(x => x.id == catId);
            if (temp) {
                  return (temp.category_name)
            }
            else {
               return "Not Found"
            }
         }
         else {
            return "not found"
         }

}



export const getProductName = async (prodId) => {
    try {
        const response = await API.get(`/products/${prodId}`);
        if (response.data.name) {
            
            return response.data.name;

        } else {
            return "";
        }
    } catch (error) {
        return "Not found";
    }
}






export const convertTo12HourTime=(timeString) =>{
    timeString = timeString.toString();
    console.log("timestring",timeString)
    timeString = timeString.toString().replace(':', '');
    // Extract hours, minutes, and seconds from the input string
    const hours = parseInt(timeString.slice(0, 2));
    const minutes = parseInt(timeString.slice(2, 4));

    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12; // If hours is 0, convert to 12

    // Format the time string
    const formattedTime = `${hours12}:${minutes < 10 ? '0' : ''}${minutes}${period}`;

    return formattedTime;
}

export const fetchInvoiceDataAndGeneratePdf = async (id) => {
    try {
        const response = await API.get(`download-invoice/${id}/`);
        const invoiceData = response.data.invoice_data;

        // Generate and save PDF blob
        const blob = await pdf(

            <InvoiceTemplate invoiceData={invoiceData} />

        ).toBlob();

        saveAs(blob, 'invoice.pdf'); // Automatically trigger download. save as is a very useful library to download files. it will replace the following 9 commented lines

        //   const blobUrl = URL.createObjectURL(blob);
        //   const a = document.createElement('a');
        //   a.style.display = 'none';
        //   a.href = blobUrl;
        //   a.download = 'invoice.pdf';
        //   document.body.appendChild(a);
        //   a.click();
        //   document.body.removeChild(a);
        //   URL.revokeObjectURL(blobUrl);
        // 
    }
    catch (error) {
        console.error('Error fetching invoice data:', error);
    }
};
