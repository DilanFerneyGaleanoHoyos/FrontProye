import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

const updateEvent = (id, data) => {
  return fetch(`https://back-proyecto.vercel.app/event/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(result => {
      if (result.state) {
        return result;
      } else {
        throw new Error(result.error);
      }
    })
    .catch(err => console.log(err));
};

const EditEvent = ({ rowData, setFlag }) => {
  const [visible, setVisible] = useState(false);
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [site, setSite] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setID(rowData.id);
    setName(rowData.name);
    setDate(rowData.date);
    setSite(rowData.site);
    setCity(rowData.city);
  }, []);

  const handleEditEvent = () => {
    const eventData = {
      name: name,
      date: date,
      site: site,
      city: city
    };

    updateEvent(rowData.id, eventData)
      .then((result) => {
        alert("Evento actualizado exitosamente");
        setFlag(true);
        setVisible(false);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Edit"
        icon="pi pi-user-edit"
        severity="warning"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Edit Event"
        visible={visible}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="card flex flex-column md:flex-row gap-3">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">ID</span>
            <InputNumber placeholder="ID" value={id} disabled />
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-calendar"></i>
            </span>
            <InputText value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-map-marker"></i>
            </span>
            <InputText value={site} onChange={(e) => setSite(e.target.value)} placeholder="Site" />
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-home"></i>
            </span>
            <InputText value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
          </div>
        </div>
        <br></br>
        <Button
          label="Aceptar"
          icon="pi pi-check"
          onClick={() => handleEditEvent()}
        />
        <Button
          label="Cancelar"
          icon="pi pi-times"
          onClick={() => setVisible(false)}
          className="p-button-text"
        />
      </Dialog>
    </div>
  );
};

export default EditEvent;
