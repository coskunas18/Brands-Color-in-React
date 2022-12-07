
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import BrandData from "./brands.json";
import { useEffect, useState } from 'react';
import Copied from './components/Copied';
import { clear } from '@testing-library/user-event/dist/clear';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Collection from './components/Collection';

function App() {

  const brandsArray = [];
  Object.keys(BrandData).map(key =>{
      brandsArray.push(BrandData[key])
  })
  const [brands,setBrands] = useState(brandsArray);
  const [selectedBrands,setSelectedBrands] = useState([])
  const [copied,setCopied] = useState(false)
  const [search,setSearch] = useState('')

  useEffect( () => {
    if (copied){
     const timeOut = setTimeout(()=>{
        setCopied(false)
      },1000)
      return () =>{
        clearTimeout(timeOut)
      }
    }
  },[copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  },[search])


  const data = {
  brands,
  selectedBrands,
  setSelectedBrands,
  setCopied,
  search,
  setSearch,
  }


  return (
<>
<MainContext.Provider value={data}>
{copied && <Copied color = {copied}/> }
   <Sidebar/>
    <Router>
      <Switch>
      <Route path="/collection/:slugs">
           <Collection/>
      </Route>
         <Route path="/">
            <Content/>
         </Route>
      </Switch>
    </Router>

   </MainContext.Provider>
</>
  );
}

export default App;
