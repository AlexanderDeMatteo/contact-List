import React, { useContext, useEffect, useState } from 'react'
import { ContactData } from '../component/ContactData'
import { Context } from "../store/appContext.js";
import { NavLink, Navigate, useParams } from 'react-router-dom';

export const EditarContacto = () => {
    const {store,actions} = useContext(Context)
    const [currentContact, setCurrentContact] = useState({})
    let contactID = useParams().contactID
    console.log(currentContact)

    const getOneContact= async(id) =>{
        try {
            let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
            if(response.ok){
                let data = await response.json()
                setCurrentContact(data[0])   
            }
        } catch (error) {
            console.log("fallo")
        }
    }



    useEffect(() => {
        getOneContact(contactID);
    }, [])
    
    const editar = (e) =>{
        e.preventDefault()
        actions.edithContact(currentContact)
        // Navigate(`https://playground.4geeks.com/apis/fake/contact/${id}`)
    }
    
    return (
        <>
        <div className="fondo">

		<div className="container">
            <h1 id="entrado">Editar contacto</h1><br></br>

            <form id="entrado" onSubmit={editar}>
                <p>Full Name</p>
                <input type="text"
                        placeholder="Full name"
                        value={currentContact.full_name}
                        onChange={e=>{
                                setCurrentContact({
                                        ...currentContact,
                                        full_name : e.target.value})}}/>
                <p>Email</p>
                <input type="text" 
                        placeholder='Enter Email'
                        value={currentContact.email}
                        onChange={e=>setCurrentContact({...currentContact ,email:e.target.value})} />
                <p>Phone</p>
                <input type="text" 
                        placeholder='Enter Phone'
                        value={currentContact.phone}
                        onChange={e=>setCurrentContact({...currentContact ,phone:e.target.value})}
                        />
                <p>Address</p>
                <input type="text" 
                        placeholder='Enter Address'
                        value={currentContact.address}
                        onChange={e=>setCurrentContact({...currentContact, address:e.target.value})}
                        />

                <input className="button" type="submit" value="enviar" name="enviar"/>
            </form>
            <NavLink id="enlace" to="/">Get back to contact list</NavLink>
           
            </div>
        </div>
		</>
  )
}
// nombre, telefono, direccion, correo