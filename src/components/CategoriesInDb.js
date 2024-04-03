import React, { Component } from 'react';
import Category from './Category';

let categories = [
    { category: 'Tecnología' },
    { category: 'Indumentaria' },
    { category: 'Accesorios' },
];

class CategoriesInDb extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorias en la Base de Datos</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {categories.map((category, index) => (
                                    <Category key={index} category={category.category} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CategoriesInDb;


