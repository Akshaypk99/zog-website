import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (

        <div className='w-100 h-100 navbarmain'>
            <div className='p-4 postionsticky'>
                <img src="/images/ShibuNavbarLogo.svg" width="100" height="50" alt="" />
            </div>
            <div className='white-clr mt-4'>
                <div className='clr-E7E7E7 f-xs px-4'>GENERAL</div>
                <NavLink to="/admin/" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-laptop me-3 f-sm"></i><span className='f-xs'>Overview</span></NavLink>
                <NavLink to="/admin/analytics" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-chart-line me-3 f-sm"></i><span className='f-xs'>Analytics</span></NavLink>
                <NavLink to="/admin/ecommerce" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-bag-shopping me-3 f-sm"></i><span className='f-xs'>Ecommerce</span></NavLink>

            </div>
            <div className='white-clr mt-4'>
                <div className='clr-E7E7E7 f-xs px-4'>CONCEPTS</div>
                <NavLink to="/admin/trips/list" className='link-item d-flex align-items-center px-4'><i class="fa-solid fa-truck-fast me-3 f-sm"></i><span className='f-xs'>Trips</span></NavLink>
                <NavLink to="/admin/orders/list" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-cart-shopping me-3 f-sm"></i><span className='f-xs'>Orders</span></NavLink>
                <NavLink to="/admin/products/list" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-database me-3 f-sm"></i><span className='f-xs'>Catalog</span></NavLink>
                <NavLink to="/admin/routes/list" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-database me-3 f-sm"></i><span className='f-xs'>Routes</span></NavLink>
                <NavLink to="/admin/customers/list" className='link-item d-flex align-items-center px-4'><i className="fa-regular fa-user me-3 f-sm"></i><span className='f-xs'>Customers</span></NavLink>
                <NavLink to="/admin/category" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-database me-3 f-sm"></i><span className='f-xs'>Category</span></NavLink>
                <NavLink to="/admin/subcategory" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-database me-3 f-sm"></i><span className='f-xs'>Subcategory</span></NavLink>
                <NavLink to="/admin/invoice/list" className='link-item d-flex align-items-center px-4'><i className="fa-regular fa-file-lines me-3 f-sm"></i><span className='f-xs'>Invoice</span></NavLink>
                <NavLink to="/admin/purchase" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-bag-shopping me-3 f-sm"></i><span className='f-xs'>Purchase</span></NavLink>
                {/* <NavLink to="/admin/coupon" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-receipt me-3 f-sm"></i><span className='f-xs'>Coupon</span></NavLink> */}
                {/* <NavLink to="/admin/maintanance" className='link-item d-flex align-items-center px-4'><i className="fa-regular fa-envelope me-3 f-sm"></i><span className='f-xs'>Inbox</span></NavLink> */}
                {/* <NavLink to="/admin/maintanance" className='link-item d-flex align-items-center px-4'><i className="fa-regular fa-calendar-days me-3 f-sm"></i><span className='f-xs'>Calender</span></NavLink> */}
                {/* <NavLink to="/admin/maintanance" className='link-item d-flex align-items-center px-4'><i className="fa-regular fa-comments me-3 f-sm"></i><span className='f-xs'>Chat</span></NavLink> */}
                {/* <NavLink to="/admin/maintanance" className='link-item d-flex align-items-center px-4'><i className="fa-solid fa-gear me-3 f-sm"></i><span className='f-xs'>File Manager</span></NavLink> */}
            </div>
        </div>

    )
}
