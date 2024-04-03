import React , {useState , useEffect} from "react";


function ProductsByCategory(){

const [countByCategory , setCountByCategory] = useState([]);

useEffect(() =>{
fetch('http://localhost:3011/api/products')
.then( response => response.json())
.then (data =>
    setCountByCategory(data.countByCategory))
.catch( error => console.log('Error fetching products: ' + error))
},[])

    return(

        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="h3 mb-2 text-gray-800">Cantidad de Productos por Categoría</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            {Object.keys(countByCategory).length > 0 ? (
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Tecnología</th>
                                            <th>Indumentaria</th>
                                            <th>Accesorios</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{countByCategory.Tecnología}</td>
                                            <td>{countByCategory.Indumentaria}</td>
                                            <td>{countByCategory.Accesorios}</td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <p>Cargando...</p>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    
}

export default ProductsByCategory;