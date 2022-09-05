import * as React from "react";
import {  useEffect } from "react";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { addToCart } from "../store/cart.js";
import { deletefromcart } from "../store/cart.js";
import { getData } from "../store/helpful";

import { connect } from "react-redux";

function Products(props) {
  const style = { width: "221.2px", height: "200px" };
  // const [savedNotes] = useState(JSON.parse(localStorage.getItem('cart')))
  // const [items, setList] = useState(savedNotes ? savedNotes : []);
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(items));

  //  },[items]);

  let data = getData();
  console.log("this is the data i received fro helpful ", data);
  //  let items =  JSON.parse(localStorage.getItem('cart'))
  // const initialState ={
  //   cartItems:[
  //     {id:3,
  //       name: 'Khoraro', category: 'food', price: 0.39, inStock: 90, inCart: 1,
  //       image: 'https://n4.sdlcdn.com/imgs/j/a/x/Cucumber-Green-Vegetables-Premium-Vegetables-SDL210844973-1-f1cdd.jpg',
  //     }
  //   ],
  //   totalCartItems:0,
  // };  
  
  // useEffect(()=>{

  // localStorage.setItem('cart', JSON.stringify(initialState ))

  // },[])
  // const style2={display:'flex'}
  return (
    <>
      <div className="f">
        <section className="section-cart">
          <Button color="inherit"> 🧺 Cart({props.cart.totalCartItems})</Button>

          {/* {console.log("this is items from local storage",savedNotes)} */}
          {data.map((cartItem) => {
            return (
              <p className="cartData">
               {cartItem.inCart > 0 ? <> {cartItem.name}: {cartItem.inCart} <span> ||</span> </> : null }
                
              </p>
            );
          })}

          {/* {
          props.cart.cartItems.map(cartItem => {
            return (
              <p >
                {cartItem.name}: {cartItem.inCart} pc(s) /
              </p>
            );
          })

        } */}
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
    products: state.products,
    categories: state.categories,
    cart: state.cart,
  };
};

const mapDispatchToProps = { addToCart, deletefromcart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
