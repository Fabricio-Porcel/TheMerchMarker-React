import React, { useState, useEffect } from 'react';

import UsersInDb from './CategoriesInDb';
import ContentRowMovies from './ContentRowMovies';
import { Link } from "react-router-dom";
function ContentRowTop() {

	const [ultimoProducto, setUltimoProducto] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3011/api/products')
			.then(response => response.json())
			.then(data => {
				let productoAMostrar = data.products.pop();
				setUltimoProducto(productoAMostrar);
			})
			.catch(error => console.error('Error al obtener los productos:', error));
	}, []);

	// Esta función de devolución de llamada se ejecutará cada vez que cambie el valor de ultimoProducto
	useEffect(() => {
		console.log(ultimoProducto);
	}, [ultimoProducto]);

	const [ultimoProductoImage, setUltimoProductoImage] = useState([]);
	useEffect(() => {
		if (ultimoProducto !== null) {
			fetch(`http://localhost:3011/api/products/${ultimoProducto.id}`)
				.then(response => response.json())
				.then(data => setUltimoProductoImage(data))
				.catch(error => console.error('Error al obtener la imagen del último producto:', error));
		}
	}, [ultimoProducto]);


	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid" style={{ backgroundColor: '#FEFAE0' }}>
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">The Merch Market Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<div className="col-lg-6 mb-4">
						<div className="card" style={{ backgroundColor: '#F6F7F0' }}>
							<div className="card-header py-3" style={{ backgroundColor: '#EDEEE8' }}>
								<h5 className="m-0 font-weight-bold text-gray-800" >Ultimo Producto en la Base de datos</h5>
							</div>
							<div className="card-body">
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={ultimoProductoImage.imageUrl} alt=" Star Wars - Mandalorian " />
								</div>

								{ultimoProducto && (
									<p>{ultimoProducto.description}</p>
								)}

								{/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del Producto</a> */}
								<Link className="btn btn-danger"  rel="nofollow" to={`/products/${ultimoProductoImage.id}`}>Detalle del Producto</Link>
							</div>
						</div>
					</div>
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
					<UsersInDb />

					{/*<!--End Genres In Db-->*/}
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;