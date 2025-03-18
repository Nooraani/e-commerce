import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Api from './Api.json'
import Header from "./Header";

import { FaCamera, FaFemale } from "react-icons/fa"
import Check from "./Check";
const App2 = () => {
  const [GetAPi,setApi]=useState([])
  const [Gender, setGender] = useState("");
  const [image, setImage] = useState(null);
  const [preferences, setPreferences] = useState("");
  // const [preferences1,setPreferences1]=useState("");
  const [recommendations, setRecommendations] = useState([]);
  const Place_Order = useNavigate()


  // upload photo
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };  
  
console.log(recommendations)
console.log(Gender)
  // for preference 
  const HandleInputRadio1 = (e) => {
    setPreferences(e.target.value)
  }
  // for gender
  const HandleInputRadio=(e)=>{
    setGender(e.target.value)
  }
const getRecommendations=(e)=>{
  e.preventDefault()
}
 useEffect(()=>{
  if( Gender === "male" && preferences === "Formal"){
    setRecommendations(Api)
  }
  else{
    console.log("not match")
  }
 },[preferences === "Formal" && Gender === "male" ])




  return (
    <>
      <Header />

      <div className="min-h-screen p-6 bg-gray-100 text-gray-900">
        <h1 className="text-3xl font-bold text-center font-serif hover:animate-pulse"> Virtual Stylist</h1>
        <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
          <input type="file" onChange={handleImageUpload} className="w-full p-2 mb-2 border" />

          {image && <img src={image} alt="upload image" className="w-full h-40 object-cover mb-2" />}
          <div className="gap-3 font-extrabold  ml-32">
          <div className="flex gap-3">
            {/* <label>
              <input type="radio"
                name="gender"
                value="Female"
                checked={Gender === "Female"}
                onChange={HandleInputRadio}
              />
              Female
            </label> */}
            <label>
              <input type="radio"
                name="gender"
                value="male"
                checked={Gender === "male"}
                onChange={HandleInputRadio}
              />
              Male
            </label>
            </div>
            <div className="flex gap-3">
            <label>
              <input
                type="radio"
                name="preferences"
                value="Formal"
                checked={preferences === "Formal"}
                onChange={HandleInputRadio1}
              />
              formal
            </label>
            {/* <label>
            <input
             className="click:animate-ping"
              type="radio"
              name="preferences"
              value="Casual"
              checked={preferences === "Casual"}
              onClick={HandleInputRadio1}
            />
            casual
            </label> */}
          </div>
          </div>
          <button
            onClick={getRecommendations}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Get Recommendations
          </button>
        </div>



        <div className="flex flex-wrap justify-evenly max-w-screen-2xl mt-6">

          {
            recommendations.map((item, index) => (
              <div key={index} className="flex max-w-md  p-4 mb-2 bg-white shadow-md rounded-lg">
                <img src={item.image} alt={item.title} className="h-64 w-40 object-cover rounded mt-2 hover:animate-bounce" />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semmibold">{item.title}</h2>
                  <h1 className="font-bold">$ {item.price}</h1>
                
                </div>
                <Check items={item}/>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default App2;
