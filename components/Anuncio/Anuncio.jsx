import Link from "next/link";
import React from "react";


export default function Anuncio(){
    return(
        <>
            <div className="container-xxl py-10">
            <div className="container">
            <div className="row g-5">
                <div className="col-lg-10 wow fadeInUp " data-wow-delay="0.5s">
                <div className="h-100">
                    <h4 className=" bg-white text-start text-success pe-3 ">Anúncio</h4>
                    <h1 className="display-6 mb-4 text-secondary">Atualizações dos nossos Eventos </h1>
                    <div class="row g-0">
                    <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="steps-item p-4 mb-4">
                            <h4 className="text-success">Outorga</h4>
                            <p class="mb-0">3ª Cerimónia de Outorga de Diplomas</p>
                            <div class="setps-number text-warning">16 de setembro.</div>
                            <div class="setps-number text-secondary">9h-12h.</div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="steps-item p-4 mb-4">
                            <h4 className="text-success">Comemoração</h4>
                            <p class="mb-0">Batismo dos caloiros</p>
                            <div class="setps-number text-warning">16 de setembro.</div>
                            <div class="setps-number text-secondary">9h-12h.</div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow rounded fadeInUp" data-wow-delay="0.5s">
                        <div class="steps-item p-4 mb-4">
                            <h4 className="text-success">Jornada Científica</h4>
                            <p class="mb-0">5ª Jornada Científica Geral</p>
                            <div class="setps-number text-warning">16 de setembro.</div>
                            <div class="setps-number text-secondary">9h-12h.</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}