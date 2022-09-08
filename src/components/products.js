import * as React from "react";
// import {  useEffect } from "react";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { addToCart } from "../store/cart.js";
import {apiData}  from "../store/API.js";

import { deletefromcart } from "../store/cart.js";
import { getData } from "../store/helpful";

import { connect } from "react-redux";
  

function Products(props) {
  const style = { width: "221.2px", height: "200px" };
  
  let data = getData();
// const style2={display:'flex'} 
  
  return (
    <>
      <div className="f">
        <section className="section-cart">
          <Button color="inherit"> 🧺 Cart({props.cart.totalCartItems})</Button>

          {data.map((cartItem) => {
            return (
              <p className="cartData">
               {cartItem.inCart > 0 ? <> {cartItem.name}: {cartItem.inCart} <span> ||</span> </> : null }
                
              </p>
            );
          })}
<div>   <Button
                      variant="contained"
                      color="warning"
                      style={{ width: 100 + "%" }}
                      onClick={() => {
                        props.apiData();
                        alert(`i was Happy with my fixed data 😄 `)
                      }}
                    >
                     GET API DATA
                    </Button></div>
                    <section>
                   {   props.reducer.map((item,idx)=>{
return (<div id="api" key={idx}>

name : {item.name}  || resturant : {item.restaurant} || web : {item.web}
</div>)
                      })}
                    </section>
       
        </section>
        <div className="div">
          <h1>{props.categories.activeCategory.toUpperCase()}</h1>
        </div>
        <section className="section1">
          <div className="ddd">
            <div className="dd">
              {props.products.map((product) =>
                product.category === props.categories.activeCategory &&
                product.id <= 6 ? (
                  <Card key={product.name} className="root">
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe">
                          {product.category[0].toUpperCase()}
                        </Avatar>
                      }
                      title={product.name}
                      subheader={product.category}
                    />

                    <img
                      className="cardMedia"
                      src={product.image}
                      style={style}
                      alt="images"
                    ></img>
                    <CardHeader
                      title={"Price  " + product.price + "$"}
                      subheader={"In Stock  " + product.inStock + "  Pcs"}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: 50 + "%" }}
                      onClick={() => {
                        props.addToCart(product);
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ width: 50 + "%" }}
                      onClick={() => {
                        props.deletefromcart(product);
                      }}
                    >
                      delete item
                    </Button>
                  </Card>
                ) : null
              )}
            </div>
            <div className="dd2">
              {props.products.map((product) =>
                product.category === props.categories.activeCategory &&
                product.id > 6 ? (
                  <Card key={product.name} className="root">
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe">
                          {product.category[0].toUpperCase()}
                        </Avatar>
                      }
                      title={product.name}
                      subheader={product.category}
                    />

                    <img
                      className="cardMedia"
                      src={product.image}
                      style={style}
                      alt={product.name}
                    ></img>
                    <CardHeader
                      title={"Price  " + product.price + "$"}
                      subheader={"In Stock  " + product.inStock + "  Pcs"}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: 50 + "%" }}
                      onClick={() => {
                        props.addToCart(product);
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ width: 45 + "%" }}
                      onClick={() => {
                        props.deletefromcart(product);
                      }}
                    >
                      delete item
                    </Button>
                  </Card>
                ) : null
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer,
    products: state.products, //this is working 
    // products: state.reducer, //this to stop it for now

    categories: state.categories,
    cart: state.cart,
  };
};
// eslint-disable-next-line
const mapDispatchToProps = { addToCart, deletefromcart  ,apiData };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
