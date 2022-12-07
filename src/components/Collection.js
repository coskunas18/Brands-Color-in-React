import { useContext, useEffect } from "react";
import { useParams,Link, useHistory } from "react-router-dom";
import MainContext from "../MainContext";
import Downlaod from "./Download";
import Brand from "./Brand";
import {GrLinkPrevious} from "react-icons/gr";

function Collection(){

    const {setSelectedBrands,selectedBrands,brands} =useContext(MainContext);
    const {slugs} = useParams();
    const history = useHistory()


    const clearSelectedBrands = () => {
        setSelectedBrands([]);
        history.push('/')
        window.location.reload()
        
    }



    useEffect( () =>{
    setSelectedBrands(slugs.split(','))

    },[])


    return(
     <main className="content">
    <header className="header">

    <Link to= "/" onClick={clearSelectedBrands}>
      <a className="back-btn">
        <GrLinkPrevious/> All-Brands
      </a>
    </Link>
    
     {selectedBrands.length !== 0 && <Downlaod/>}
    </header>
    <section className="brands">
     {selectedBrands.map(slug =>{
        let brand = brands.find(brand => brand.slug === slug)
        return(
          <Brand brand={brand} />
        );
     })}
    </section>
   </main>
    );
}

export default Collection