import React from "react";
import "./card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess()
    dispatch(deleteExpense(item));
  };

  return (
    <div
      className="card shadow mb-3 bg-white rounded"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div>
        <h5 className="mb-4 text-center">Assigned to {item.category.title} {item.category.id}</h5>
      </div>
      <div className="card-content-header">
        <h6>Task Name</h6>
        <h6>Description</h6>
        <h6>Delete Task</h6>
      </div>
      <div className="card-content">
          <div>
            <p>{item.title}</p>
            <p style = {{fontSize:"10px"}}>{time}</p>
          </div>
          <div className="card-description">
            <p >{item.description}</p>
          </div>
          <div className="delete-icon" onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
          </div>
      </div>
    </div>
  );
};

export default Card;