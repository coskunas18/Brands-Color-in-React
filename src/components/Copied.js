import { useState } from "react";



function Copied({color}){
    return (
       <div className="copied">
          Copied #{color} to clipboard
       </div>
    );
}

export default Copied