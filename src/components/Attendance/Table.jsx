import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import EditEvent from "../Affiliate/EditAffiliate";
import DeleteAffiliate from "../Affiliate/DeleteAffiliate";

const findAllAttendances = () => {
  return fetch('https://back-proyecto.vercel.app/attendance', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(result => result.json())
  .then(result => {
    if (result.state) {
      return result.data;
    }
    throw new Error('No se pudieron cargar las asistencias');
  })
  .catch(err => console.log(err));
};

const findAllEvents = () => {
  return fetch('https://back-proyecto.vercel.app/event', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(result => result.json())
  .then(result => {
    if (result.state) {
      return result.data;
    }
    throw new Error('No se pudieron cargar los eventos');
  })
  .catch(err => console.log(err));
};

const findAllAffiliates = () => {
  return fetch('https://back-proyecto.vercel.app/affiliate', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(result => result.json())
  .then(result => {
    if (result.state) {
      return result.data;
    }
    throw new Error('No se pudieron cargar los afiliados');
  })
  .catch(err => console.log(err));
};

const Table = ({ flag, setFlag }) => {
  const [attendances, setAttendances] = useState([]);
  const [events, setEvents] = useState([]);
  const [affiliates, setAffiliates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([findAllAttendances(), findAllEvents(), findAllAffiliates()])
      .then(([attendancesData, eventsData, affiliatesData]) => {
        setAttendances(attendancesData);
        setEvents(eventsData);
        setAffiliates(affiliatesData);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    setFlag(false);
  }, [flag]);

  return (
    <div className="card">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          value={attendances}
          tableStyle={{ minWidth: "50rem" }}
          sortField="position"
          sortOrder={1}
        >
          <Column field="position" header="Position" ></Column >
          <Column
            header="Affiliate"
            body={(rowData) => {
              const affiliate = affiliates.find(a => a._id === rowData.affiliate);
              return <span>{affiliate.fname} {affiliate.lname}</span>;
            }}
          ></Column>
          <Column
            header="Event"
            body={(rowData) => {
              const event = events.find(e => e._id === rowData.event);
              return <span>{event.name}</span>;
            }}
          ></Column>
          <Column
            header="Options"
            body={(rowData) => (
              <div className="flex items-center">
                <EditEvent rowData={rowData} setFlag={setFlag} />
                <DeleteAffiliate rowData={rowData} setFlag={setFlag} />
              </div>
            )}
          ></Column>
        </DataTable>
      )}
      <Dialog
        header="Attendance Information"
        visible={selectedAttendance !== null} 
        modal={true}
        style={{ width: "33vw" }}
        onHide={() => setSelectedAttendance(null)} 
      >
        <div>
          {selectedAttendance && (
            <div>
              <h3>{selectedAttendance.position}</h3>
              <p>
                {selectedAttendance.affiliate.fname}{" "}
                {selectedAttendance.affiliate.lname}
              </p>
              <p>{selectedAttendance.event.name}</p>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default Table;
