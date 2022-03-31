import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "react-toastify/dist/ReactToastify.css";
import "./add-form.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import SuccessModal from "./success-modal";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const [description,setDescription] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

const handleDescription = (e)=>{
    setDescription(e.target.value)
}
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
    console.log(category);
  };

  const handleSubmit = () => {
    if (title === ""|| !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    const data = {
      title,
      description,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(!modalOpen);
  };

  return (
    <div className="add-form">
      <SuccessModal modalOpen={modalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className = "form-group">
        <label className="mt-3 mb-2">Task Name</label>
        <input type="text" className = "form-control" placeholder='Enter Task Name' value = {title} onChange = {(e)=>handleTitle(e)}/>
    </div>
      <div className = "form-group">
        <label className = "mt-1 mb-2"> Task Description</label>
        <textarea rows = "5" className = "form-control" placeholder='Enter Task Description' value={description} onChange = {(e)=>handleDescription(e)}></textarea>
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Select Employee"}</label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}>
                  <label>{category.title}</label>
                  <label>{category.id}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
        </div>
      </div>
    </div>
  );
};

export default AddForm;