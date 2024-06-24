import { Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Overt from "../pages/T-Shirts/Overt";
import ClassicTshirt from "../pages/T-Shirts/ClassicTshirt";
import PrintedTshirt from "../pages/T-Shirts/PrintedTshirt";
import Joggers from "../pages/T-Shirts/Joggers";
import Jeans from "../pages/T-Shirts/Jeans";
import WoverTshirt from "../pages/T-Shirts/WoverTshirt";
import WclassicTshirt from "../pages/T-Shirts/WclassicTshirt";
import WcasualJeans from "../pages/T-Shirts/WcasualJeans";
import Wjogger from "../pages/T-Shirts/Wjogger";
import Wcargos from "../pages/T-Shirts/Wcargos";
import ProductPage from "../pages/ProductPage";

export default function AllRoutes(){
  return (
<Routes>
    <Route path="/" element={<Home />}/> 
    <Route path="/product/:id" element={<ProductPage />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/overt" element={<Overt />}/> 
    <Route path="/classictshirt" element={<ClassicTshirt/>}/>
    <Route path="/printedtshirt" element={<PrintedTshirt/>}/>
    <Route path="/joggers" element={<Joggers/>}/>
    <Route path="/jeans" element={<Jeans/>}/>
    <Route path="/wovertshirt" element={<WoverTshirt/>}/>
    <Route path="/wclassictshirt" element={<WclassicTshirt/>}/>
    <Route path="/wcasualjeans" element={<WcasualJeans/>}/>
    <Route path="/wjogger" element={<Wjogger/>}/>
    <Route path="/wcargos" element={<Wcargos/>}/>
</Routes>
    )
}