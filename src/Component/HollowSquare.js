import React, { useState, useEffect } from "react";


function HollowSquare(){
    const[pattern,setPattern] = useState("");
    useEffect(()=>{
        let space = 5;
        let string = " ";
        for(let i = 0; i < space; i++)
        {
            for(let j = 0; j < space; j++)
            {
                if(i===0 || i===space-1 || j===0 || j===space-1)
                {
                    string +="*";
                }
                else
                {
                    string +=" ";
                }
            }
            string +="\n ";
        }
        setPattern(string);
    },[])
    return(
        <div>
        <pre>{pattern}</pre>
        </div>
    );
}

export default HollowSquare