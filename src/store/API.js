const axios = require("axios");
let initialState=[];
 export const  apiData = ()=>(dispatch) => {
  // const options = {
  //   method: 'GET',
  //   url: 'https://ecommerce-store.p.rapidapi.com/products',
  //   headers: {
  //     'X-RapidAPI-Key': '5a7b058fa3msh9cb7ac133939b78p108483jsn19d1c14bb482',
  //     'X-RapidAPI-Host': 'ecommerce-store.p.rapidapi.com'
  //   }
  // };
  const options = {
    method: 'GET',
    url: 'https://burgers1.p.rapidapi.com/burgers',
    headers: {
      'X-RapidAPI-Key': '5a7b058fa3msh9cb7ac133939b78p108483jsn19d1c14bb482',
      'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
    }
  };
  return  axios.request(options).then(response =>{

console.log(response.data);
    dispatch(getAction(response.data))
  //   response.data.map((product)=>{
  //     console.log(product);
  // }) 

}).catch(error =>{

	console.error(error);
})

};
//reducer 
// eslint-disable-next-line
export default (state =initialState , action)=>{
const {type ,payload} =action;
switch (type){

  case 'GET' : 
  return payload;

  default :
  return state;
  
}
}

//action
const getAction = (payload)=>{

return {
  type : 'GET',
  payload :payload
}
}

// module.exports = apiData ;