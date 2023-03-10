import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MenuList({ menu }) {
  const [ozellik, setOzellik] = useState("medium");
  const [miktar, setMiktar] = useState(0);

  //modal fonksiyonlarına ait alan

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //bitişi

  const adetHandler = (e) => {
    setMiktar(e.target.value);
  };

  const dispatch = useDispatch();

  //sepete ekle fonksiyonu
  const addToCart = () => {
    if (miktar > 0) {
      toast("Sepete Ürün Eklendi !");
      dispatch(addToCartAction(menu, miktar, ozellik));
    }
  };

  console.log(ozellik);
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div
        className="card m-auto my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        style={{ width: "25rem" }}
      >
        <img
          src={menu.img}
          className="card-img-top"
          alt="..."
          style={{ maxHeight: "280px", cursor: "pointer" }}
          onClick={handleShow}
        />

        <h4 className="card-title mb-5">{menu.ad}</h4>

        <div className="row">
          <div className="col-md-6">
            <h5>Ozellik</h5>
            <select
              id=""
              className="form-select"
              value={ozellik}
              onChange={(e) => setOzellik(e.target.value)}
            >
              {menu.ozellik.map((size) => (
                <option value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <h5>Adet</h5>
            <select
              id=""
              className="form-select"
              value={miktar}
              onChange={adetHandler}
            >
              {[...Array(11).keys()].map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
          </div>
          <div className="col-md-12 mt-3">
            <h4 className="text-danger">
              Fiyat: {menu.fiyat[0][ozellik] * miktar} ₺
            </h4>
          </div>
          <div className="col-md-12 my-3">
            <button className="btn btn-danger w-75" onClick={addToCart}>
              SEPETE EKLE
            </button>
          </div>
        </div>
      </div>

      {/* Modal başlangıcı */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{menu.ad}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={menu.img}
            className="img-fluid"
            style={{ height: "300px" }}
            alt=""
          />
          <h1>Kategori: {menu.kategori}</h1>
          <p>{menu.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-warning" onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuList;
