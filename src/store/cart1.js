// const initialState ={
//     cartItems:[
    
//     ],
//     totalCartItems:0,
//   };
  

// export default (state = initialState, action)=> {
//     const { type, payload } = action;
//     switch (type) {
//     case 'DELETEFROMCART':
//       let exists = true;
//       console.log(state)
//       for(let i = 0; i < state.cartItems.length; i++){
//         if(state.cartItems[i].name === payload.name){
          
//           state.cartItems[i].inCart -= 1;
//           state.totalCartItems -= 1;
//           if(state.cartItems[i].inCart === 0){
//             exists = false;
//           }
//         }
//       }
//       return state;
//     default:
//       return state;
//     }
//   };

//   export const removeFromCart = product => {
//     return {
//       type: 'DELETEFROMCART',
//       payload: product,
//     };
//   };