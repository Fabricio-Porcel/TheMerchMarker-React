import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop() {
    const [listadoDeUsuarios, setListadoDeUsuarios] = useState([]);
    const [cardProps, setCardProps] = useState([
        {
            color: "primary",
            titulo: "Categorias",
            valor: 3,
            icono: "fas fa-table",
        }
    ]);
    const [listadoDeProductos , setListadoDeProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3011/api/users')
            .then(response => response.json())
            .then(data => {
                setListadoDeUsuarios(data);
                const userBlock = {
                    color: "warning",
                    titulo: "Cantidad de Usuarios",
                    valor: data.total,
                    icono: "fas fa-user",
                };
                setCardProps(prevCardProps => [...prevCardProps, userBlock]);
            })
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3011/api/products')
            .then(response => response.json())
            .then(data => {
                setListadoDeProductos(data);
                const productsBlock = {
                    color: "success",
                    titulo: "Cantidad de Productos",
                    valor: data.count,
                    icono: "fas fa-shopping-cart",
                };
                setCardProps(prevCardProps => [...prevCardProps, productsBlock]);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {cardProps.map((producto, index) => (
                    <SmallCard {...producto} key={index} />
                ))}
            </div>
        </React.Fragment>
    );
}

export default ContentRowTop;
