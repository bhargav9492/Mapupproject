import React from 'react';
import { Button } from 'antd';


const Header = () => {
  return (
<div style={{ padding: '16px', background: '#001529', color: 'black', fontFamily: "Roboto", fontSize: "bold", display: "flex", alignItems: "center" }}>
  <div style={{ marginRight: "auto" }}>
    <img src="../logo192.png" alt="logo" style={{ height: "45px" }} />
  </div>

  <div style={{ display: "flex", alignItems: "center" }}>
    <div class="floating-controls" style={{ marginRight: "16px" }}>
      <div class="form-input">
        <select style={{ background: 'white', color: 'black', fontSize: "15px", fontWeight: "bold", border: "none", height: "35px", textAlign: "center", width: "150px", borderRadius: "8px" }}>
          <option value="">Select a region</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        <button style={{ background: 'orange', color: 'white', fontSize: "15px", fontWeight: "bold", border: "none", height: "35px", textAlign: "center", width: "80px", borderRadius: "8px" }}>
          Load
        </button>
      </div>
    </div>

    <div style={{ marginRight: "9px" }}>
      {/* Assuming the Button component is defined and used properly */}
      <Button style={{ background: "white", color: "black", fontSize: "15px", fontWeight: "bold" }}>Login</Button>
      <Button style={{ background: "green", fontSize: "15px", fontWeight: "bold" }}>Logout</Button>
    </div>
  </div>
</div>

  
  );
};

export default Header;