import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BuyForm from './BuyForm'
const ClothingSelector = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  
  const sizes = ["S", "M", "L", "XL"];
  const Material=["Cotton","Polyester","Silk"]
  console.log(selectedMaterial)
 console.log(selectedSize)

  const handleSubmit = () => {
    if(selectedSize !==""){
        alert("Your preferences have been saved!");
    }
    else{
        toast.error("please select product size")
    }
    

  };



  return (
    <div className="flex  rounded-lg ">
      <h2 className="text-xl font-semibold">{item.name}</h2>

     
  <div>
      {/* Size Selection */}
      <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Select Size:</h2>
      <div className="flex space-x-3">
        {sizes.map((size) => (
          <button
            key={size}
            className={`px-4 py-2 border rounded-lg transition-all ${
              selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      {selectedSize && (
        <p className="mt-3 text-green-600 font-medium">Selected Size: {selectedSize}</p>
      )}
    </div>

    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Select Material:</h2>
      <div className="flex space-x-3">
        {Material.map((Material) => (
          <button
            key={Material}
            className={`px-4 py-2 border rounded-lg transition-all ${
              selectedMaterial === Material ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedMaterial(Material)}
          >
            {Material}
          </button>
        ))}
      </div>
      {selectedMaterial && (
        <p className="mt-3 text-green-600 font-medium">Selected Material: {selectedMaterial}</p>
      )}
    </div>

    
     

      
      <div className="flex justify-between ">
      <button 
        className="bg-blue-500 text-white px-4 py-2 mt-4  rounded-lg"
        onClick={handleSubmit}
      >
        Add to Cart
      </button>
      
      </div>
      </div>
      <div className="mt-6 ml-6">
      <BuyForm items={item} size={selectedSize} Material={selectedMaterial} />
      </div>
    </div>
   
  );
};

export default ClothingSelector;
