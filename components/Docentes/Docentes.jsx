import Image from "next/image"

export default function Docentes(){
    return(
        <>
            <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                <h3 className=" bg-white text-center text-success px-3">Docentes</h3>
                <p className="mb-4">Somos uma equipe criativa para o seu projeto dos sonhos</p>
                </div>
                <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center p-4">
                    <Image 
                        className="img-fluid rounded-circle w-1 p-0 mb-4"
                        width={1500}
                        height={1500}
                        src="/img/Pr01.jpg" 
                        alt="" />
                    <div className="team-text">
                        <div className="team-title">
                        <h5 className="text-success">FERNANDO RANGEL </h5>
                        <span>ECONOMISTA</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center p-4">
                    <Image 
                        className="img-fluid rounded-circle w-1 p-0 mb-4"
                        width={1500}
                        height={1500}
                        src="/img/Pr03.jpg" 
                        alt="" />
                    <div className="team-text">
                        <div className="team-title">
                        <h5 className="text-success">LUVAMBO SEBASTIÃO</h5>
                        <span>GESTÃO DE EMPRESA</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center p-4">
                    <Image 
                        className="img-fluid rounded-circle w-1 p-0 mb-4"
                        width={1500}
                        height={1500}
                        src="/img/Pr02.jpg" 
                        alt="" />
                    <div className="team-text">
                        <div className="team-title">
                        <h5 className="text-success">CELESTINO DAVID DOCEBNTE</h5>
                        <span>ENGENHARIA INFORMATICA</span>
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