import React from "react";
import Layout from "./Layout";
import Link from "next/link";


export default function instituicao(){
    return(
    <>
    <Layout>
        <div>
        <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
            <br />
            <div className="row ">
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/apresentacao" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Apresentação</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/palavra_presidente" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Palavras da Presidente</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/legalidade" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Legalidade</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/organigrama" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Organigrama</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/missao_valores_visao" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Missão, Visão e valores</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/apoio_social" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Acção Social</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/perguntas_frequentes" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Perguntas Frequentes</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            <div className="col-12 my-xxl-4 col-sm-4 col-lg-3 col-md-4 my-3 ">
                <Link style={{textDecoration: 'none'}} href="/instituicao/projetos" className="">
                <div style={{borderLeft: '3px solid green', height: '8rem'}} className="px-4 b-all">
                    <h4 className="text-ispa">Projectos</h4>
                    <p className="hover text-secondary f-12 text-dark f-reg">
                    </p>
                    <p className="hover text-ispa f-12 text-secondary text-dark f-reg">
                    </p>
                </div>
                </Link>
            </div>
            </div>
            <br />
            <br />
            <br /> 
            <br />
        </main>
        </div>
        </Layout>
        
        </>
    )
}