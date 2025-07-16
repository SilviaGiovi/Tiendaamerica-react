import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CarruselBootstrap() {
    return (
        <main style={{ padding: "5px" }}>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" style={{ maxWidth: "700px", margin: "auto" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/imagenes/tienda1.jpg" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Tienda América 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/imagenes/tienda4.jpg" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Tienda América 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/imagenes/tienda3.jpg" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="Tienda América 3" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </main>
    );
}

export default CarruselBootstrap;

