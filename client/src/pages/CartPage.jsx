import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);

  const cartItems = cartState.cartItems;

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="display-2 text-warning">Sepetim</h2>

          {cartItems.map((urun) => (
            <div className="row">
              <div className="col-md-4">
                <img src={urun.img} alt="" />
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
