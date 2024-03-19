import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import EditEvent from "../Discipline/EditDiscipline";
import DeleteEvent from "../Discipline/DeleteDiscipline";

const findAllDisciplines = () => {
  return fetch("https://back-proyecto.vercel.app/discipline", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(result => result.json())
    .then(result => {
      if (result.state) {
        return result.data.map(discipline => ({
          ...discipline,
          id: discipline._id 
        }));
      }
      throw new Error("No se pudo cargar las disciplinas");
    });
};
const renderIndividual = (rowData) => {
  return rowData.individual ? "Sí" : "No";
};
const TableDiscipline = ({ flag, setFlag }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDisciplines = () => {
    setLoading(true);
    findAllDisciplines()
      .then(result => {
        setDisciplines(result);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    setFlag(false);
  };

  useEffect(() => {
    loadDisciplines();
  }, [flag]);

  return (
    <div className="card">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          value={disciplines}
          tableStyle={{ minWidth: "50rem" }}
          sortField="id"
          sortOrder={1}
        >
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="individual" header="Individual" body={renderIndividual}></Column>
          <Column
            header="Opciones"
            body={(rowData) => (
              <>
                <EditEvent rowData={rowData} setFlag={setFlag} />
             

                
              </>
            )}
          ></Column>
          <Column
         
            body={(rowData) => (
              <>
                
                <DeleteEvent rowData={rowData} setFlag={setFlag} />

                
              </>
            )}
          ></Column>



        </DataTable>
      )}
    </div>
  );
};

export default TableDiscipline;
