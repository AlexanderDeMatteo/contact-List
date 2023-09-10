import React, {useContext, useEffect, useState} from 'react'
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { Link, NavLink, useParams } from 'react-router-dom';

export const Contact = ({item}) => {
 const {store, actions} =useContext(Context)



  
  const eliminar=(id)=>{
    actions.deleteContact(id);
    // actions.getContact()

  }
  
  
  
  



  return (
    <>
        <div className="card mb-3" id="carta">
            <div className="row g-0" id="bodyCarta">
                <div className="col-md-4" id="bodyCarta">
                    <img src="data:image/png;base64,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" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8" id="bodyText">
                    <div className="card-body" id="bodyCarta">
                        <h5 className="card-title">{item.full_name} {item.id}</h5>
                        <p className="card-text">{item.address}</p>
                        <p className="card-text"><small className="text-muted">{item.phone}</small></p>
                        <p className="card-text"><small className="text-muted">{item.email}</small></p>
                    </div>
                    <div className='icons'>
                      <i id="icon" className="fa-solid fa-trash" onClick={()=>eliminar(item.id)}></i>
                      <Link to={`/editarContacto/${item.id}`}>
                        <i id="icon" className="fa-solid fa-pencil"></i>
                      </Link>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}

Contact.propTypes = {
  nombre: PropTypes.string,
}