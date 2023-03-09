import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerActions";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import ClipLoader from "react-spinners/ClipLoader";

function HomePage() {
  const dispatch = useDispatch();

  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers, loading } = burgerState;
  console.log(burgers);

  useEffect(() => {
    dispatch(getAllBurgers());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <div className="text-center my-5">
            <div
              className="spinner-border text-warning "
              role="status"
              style={{ width: "100px", height: "100px" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          burgers.map((menu) => (
            <div className="col-md-4 my-3">
              <MenuList menu={menu} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
