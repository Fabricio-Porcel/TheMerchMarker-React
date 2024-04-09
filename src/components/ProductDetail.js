import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";


function ProductDetail () {

    const [productDetail , setProductDetail] = useState([])
    const { id } = useParams(); // Obtiene el parámetro 'id' de la URL

   

    useEffect(() => {
        // Realiza la solicitud al servidor para obtener los detalles del usuario con el ID proporcionado
        fetch(`http://localhost:3011/api/products/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Agrega este console.log para verificar los datos recibidos
                setProductDetail(data);
            })
            .catch(error => console.error("Error fetching user details:", error));
    }, [id]); 


    return (

        <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="h3 mb-2 text-gray-800">Detalle del Producto</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="card shadow mb-4">
                    <div className="card-body">
                        {Object.keys(productDetail).length > 0 ? (
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{productDetail.id}</td>
                                        <td>{productDetail.name}</td>
                                        <td>{productDetail.description}</td>
                                        <td>{productDetail.category_id}</td>
                                        <td>${productDetail.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p>Cargando...</p>
                        )}
                        {productDetail.imageUrl && ( // Verifica si hay una URL de avatar
                            <div>
                                <h2>Imagen del Producto:</h2>
                                <img
                                src={productDetail.imageUrl}
                                alt="Imagen Producto"
                                style={{ maxWidth: '40%', height: 'auto' }} 
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


export default ProductDetail;