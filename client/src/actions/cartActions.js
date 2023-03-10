export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      ad: menu.ad,
      _id: menu._id,
      img: menu.img,
      ozellik: menu.ozellik,
      desc: menu.desc,
      kategori: menu.kategori,
      miktar: Number(miktar),
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * miktar,
    };
    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      const cartItems = getState().cartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

export const deleteFromCartAction = (menu) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: menu });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
