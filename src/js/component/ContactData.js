import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

export const ContactData = ({title}) => {

const {store, actions} = useContext(Context)        
const [currentContact, setCurrentContact] = useState(
        {
                full_name: "",
                email:'',
                address:"",
                phone:"",
        }
)



        const enviarDatos= e =>{
                e.preventDefault()
                actions.createContact(currentContact)
                alert("el contacto se ha agregado correctamente")
        }


            

    return(
		<>
        <div className="fondo">

		<div className="container">
            <h1 id="entrado">{title}</h1><br></br>

            <form id="entrado" onSubmit={enviarDatos}>
                <p>Full Name</p>
                <input type="text"
                        placeholder="Full name"
                        onChange={e=>{
                                setCurrentContact({
                                        ...currentContact,
                                        full_name : e.target.value})}}/>
                <p>Email</p>
                <input type="text" 
                        placeholder='Enter Email'
                        onChange={e=>setCurrentContact({...currentContact ,email:e.target.value})} />
                <p>Phone</p>
                <input type="text" 
                        placeholder='Enter Phone'
                        onChange={e=>setCurrentContact({...currentContact ,phone:e.target.value})}
                        />
                <p>Address</p>
                <input type="text" 
                        placeholder='Enter Address'
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
