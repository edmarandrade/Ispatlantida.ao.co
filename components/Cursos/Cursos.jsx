import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Cursos(){
    return(
        <>
        {/* Service Start */}
        <div className="container-xxl py-5">
        <div className="container">

            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
            <h4 className=" bg-white text-center text-success px-3">Nossos Cursos</h4>
            <p className="mb-4">Nós nos concentramos em fazer o melhor em todos os setores</p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-outline-success ">Mais cursos</button>
            </div>
            <div className="row g-4 py-5">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <Link className="service-item d-block rounded text-center h-100 p-4" href="#">
                <Image className="img-fluid rounded mb-4" width={500} height={500} src="/img/Cur01.jpg" alt="" />
                <h4 className="mb-0 text-secondary">Ciências da Saúde</h4>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <Link className="service-item d-block rounded text-center h-100 p-4" href="">
                <Image className="img-fluid rounded mb-4" width={500} height={500} src="/img/Cur02.jpg" alt="" />
                <h4 className="mb-0 text-secondary">Ciências das Engenharias e Tecnologia</h4>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <Link className="service-item d-block rounded text-center h-100 p-4" href="">
                <Image className="img-fluid rounded mb-4" width={500} height={500} src="/img/Cur03.jpg" alt="" />
                <h4 className="mb-0 text-secondary">Ciências da Gestão</h4>
                </Link>
            </div>
            </div>
        </div>
        
        </div>
        {/* Service End */}

        </>
    )
}