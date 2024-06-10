import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About(){
    return(
        <>
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="img-border">
                    <Image 
                    className="img-fluid" 
                    width={1500} 
                    height={1500} 
                    src="" 
                    alt="" />
                </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                    <h4 className=" bg-white text-start text-success pe-3 ">Sobre nós</h4>
                    <h1 className="display-6 mb-4 text-secondary">Instituto Superior Politécnico Atlântida </h1>
                    <p>O Instituto Superior Politécnico Atlântida, idealizado e fundado em 2012, legalizado pelo Decreto Presidencial Nº 168 de 24 de julho de 2012/2013, localizado no município de Belas, bairro Kifica, província de Luanda, é uma instituição dotada de autonomia estatuária Pedagógica, Científica, Cultural, Administrativa, Financeira e Patrimonial. É um estabelecimento privado integrado na região académica n°1 do subsistema do Ensino Superior em Angola</p>
                    <p className="mb-4">A actual estrutura estabelece a constituição de quatro áreas do conhecimento, a saber: Ciências da Saúde, Ciências das Engenharias e Tecnologia, Ciências da Gestão e Ciência Sociais. Ao todo, são ministrados 15 cursos de graduação: licenciatura em Direito, Relações Internacionais, Pedagogia, Psicologia, Sociologia, Gestão de Empresa, Gestão de Recursos Humanos, Contabilidade, Economia, Enfermagem, Análises Clínicas, Engenharia Informática, Engenharia Civil, Farmácia e Fisioterapia.</p>
                    <Link className="btn btn-primary bg-success border-0  py-3 px-5" href="#">Leia mais</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}