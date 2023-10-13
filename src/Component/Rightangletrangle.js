import { useEffect, useState } from "react";

function Rightangletriangle()
{
    const[pattern , setPattern] = useState("");
    useEffect(()=>{
        let string ="";
        for(let i= 1;i<=5;i++)
        {
            for(let j =1; j<=i;j++)
            {
                string += "*";
            }
            string += "\n";
        } 
        setPattern(string);
    },[])
    return (
        <div>
          <pre>{pattern}</pre>
        </div>
      );
}
export default Rightangletriangle