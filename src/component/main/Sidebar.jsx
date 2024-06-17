import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <div>
 {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="../../index3.html" className="brand-link">
    <img src="adminlte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
       
        <li className="nav-item">
          <a href="../../iframe.html" className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>Home</p>
          </a>
        </li>

        <li className="nav-header">PENGADUAN</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-list text-warning" />
            <p>Pengaduan Baru</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-clone text-danger" />
            <p>Pengaduan Proses</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-check-square text-success" />
            <p>Pengaduan Selesai</p>
          </a>
        </li>

        <li className="nav-header">PENGATURAN</li>
        <li className="nav-item">
          <a href="https://adminlte.io/docs/3.1/" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>Data Pengguna</p>
          </a>
        </li>

        <li className="nav-item">
          <a href="../widgets.html" className="btn btn-danger btn-block text-danger text-left nav-link">
            <i className="nav-icon fas fa-lock" />
            <p>
              Logout
            </p>
          </a>
        </li>
        
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

        </div>
    );
}

export default Sidebar;