import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Contact } from "../component/Contact";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const {store,actions} = useContext(Context)
	const listaVacia = store.contacs;
	

	useEffect(() => {
	  actions.getContact();
	}, [])
	

	return(
		<>
		<div>
			{ listaVacia.length === 0 ? <h1 className="text-center">No hay contactos</h1> :
				store.contacs.map((item,index)=>{
					return(
						<Contact item={item} key={item.id}/>
					)
				})
			}
		</div>
		</>

	)
}
