import React from "react";


const Expenseitem = (props) => {

  return (
    <div
      className="container d-flex my-3 "
      style={{
        textAlign: "center",
        "borderRadius": "10px",
        border: "2px solid black",
        backgroundColor: "grey",
      }}
    >
        <div>
            
        </div>
      <div className="p-2 flex-fill"><h2>{props.title}</h2></div>
      <div className="p-2 flex-fill" style={{ color: "white" }}>
        {props.amount}
      </div>
      <div
        className="p-2 flex-fill"
        style={{
          "border-radius": "30px",
          backgroundColor: "blue",
          border: "2px solid white",
          color: "white",
        }}
      >
        {props.date}
      </div>
    </div>
  );
};

export default Expenseitem;
