import config from '../config';

const ApiService = {
  getPets() {
    return fetch(`${config.API_ENDPOINT}/api/pets`).then((res) => res.json());
  },

  getQueue() {
    return fetch(`${config.API_ENDPOINT}/api/people`).then((res) => res.json());
  },

  
  handleDogAdopt()  {
    return fetch(`${config.API_ENDPOINT}/dogs`,{method: 'DELETE'})
     .then(res=>{
         if(!res.ok){
           return res.json().then(e => Promise.reject(e))
         }
          return res.json();
       })
   },

   handleCatsQueue() {
     return fetch(`${config.API_ENDPOINT}/cats`,{method: 'DELETE'})
       .then(res=>{
         if(!res.ok){
           return res.json().then(e => Promise.reject(e))
         }

          return res.json()
       })
   },

   handleUserPost(user){
     return fetch(`${config.API_ENDPOINT}/`, {
              method: 'POST',
       headers:{
         'content-type': 'application/json'
       },
       body: JSON.stringify({
         name: user
       }),
   })
   .then(res => {
     if(!res.ok)
     return res.json().then(e => Promise.reject(e))
     return res.json()
   })
   },

   handleUserDelete(){
     return fetch(`${config.API_ENDPOINT}/adopters`, {
       method: 'DELETE',
     })
     .then(res => {
       if(!res.ok)
      return res.json().then(e => Promise.reject(e))
       return res.json()
     })
   }

 }

 export default ApiService;
