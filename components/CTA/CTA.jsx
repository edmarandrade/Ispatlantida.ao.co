import React from "react";

export default function CTA(){
    return(
        <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-certificate fa-4x text-success mb-4" />
                <h5 className="mb-3 text-secondary">Comunidade</h5>
                <h1 className="display-5 mb-0 text-warning" data-toggle="counter-up">+5000</h1>
                <h5 className="mb-3 text-secondary">Estudantes</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users-cog fa-4x text-success mb-4" />
                <h5 className="mb-3 text-secondary ">Polo</h5>
                <h1 className="display-5 mb-0 text-warning " data-toggle="counter-up">4</h1>
                <h5 className="mb-3 text-secondary text-secondary">Luanda - Angola</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users fa-4x text-success mb-4" />
                <h5 className="mb-3 text-secondary">Empregabilidade</h5>
                <h1 className="display-5 mb-0 text-warning" data-toggle="counter-up">80%</h1>
                <h5 className="mb-3 text-secondary">80% dos nossos estudantes são empregados</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-check fa-4x text-success mb-4" />
                <h5 className="mb-3 text-secondary">Licenciados</h5>
                <h1 className="display-5 mb-0 text-warning" data-toggle="counter-up">+2000</h1>
                <h5 className="mb-3 text-secondary">Já são mais de 2000 estudantes licenciados</h5>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}