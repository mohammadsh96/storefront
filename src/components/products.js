import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles'
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';

import Avatar from '@mui/material/Avatar';
import  Button from '@mui/material/Button';
// import Toolbar from  '@mui/material/Toolbar';
// import AppBar from '@mui/material/AppBar';
// import { red } from '@material-ui/core/colors';
import { addToCart } from '../store/cart.js';
import { connect } from 'react-redux';

function Products(props) {
const style={width:'221.2px' , height:'200px'}
// const style2={display:'flex'}
  return (
    <>
    <div className="f">
    <section className="section-cart">
        
            <Button  color="inherit"> 🧺 Cart({props.cart.totalCartItems})</Button>

        {
          props.cart.cartItems.map(cartItem => {
            return (
              <p >
                {cartItem.name}: {cartItem.inCart} pc(s) /
              </p>
            );
          })

        }
      </section>
        <div className="div">
          <h1>
            {props.categories.activeCategory.toUpperCase()}
          </h1>
        </div>
      <section className="section1">

<div className="ddd">
  
  <div className="dd">
          {
            props.products.map((product) => (
              
              product.category === props.categories.activeCategory && product.id<=6 ?
                <Card key={product.name} className="root" >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" >
                        {product.category[0].toUpperCase()}
                      </Avatar>
                    }
                    title={product.name}
                    subheader={product.category}
                  />
                
                  <img className="cardMedia" src={product.image} style={style} alt="images" ></img>
                  <CardHeader
                    title={'Price  ' + product.price + '$'}
                    subheader={'In Stock  ' + product.inStock + '  Pcs'}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: 100 + '%' }}
                    onClick={() => {
                      props.addToCart(product);
                    }
                    }>
                      ADD TO CART
                  </Button>

                </Card>
                :
                null
            ))
          }
          
          </div>
          <div className="dd2">
          {
            props.products.map((product) => (
              
              product.category === props.categories.activeCategory && product.id>6 ?
                <Card key={product.name} className="root" >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" >
                        {product.category[0].toUpperCase()}
                      </Avatar>
                    }
                    title={product.name}
                    subheader={product.category}
                  />
                
                  <img className="cardMedia" src={product.image} style={style} ></img>
                  <CardHeader
                    title={'Price  ' + product.price + '$'}
                    subheader={'In Stock  ' + product.inStock + '  Pcs'}
                  />
                  <Button
                    variant="contained"
                    color="secondary"

                    style={{ width: 100 + '%' }}
                    onClick={() => {
                      props.addToCart(product);
                    }
                    }>
                      ADD TO CART
                  </Button>

                </Card>
                :
                null
            ))
          }
          
          </div>
        </div>
      </section>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart };
};

const mapDispatchToProps = { addToCart };


export default connect(mapStateToProps, mapDispatchToProps)(Products);