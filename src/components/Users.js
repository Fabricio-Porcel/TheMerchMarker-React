import React, { useState, useEffect } from "react";
import UsersList from './UsersList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./UserDetail";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3011/api/users')
            .then(response => response.json())
            .then(data => setUsers(data.data))
            .catch(error => console.error("Error fetching user:", error));
    }, []);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="h3 mb-2 text-gray-800">Todos los Usuarios en la Base de Datos</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                        </tr>
                                    </tfoot>
                                    <UsersList users={users} />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
  
        </div>

        
    );
}

export default Users;
