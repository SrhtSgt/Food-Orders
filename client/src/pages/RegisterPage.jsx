import { stripBasename } from "@remix-run/router";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUserAction } from "../actions/userActions";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.registerUserReducer);
  const { success, loading, users } = userState;

  const kaydolHandler = () => {
    if (password != confirmPassword) {
      Swal.fire("Şifreler uyuşmamaktadır!");
    } else {
      if (success == true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Kullanıcı Kaydı Başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const user = {
        name: name,
        mail: mail,
        password: password,
      };
      console.log(user);
      dispatch(registerUserAction(user));
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container w-50 bg-warning" style={{ height: "350px" }}>
        <h2 className="display-4">Kullanıcı Kayıt Ekranı</h2>
        <input
          type="text"
          placeholder="İsminizi Giriniz"
          className="form-control "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Emailinizi Giriniz"
          className="form-control my-3"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrenizi Giriniz"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrenizi Tekrar Giriniz"
          className="form-control my-3"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="btn btn-outline-danger w-50 m-auto"
          onClick={kaydolHandler}
        >
          {/* <Link to="/login">Giriş İçin Tıkla</Link> */}
          KAYIT OL
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
