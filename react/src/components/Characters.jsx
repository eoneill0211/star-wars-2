import React, { useState, useEffect } from "react";

// function Characters() {
//     const [characterData, setCharacterData] = useState(null)
//     useEffect(() => {
//         fetch("http://localhost:3000/api/characters/:id")
//         .then(response => response.json())
//         .then(data=>setCharacterData(data.name))
//     },[])
//     return (
//         <div className="Characters">
//         {characterData} 
//         </div>
//     )
// };
function Characters() {
    const [characterData, setCharacterData] = useState([]);
    useEffect(() => {
      const fetchCharacterData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_SWAPI_URL+"/characters");
          if (!response.ok) {
            throw new Error('Data could not be fetched!');
          }
          const json_response = await response.json();
          setCharacterData(json_response);
          console.log(characterData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchCharacterData();
    }, []) };

// const Characters = (props) => {
//     return (<div className="chars">props.toArray</div>);
// };
// export default Characters

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
    