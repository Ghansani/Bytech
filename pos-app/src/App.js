import React,{ useState} from "react";
import './App.css';
import Login from './components/UserMgt/Login';
import { ReactDOM } from "react-dom";
import Checkout from "./components/SalesMgt/Checkout";
import Refund from "./components/SalesMgt/Refund"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import DiscountComponent from "./components/ProductMgt/Discount/Discount";
import Header from "./components/SalesMgt/Header";
import SideNavBar from "./components/Common/Navbar";
import ProductReport from "./components/ReportMgt/ProductReport";


function App() {
  return (
    <>

    <BrowserRouter>
    
    <div className="main-app-layout">
      <SideNavBar/>
      <div className="main-context-container" >
        {/* <Header/> */}
        <Routes>
          {/* <Route path="/" element={<Login />}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/refund" element={<Refund />} /> */}
          <Route path="/pdiscount" element={<DiscountComponent />}/>
          <Route path="/pdeport" element={<ProductReport />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    {/* <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/discount" element={<DiscountComponent/>} />
        <Route path="/Refund" element={<Refund/>} />
      </Routes> */}

  </>
  );
}

export default App