import React from "react";

function MenuList({ menu }) {
  return (
    <div>
      <div className="card m-auto my-3" style={{ width: "18rem" }}>
        <img src={menu.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{menu.ad}</h5>
          <p className="card-text">{menu.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
