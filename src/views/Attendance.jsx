
import { useState } from "react";
import Table from "../components/Attendance/Table";



function Attendance() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <br />
      <div style={{ textAlign: "center" }}>
        <h2>Bienvenidos a la página de Disiplinas</h2>
      
       
      </div>
      <br />
    
      <br />
      <br />
      <Table flag={flag} setFlag={setFlag} />
    </>
  );
}

export default Attendance;


