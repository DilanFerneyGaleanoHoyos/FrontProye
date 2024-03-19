import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPeople, BsCalendar, BsClock, BsShield } from "react-icons/bs";
import "./MainPage.css"; // Archivo de estilos personalizados

function MainPage() {
  return (
    <div className="container">
      <div className="card-body text-center">
        <h1 className="card-title font-family mb-4">Bienvenidos al Servicio de Manejo del Club Deportivo</h1>
      </div>

      <div className="row mt-5">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body text-center">
              <BsPeople size={50} className="card-icon text-primary" />
              <h5 className="card-title">Afiliados</h5>
              <p className="card-text">Administar afiliados.</p>
              <a href="/affiliate" className="btn btn-primary btn-icon">Ver Afiliados</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body text-center">
              <BsCalendar size={50} className="card-icon text-danger" />
              <h5 className="card-title">Eventos</h5>
              <p className="card-text">Administar eventos.</p>
              <a href="/Events" className="btn btn-danger btn-icon">Ver Eventos</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body text-center">
              <BsClock size={50} className="card-icon text-success" />
              <h5 className="card-title">Attendance</h5>
              <p className="card-text">Administar attendance.</p>
              <a href="/attendance" className="btn btn-success btn-icon">Ver Attendance</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body text-center">
              <BsShield size={50} className="card-icon text-warning" />
              <h5 className="card-title">Disciplina</h5>
              <p className="card-text">Administar disciplina.</p>
              <a href="/discipline" className="btn btn-warning btn-icon">Ver Disciplina</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
