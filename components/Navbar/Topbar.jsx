import Link from "next/link";
import Image from "next/image" ;

export default function Topbar(){    
    return(
    <>
            <div className="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                <ol className="breadcrumb mb-0">
                </ol>
                </div>
                <div className="col-lg-6 px-5 text-end">
                <small>Segui-nos:</small>
                <div className="h-100 d-inline-flex align-items-center">
                    <Link className="btn-square text-success border-end rounded-0" href="#"><i className="fab fa-facebook-f" /></Link>
                    <Link className="btn-square text-success border-end rounded-0" href="#"><i className="fab fa-instagram" /></Link>
                </div>
                </div>
            </div>
            </div>
        <div className="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="row align-items-center top-bar">
            <div className="col-lg-4 col-md-12 text-center text-lg-start">
                <Link href="/" className="navbar-brand m-0 p-0" ></Link>
                <Image 
                classname="img-fluid rounded" 
                width={80} 
                height={80} 
                src="/img/logo.png" 
                alt="Image" />
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
                <div className="row">
                <div className="col-4">
                    <div className="d-flex align-items-center justify-content-end">
                    <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                        <i className="far fa-clock text-success" />
                    </div>
                    <div className="ps-3">
                        <p className="mb-2">Hora de abertura</p>
                        <h6 className="mb-0">Seg - Sex, 8h00 - 9h00</h6>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex align-items-center justify-content-end">
                    <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                        <i className="fa fa-phone text-success" />
                    </div>
                    <div className="ps-3">
                        <p className="mb-2">Ligue para nós</p>
                        <h6 className="mb-0">+244 945 678 000</h6>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex align-items-center justify-content-end">
                    <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                        <i className="far fa-envelope text-success" />
                    </div>
                    <div className="ps-3">
                        <p className="mb-2">Envia-nos um email</p>
                        <h6 className="mb-0">info@example.com</h6>
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