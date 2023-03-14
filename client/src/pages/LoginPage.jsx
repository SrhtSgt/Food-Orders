import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUserAction, registerUserAction } from "../actions/userActions";

function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.loginUserReducer);
  const { success, loading, users } = userState;

  const girisHandler = () => {
    if (success == true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Kullanıcı Girişi Başarılı",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const user = {
      mail: mail,
      password: password,
    };
    console.log(user);
    dispatch(loginUserAction(user));
  };
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (localStorage.getItem("currentUser")) {
  //       navigate("/");
  //     }
  //   }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container w-50 bg-warning" style={{ height: "350px" }}>
        <h2 className="display-4">Kullanıcı Giriş Ekranı</h2>

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

        <button
          className="btn btn-outline-danger w-50 m-auto mt-5"
          onClick={girisHandler}
        >
          {/* <Link to="/login">Giriş İçin Tıkla</Link> */}
          KAYIT OL
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
