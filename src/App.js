import "./App.css";
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState({});

  return (
    <div className="App">
      <div className="bakery">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="bakery-data">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} setTotal={setTotal} setCart={setCart} cart={cart}/> // replace with BakeryItem component
            )
          )}
        </div>
       
      </div>
      <div className="cart">
          <h2>My Cart</h2>
          <p>Total: {total}</p>
          {Object.keys(cart).map(item => 
            <p>
              {cart[item]}x {item}
            </p>
            
          )}
        </div>
    </div>
  );
}

export default App;
