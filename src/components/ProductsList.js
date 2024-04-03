import React from "react";
import { Link } from "react-router-dom";


function ProductsList(props) {
  return (
    <tbody>
      {console.log(props.product)}
      {props.products.map((product) => (
        <tr key={product.id}>
          <td><Link to={`/products/${product.id}`}>{product.id}</Link></td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.categories}</td>
          
        </tr>
      ))}
    </tbody>
  );
}

export default ProductsList;
