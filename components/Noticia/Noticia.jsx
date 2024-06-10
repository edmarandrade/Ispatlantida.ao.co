import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Noticia(){
    return(
        <>
        <div className="container-fluid blog  py-4">
        <div className="container py-0">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 800}}>
            <h2 className="text-success mb-3">Notícia</h2>
            <p className="mb-0">Explorando o Mundo Acadêmico, Descubra Todas as Atividades e Eventos da Nossa Escola!</p>
            </div>
            <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" id="not_img"  data-wow-delay="0.1s">
                <div className="blog-item">
                <div className="blog-img">
                    <Image src="/img/Not01.jpg" width={500} height={500} className="img-fluid rounded-top w-100"alt="Image" />
                </div>
                <div className="blog-content rounded-bottom py-4">
                    <div className="blog-date">30 Dec 2025</div>
                    <div className="blog-comment my-3">
                    </div>
                    <h1 className="h4 d-block mb-3 text-success">Dia de Africa</h1>
                    <p className="mb-3">Professores e estudantes particpando de uma actividade celebre.</p>
                    <button type="button" class="btn btn-outline-success">Saber mais</button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" id="not_img"  data-wow-delay="0.3s">
                <div className="blog-item">
                <div className="blog-img">
                    <Image src="/img/Not02.jpg" width={500} height={500} className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="blog-content rounded-bottom py-4">
                    <div className="blog-date">31.03.2022</div>
                    <div className="blog-comment my-3">
                    </div>
                    <h1 className="h4 d-block mb-3 text-success">Actividade das Mulheres solidarias do Instituto Politécnico Superior Atlantida </h1>
                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                    <button href="#" type="button" class="btn btn-outline-success">Saber mais</button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" id="not_img"  data-wow-delay="0.5s">
                <div className="blog-item">
                <div className="blog-img">
                    <Image src="/img/Not03.jpg" width={500} height={500} className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="blog-content rounded-bottom py-4">
                    <div className="blog-date">27 Dec 2025</div>
                    <div className="blog-comment my-3">
                    </div>
                    <h1 className="h4 d-block mb-3 text-success">Entrega de medalhas</h1>
                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                    <button href="#" type="button" class="btn btn-outline-success">Saber mais</button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" id="not_img"  data-wow-delay="0.5s">
                <div className="blog-item">
                <div className="blog-img">
                    <Image src="/img/Not04.jpg" width={500} height={500} className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="blog-content rounded-bottom py-4">
                    <div className="blog-date">27 Dec 2025</div>
                    <div className="blog-comment my-3">
                    </div>
                    <h1 className="h4 d-block mb-3 text-success">Feira do Empreendedorismo</h1>
                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                    <button href="#" type="button" class="btn btn-outline-success">Saber mais</button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" id="not_img"  data-wow-delay="0.5s">
                <div className="blog-item">
                <div className="blog-img">
                    <Image src="/img/Not05.jpg" width={500} height={500} className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="blog-content rounded-bottom py-4">
                    <div className="blog-date">27 Dec 2025</div>
                    <div className="blog-comment my-3">
                    </div>
                    <h1 className="h4 d-block mb-3 text-success">Batismo dos Caloiros</h1>
                    <p className="mb-3">Actividade de Boas-Vindas para os novos estudantes da Instituição</p>
                    <button href="#" type="button"  class="btn btn-outline-success">Saber mais</button>
                </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" id="not_img"  data-wow-delay="0.5s">
                <div className="blog-item">
                <div className="blog-img">
                    <Image src="/img/Not08.jpg" width={500} height={500} className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="blog-content rounded-bottom py-4">
                    <div className="blog-date">27 Dec 2025</div>
                    <div className="blog-comment my-3">
                    </div>
                    <h1 className="h4 d-block mb-3 text-success">Entregas de Diplomas Vencida Pela Equipa de Andebol  da Associcao dos Estudantes</h1>
                    <p className="mb-3">Após ter participado de uma acividade disportiva, a equipa do Instituto Superiro Politécnico Atlântida consagrou-se vencedora.</p>
                    <button href="#" type="button" class="btn btn-outline-success">Saber mais</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}