import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import Downlaod from "./Download";

function Content(){

  const {brands,selectedBrands} = useContext(MainContext)
    return(
   <main className="content">
    <header className="header">
     <Search/>
     {selectedBrands.length !== 0 && <Downlaod/>}
    </header>
    <section className="brands">

     {brands.map(brand =>(
       <Brand brand ={brand} />
     ))}
    </section>
   </main>
    );
}


export default Content