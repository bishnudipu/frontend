import React from "react";
import TabsPannel from "../../components/tabs/tabs";
import VendorProducts from "../../components/vendors/dashboard/vendorproducts";
import VendorTable from "../../components/vendors/dashboard/VendorTable";
import Vendortop from "../../components/vendortopbar/Vendortop";
import Vendors from "../../components/vendors/Vendors";
function VendorHome() {
  return (
    <div className="overflow-x-hidden">
      <Vendortop />
      <VendorProducts />
      <Vendors />
    </div>
  );
}

export default VendorHome;
