import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BuyForm = ({items,size,Material}) => {
  console.log("this is an item",items)
  const Invoice_Detail=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData,items,size,Material, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Details:", formData);
    Invoice_Detail('/PaymentForm',{state:formData})
    alert("Order placed successfully!");
    
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Personal Info</h3>
        <input type="text" name="name" placeholder="Full Name" className="" required onChange={handleChange} />
        
        <input type="email" name="email" placeholder="Email" className="ml-2" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" className="ml-2" required onChange={handleChange} />

        <h3>Quantity</h3>
        <input type="number" name="qauntity" placeholder="enter qauntity" required onChange={handleChange} />


        <h3>Shipping Address</h3>
        <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
        <input type="text" name="city" placeholder="City" required onChange={handleChange} />
        <input type="text" name="state" placeholder="State" required onChange={handleChange} />
        <input type="text" name="zip" placeholder="ZIP Code" required onChange={handleChange} />
        
        
      

         <button 
        className="bg-blue-500 px-4 py-2 mt-4 mr-3   rounded-lg"
        onClick={handleSubmit}
      >
       Confirm purchase 
      </button>
      </form>
    </div>
  );
};
export default BuyForm;