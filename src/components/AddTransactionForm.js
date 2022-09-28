import React,{useState} from "react";


function AddTransactionForm() {
  const[date,setDate]=useState('')
  const[description,setDescription]=useState('')
  const[category,setCategory]=useState('')
  const[amount,setAmount]=useState('')
  

  const postData =()=>{
    console.log(date);
    console.log(description);
    console.log(category);
    console.log(amount);


  }


  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button onClick={postData} className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
