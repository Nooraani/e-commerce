import {BrowserRouter, Route , Routes} from "react-router-dom";
import Login from "./Project/Login";
import Main from "./Project/Main";

function App() {
  return (
    <>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Main" element={<Main/>}/>
   </Routes>
  </BrowserRouter>
     
    </>

  );
}

export default App;
