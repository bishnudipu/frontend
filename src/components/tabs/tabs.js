import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "../../pages/dashboard/dashboard";
import RfpProducts from "../rfpproducts/rfpproducts";
import {setTabsValue} from '../../redux/feature/popup.feature'
import './tabs.css'

function TabPannel(props) {
    const { children, value, index } = props;
    return <>{value === index && <>{children}</>}</>;
  }

function TabsPannel(){
    const [value, setValue] = React.useState(0);
    let dispatch = useDispatch();
    const isPopUp = useSelector((state)=>{
      return state["popup"]
    })

    let {tabsValue} = isPopUp
    const handleTabs = (e, val) => {
        // setValue(val);
        dispatch(setTabsValue(val))
      };
    return(
        <>
            <Box style={{ display: "flex" }}>
          <Tabs
            value={tabsValue}
            style={{
              color: "white",
            }}
            onChange={handleTabs}
          >
            <Tab style={{
                color:'white'
            }} label="RFP Products" />
            <Tab style={{
                color:'white'
            }} label="Follow ups" />
            {/* <Tab label="Alerts" /> */}
          </Tabs>
          <Box
            style={{
              float: "right",
              position: "absolute",
              right: "40px",
              marginTop: "6px",
            }}
          >
            <Typography
              variant="h5"
              style={{
                color: "white",
              }}
            >
              Good Morning, Stephen
            </Typography>
          </Box>
        </Box>
        {/* <TabPannel value={value} index={0}>
        <RfpProducts />
      </TabPannel>
      <TabPannel value={value} index={1}>
        {" "}
        Products
      </TabPannel>
      <TabPannel value={value} index={2}>
        RFP{" "}
      </TabPannel> */}
        </>
    )
}

export default TabsPannel