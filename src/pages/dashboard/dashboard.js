import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RfpProducts from "../../components/rfpproducts/rfpproducts";
import TabsPannel from "../../components/tabs/tabs";
import TopBar from "../../components/topbar/topbar";

function TabPannel(props) {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
}
function DashBoard(){
    const isPopUp = useSelector((state)=>{
        return state["popup"]
      })
  
      let {tabsValue} = isPopUp
    return(
        <>
        <div
        style={{
          backgroundColor: "#2d2d2d",
          paddingBottom: "10px",
          borderBottom: "5px solid #ffb600",
          paddingLeft: "10px",
        }}
      >
        <TopBar/>
        <TabsPannel />
      </div>
      
      <TabPannel value={tabsValue} index={0}>
        <RfpProducts />
      </TabPannel>
      <TabPannel value={tabsValue} index={1}>
        {" "}
        Products
      </TabPannel>
      {/* <TabPannel value={tabsValue} index={2}>
        RFP{" "}
      </TabPannel> */}
        </>
    )
}

export default DashBoard