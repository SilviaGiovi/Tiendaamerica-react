import React, { useState } from 'react';

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log({ nombre, correo, mensaje });
        // Aquí podrías enviar los datos a un backend
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0 rounded">
                        <div className="card-body p-4">
                            <h3 className="mb-4 text-center">📬 Contáctanos</h3>
                            <form onSubmit={manejarEnvio}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        placeholder="Tu nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="nombre">Nombre</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="correo"
                                        placeholder="nombre@ejemplo.com"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="correo">Correo Electrónico</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <textarea
                                        className="form-control"
                                        placeholder="Escribe tu mensaje aquí"
                                        id="mensaje"
                                        style={{ height: '150px' }}
                                        value={mensaje}
                                        onChange={(e) => setMensaje(e.target.value)}
                                        required
                                    ></textarea>
                                    <label htmlFor="mensaje">Mensaje</label>
                                </div>

                                <button type="submit" className="btn btn-success w-100">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;

