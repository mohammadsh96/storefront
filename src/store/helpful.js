
export const localStorageData = (props)=> {

   localStorage.setItem('cart', JSON.stringify(props));

} 
export const getData = ()=> {

  
 let data = JSON.parse(localStorage.getItem('cart'))
//  console.log(data.cartItems)
return data.cartItems
}
