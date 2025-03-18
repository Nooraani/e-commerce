import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BuyForm from './BuyForm'
const PaymentForm = ({item}) => {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const Successful_Payment=useNavigate()
  const Location=useLocation()
  const Items=Location.state || {} 
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    paypalEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData,Items, [e.target.name]: e.target.value });
    console.log("this is payment array",formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data:", { paymentMethod, ...formData });
    console.log("payment array",formData)
    alert("Payment Successful!");
    Successful_Payment('/Main',{state:formData})
  };
const HandlePayment=()=>{
  

}
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
   
      {/* Payment Method Selection */}
      <div className="mb-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="credit_card"
            checked={paymentMethod === "credit_card"}
            onChange={() => setPaymentMethod("credit_card")}
            className="accent-blue-500"
          />
          Credit/Debit Card
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
            className="accent-green-500"
          />
          UPI
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="accent-yellow-500"
          />
          PayPal
        </label>
      </div>

      {/* Payment Details Based on Selection */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {paymentMethod === "credit_card" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                required
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                required
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </>
        )}

        {paymentMethod === "upi" && (
          <input
            type="text"
            name="upiId"
            placeholder="Enter UPI ID (e.g., example@upi)"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {paymentMethod === "paypal" && (
          <input
            type="email"
            name="paypalEmail"
            placeholder="Enter PayPal Email"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}

        {/* Submit Button */}
        <button type="submit" onClick={HandlePayment} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Pay Now
        </button>
      </form>
     
    </div>
  );
};

export default PaymentForm;
