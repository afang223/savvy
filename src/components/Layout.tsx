import React, { useState } from 'react';
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  const [ selectedItems, setSelectedItems ] = useState<number>(0);
  const [ disableCheckbox, setDisableCheckbox ] = React.useState<boolean>(false);

  return (
    <React.Fragment>
    <div style={{
        height:"50px",
        backgroundColor:"#337336",
        color:"white"
    }}>
        <Navigation/>
    </div>
    <div style={{height:"400px",
    overflowY:"auto",
    backgroundColor:"#163835"}}>
        <Content setSelected={setSelectedItems} disableCheckbox={disableCheckbox}/>
    </div>
    <div style={{
        height:"50px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#337336"
    }}>
        <Footer selectedItems={selectedItems} setDisableCheckbox={setDisableCheckbox}/>
    </div>
    </React.Fragment>
  );
}

export default Layout;
