// import React from 'react';

// import * as React from 'react';
// import  Button from '@mui/material/Button';
// import Toolbar from  '@mui/material/Toolbar';
// import AppBar from '@mui/material/AppBar';
// import makeStyles from '@mui/material/makeStyles';

// import { addToCart } from '../store/cart';

// import { connect } from 'react-redux';

// const useStyle = makeStyles((theme) => ({
//     cart: {
//         backgroundColor: '#f7f7f7',
//         width: '25%',
//         border: '1px 1px 1px 1px solid black',
//         borderLeft: '4px solid #3f51b5',
//         boxShadow: '1px 0px 10px black',
//         zIndex: '-1',
//     },
//     cartDiv: {
//         padding: '18px',
//         textAlign: 'center',
//         display: 'flex',
//         fontSize: '15px',
//         justifyContent: 'center',
//         color: '#d7d7db',
//       },
//     cartButton: {
//         fontSize: 'x-large',
//     },
//     section1: {
//         width: '90%',
//     },
//     p: {
//         fontSize: 'x-large',
//         textAlign: 'center',
//         borderBottom: '2px solid #3f51b5',
//         borderRight: '2px solid #3f51b5',
//         backgroundColor: '#dcdcdce0',
//         padding: '15px 0px',
//         marginTop: '0',
//         marginBottom: '0',
//         fontFamily: 'sans-serif',
//         color: '#161e49',
//         boxShadow: '0px -2px 8px 2px #4f5ca1',
//     },
// }));

//  function Cart(props){
//     const classes = useStyle();
//     const style = {
// backgroundColor:'#fff',
// color:'#000',

//     }
//     return(
//         <>
//         {/* <AppBar style={style} position="absolute">
//         <Toolbar className="cartDiv">
//           <Button className={classes.cartButton}   color="red">Cart ({props.cart.totalCartItems})</Button>
//         </Toolbar>

//       </AppBar> */}
//       {
//         props.cart.cartItems.map(cartItem => {
//           return (
//             <p className={classes.p}>
//               {cartItem.name}: {cartItem.inCart} pc(s)
//             </p>
//           );
//         })

//       }
//         </>
//     );
// }

// const mapStateToProps = (state) =>{
//     return {cart: state.cart};
// }

// const mapDispatchToProps = {addToCart};

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
