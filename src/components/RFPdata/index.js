import { useAtom } from "jotai";
import React, { useState } from "react";
import { rfpData } from "../../jotaistore";
const RFPdata = () => {
  const [rfpResponse, setRfpResponse] = useAtom(rfpData);
  console.log(rfpResponse, "rfpResponsetest");

  return <div>index</div>;
};

export default RFPdata;
