import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
    const [userDetail, setUserDetail] = useState({});
    const { id } = useParams(); // Obtiene el parámetro 'id' de la URL

   

    useEffect(() => {
        // Realiza la solicitud al servidor para obtener los detalles del usuario con el ID proporcionado
        fetch(`http://localhost:3011/api/users/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Agrega este console.log para verificar los datos recibidos
                setUserDetail(data.data);
            })
            .catch(error => console.error("Error fetching user details:", error));
    }, [id]); 

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="h3 mb-2 text-gray-800">Detalle del Usuario</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            {Object.keys(userDetail).length > 0 ? (
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                            <th>Ciudad</th>
                                            <th>País</th>
                                            <th>Número de Teléfono</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{userDetail.id}</td>
                                            <td>{userDetail.name}</td>
                                            <td>{userDetail.lastName}</td>
                                            <td>{userDetail.email}</td>
                                            <td>{userDetail.city}</td>
                                            <td>{userDetail.country}</td>
                                            <td>{userDetail.phoneNumber}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <p>Cargando...</p>
                            )}
                            {userDetail.avatar && ( // Verifica si hay una URL de avatar
                                <div>
                                    <h2>Avatar:</h2>
                                    <img
                                    src={userDetail.avatar}
                                    alt="Avatar"
                                    style={{ maxWidth: '40%', height: 'auto' }} // Establece el ancho máximo y la altura ajustable
                                />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default UserDetail;

