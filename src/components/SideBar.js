import React from 'react';
import image from '../assets/images/logo-ajustado.jpg';
import { Link, Routes, Route } from 'react-router-dom';



import Users from './Users';
import ProductsByCategory from './ProductsByCategory';
import ContentWrapper from './ContentWrapper';
import UserDetail from './UserDetail';
import Products from './Products';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';



function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav sidebar sidebar-dark accordion" style={{ backgroundColor: '#606C34' }} id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - The Merch Market</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                

                {/* Nav Item - Pages */}
        <li className="nav-item">
          <Link className="nav-link" to="/Users">
            <i className="fas fa-fw fa-user"></i>
            <span>Usuarios</span>
          </Link>
        </li>

                {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/ProductsByCategory">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span></Link>
        </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/Products">
                        <i className="fas fa-fw fa-shopping-cart"></i>
                        <span>Productos</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/* Routes */}
      <Routes>
        <Route path="/" element={<ContentWrapper />} />
        <Route path="/ProductsByCategory" element={<ProductsByCategory />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Users/:id" element={<UserDetail/>} />
        {/* <Route path='/SearchMovies' element={<SearchMovies />} /> */}
        {/* <Route path="/ContentRowMovies" element={<ContentRowMovies />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* End of Routes */}
            
        </React.Fragment>
    )
}
export default SideBar;