import Link from "next/link";
import React from "react";

export default function Footer(){
    return(
      <>
 
      <div className="container-fluid bg-warning text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Endereço</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Município de Belas, bairro Kifica, província de Luanda</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
              <div className="d-flex pt-2">
                <Link className="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i className="fab fa-facebook-f" /></Link>
                <Link className="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i className="fab fa-instagram" /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Páginas</h5>
              <Link className="btn btn-link" href="#">Sobre Nós</Link>
              <Link className="btn btn-link" href="#">Nosso Contacto</Link>
              <Link className="btn btn-link" href="#">Nossos Cursos</Link>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
      </div>
      </>
    )
}