import axios from "axios";
import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const AddUser = () => {
    let navigate =useNavigate()
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
    const onSubmit= async (e)=>{
            e.preventDefault()
            await axios.post("http://localhost:3003/users",user)
            navigate("/")
    }

    return (
        <div className="container" >
            <div className="w-75 mx-auto shodow py-5">
                <h2 className="text-center mb-4">ADD A USER</h2>
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
            <button className="btn btn-primary btn-block">ADD USER</button>

            </form>
            </div>
        </div>
    )
}
export default AddUser;