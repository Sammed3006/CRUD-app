import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {useNavigate,useParams} from "react-router-dom"

const EditUser = () => {
    let navigate =useNavigate()
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    const {name , username , email , phone,website}=user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }
    useEffect(()=>{
        loadUsers()
    },[])
    const onSubmit= async (e)=>{
            e.preventDefault()
            await axios.put(`http://localhost:3003/users/${id}`,user)
            navigate("/")
    } 
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container " >
            <div className="w-75 mx-auto shodow p-5">
                <h2 className="text-center mb-4">EDIT USER</h2>
                <form onSubmit={onSubmit}>
            <div className="form-group py-2">
             <input type="text" 
                className="form-control form-control-lg"
                 placeholder="First name" 
                 name="name" 
                 value={name}
                 onChange={onInputChange}/>
            </div>
            <div className="form-group py-2">
                <input type="text"
                 className="form-control form-control-lg" 
                 placeholder="User name"
                  name="username" 
                  value={username}
                  onChange={onInputChange}/>
            </div>
            <div className="form-group py-2">
                <input type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter Email" 
                name="email"
                value={email} 
                onChange={onInputChange}/>
            </div>
            <div className="form-group py-2">
                <input type="number" 
                className="form-control form-control-lg" 
                placeholder="Enter phonenumber" 
                name="phone"
                value={phone}
                 onChange={onInputChange}/>
            </div>
            <div className="form-group py-2">
                <input type="text" 
                className="form-control form-control-lg"
                 placeholder="Enter Website name" 
                 name="website"
                 value={website}
                 onChange={onInputChange}/>
            </div>
            <button className="btn btn-warning btn-block">UPDATE USER</button>

            </form>
            </div>
        </div>
    )
}
export default EditUser;