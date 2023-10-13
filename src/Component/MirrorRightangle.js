import { useEffect, useState } from "react";

function MirrorRightangle(){
    const[pattern,setPattern] = useState("");
   
    useEffect(()=>{
        let string = "";
        for( let i=5; i >= 1;i--)
        {
            for( let j=1 ;j <= i; j++)
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
export default MirrorRightangle