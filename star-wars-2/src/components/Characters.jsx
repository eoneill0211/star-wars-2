import React, { useState, useEffect } from "react";

function Characters() {
    const [characterData, setCharacterData] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3000/api/characters:id")
        .then(response => response.json())
        .then(data=>setCharacterData(data.name))
    },[])
    return (
        <div className="Characters">
        {characterData} 
        </div>
    )
};
export default Characters

// const characters = () => {
//     const [characterData, setsetCharacterData] = useState({
//         characterData: {
//             name: "", // Default set as 'Small'
//             gender: "",
//             skin_color: "",
//             hair_color: "",
//             height: "", // Default set as 'New'
//             eye_color: "", // Default set as 'Left'
//             mass: "",
//             homeworld: "",
//             birth_year: ""
//         }
//     }),
    