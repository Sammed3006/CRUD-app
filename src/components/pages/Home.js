import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUsers(result.data)
    }

    const deleteUser = async(id)=>{
           await axios.delete(`http://localhost:3003/users/${id}`)
            loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
               
                <table class="table  shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>    
                                    <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}><img src="https://cdn-icons-png.flaticon.com/128/2874/2874780.png" width="20px" height="20px"/></Link>
                                    <Link class="btn btn-outline-primary m-2" to={`/users/edit/${user.id}`}><img src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" width="20px" height="20px"/></Link>
                                    <Link class="btn btn-danger" onClick={()=>{deleteUser(user.id)}}><img src="https://cdn-icons-png.flaticon.com/128/484/484611.png" width="20px" height="20px"/></Link>

                                </td>
                            </tr>
                        ))
                       } 
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home;