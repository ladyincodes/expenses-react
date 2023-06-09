import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className='expense-item'>
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </div>
    </div>
  );
}