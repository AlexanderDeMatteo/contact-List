const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacs:[],
			oneContac:[],
		},
		actions: {


			getContact: async() =>{
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/alex")
					let data = await response.json()
					if(response.ok){
						setStore({contacs:data})
						
					}
				} catch (error) {
					console.log("error en traer los contactos")
				}
			},

			createContact: async currentContact => {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/",{
					method: "POST",
					headers:{
						'Content-Type': 'application/json'
					},
					body:JSON.stringify({
						full_name: currentContact.full_name,
                		email: currentContact.email,
                		agenda_slug: "alex",
                		address: currentContact.address,
                		phone: currentContact.phone
					})
				})
				if(response.ok){
					
				}
					
				} catch (error) {
					console.log("eeror")
				}
			},
			
			deleteContact : async (contactId) =>{
				try {
					let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`,{
					method: "DELETE",
					})
					if(response.ok){
						getActions().getContact()
					}
				} catch (error) {
					console.log("error al eliminar")
					console.log(error)
				}
				
			},
			getOneContact: async(id) =>{
				try {
					let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
					let data = await response.json()
					if(response.ok){
						setStore({oneContac:data})
					}
				} catch (error) {
					
				}
			},

			edithContact: async(currentContact) =>{
				try {
					let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${currentContact.id}`,{
					method: "PUT",
					headers:{
						'Content-Type': 'application/json'
					},
					body:JSON.stringify({
						full_name: currentContact.full_name,
                		email: currentContact.email,
                		agenda_slug: "alex",
                		address: currentContact.address,
                		phone: currentContact.phone
					})
				})
				if(response.ok){
					alert("se ha editado con exito")
				}
			}catch(error){
				console.log("fallo aaaaa")
				console.log(error)
			}
		},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
