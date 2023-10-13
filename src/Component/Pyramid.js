import React, { useState, useEffect } from "react";

function Pyramid() {
 
  const [pattern, setPattern] = useState("");
  useEffect(() => {
    let string = "";
    let rows = 4;
    for (let i = 1; i <= rows; i++) 
    {
      for (let j = 1; j <= rows-i; j++)
       { 
        string += " ";
      }
      for(let k = 1; k <= (2*i)-1; k++)
      {

        string += "*";
      }
     
      string += "\n";
    }
    setPattern(string);
  }, []); 

  return (
    <div>
      <pre>{pattern}</pre>
    </div>
  );
}

export default Pyramid;