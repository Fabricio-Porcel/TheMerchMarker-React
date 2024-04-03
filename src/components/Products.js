import React , { Component } from 'react';


import ProductsList from './ProductsList';

class Products extends Component{
	constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3011/api/products')
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data.products });
            })
            .catch(error => console.error('Error fetching products:', error));
    }
      


	render(){

		return(
			<React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los Productos en la Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Categoria</th>
                                            {/* <th>Duración</th> */}
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Categoria</th>
                                            {/* <th>Duración</th> */}
										</tr>
									</tfoot>
									<ProductsList products={this.state.products} />
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
}
export default Products;