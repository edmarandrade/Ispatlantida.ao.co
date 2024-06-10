import React from "react"
import Link from "next/link"
import Topbar from "./Topbar"

export default function Navbar(){
    return(
        <>
        <Topbar />
        <nav className="navbar navbar-expand-lg bg-success navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <Link href="#" className="navbar-brand ms-3 d-lg-none">MENU</Link>
            <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav me-auto p-3 p-lg-0">
                <Link href="/" className="nav-item nav-link active">Home</Link>
                <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">A Instituição</Link>
                <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                    <Link href="/instituicao" className="dropdown-item">Apresentação</Link>
                    <Link href="/instituicao/palavra_presidente" className="dropdown-item">Palavra da Presidente</Link>
                    <Link href="/instituicao/legalidade" className="dropdown-item">Legalidade</Link>
                    <Link href="/instituicao/missao_valores_visao" className="dropdown-item">Missão Visão e Valores</Link>
                    <Link href="/instituicao/apoio_social" className="dropdown-item">Acção Social</Link>
                    <Link href="/instituicao/perguntas_frequentes" className="dropdown-item">Perguntas Frequentes</Link>
                </div>
                </div>
                <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Programas</Link>
                <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                    <Link href="feature.html" className="dropdown-item">Licenciatura</Link>
                    <Link href="team.html" className="dropdown-item">Pós-Graduação</Link>
                    <Link href="testimonial.html" className="dropdown-item">Unidades Orgânicas</Link>
                    <Link href="testimonial.html" className="dropdown-item">Unidades Curriculares</Link>
                    <Link href="testimonial.html" className="dropdown-item">Brochura Informativa</Link>
                </div>
                </div>
                <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Investigação</Link>
                <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                    <Link href="feature.html" className="dropdown-item">Investigação Científica</Link>
                    <Link href="team.html" className="dropdown-item">Unidades de Investigação</Link>
                    <Link href="testimonial.html" className="dropdown-item">Publicações</Link>
                    <Link href="testimonial.html" className="dropdown-item">Laboratórios</Link>
                    <Link href="testimonial.html" className="dropdown-item">Apoio a Investigação</Link>
                    <Link href="testimonial.html" className="dropdown-item">Revista Olhar Oientífico</Link>
                </div>
                </div>
                <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Recursos</Link>
                <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                    <Link href="feature.html" className="dropdown-item">Portaldo Estudante</Link>
                    <Link href="team.html" className="dropdown-item">Calendário Acadêmico</Link>
                    <Link href="testimonial.html" className="dropdown-item">Caendário Científico</Link>
                    <Link href="404.html" className="dropdown-item">Regulamento de Estudante</Link>
                    <Link href="404.html" className="dropdown-item">Biblioteca Digital</Link>
                </div>
                </div>
                <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Comunicação
                </Link>
                <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                    <Link href="feature.html" className="dropdown-item">Eventos</Link>
                    <Link href="team.html" className="dropdown-item">Notícia</Link>
                </div>
                </div>
            </div>
            <Link href="#" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Portal de Estudante</Link>
            </div>
        </nav>
        </>
    )
}