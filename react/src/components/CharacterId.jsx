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

const CharacterId = (props) => {

    const [characterData, setCharacterData] = useState([]);
    useEffect(() => {
      const fetchCharacterData = async () => {
        try {
          const lastItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
          const response = await fetch(import.meta.env.VITE_SWAPI_URL+ '/'+ lastItem);
          console.log(import.meta.env.VITE_SWAPI_URL+ '/' +lastItem);
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
    }, [characterData]);



    console.log("We are here");

    if (characterData[0]) {
        return (
            <div className="col">
              <h1>Characters</h1>
              {<div>{"Name: " + characterData[0].name}</div>}
              {<div>{"Gender: " + characterData[0].gender}</div>}
              {<div>{"Skin Color: " + characterData[0].skin_color}</div>}
              {<div>{"Hair Color: " + characterData[0].hair_color}</div>}
              {<div>{"Height: " + characterData[0].height}</div>}
              {<div>{"Eye Color: " + characterData[0].eye_color}</div>}
              {<div>{"Mass: " + characterData[0].mass}</div>}
              {<div>{"Homeworld: " + characterData[0].homeworld}</div>}
              {<div>{"Birth Year: " + characterData[0].birth_year}</div>}



              {/* {characterData.map(char => <div > <a href={'/characters/' + char.id}>{char.name} {char.age} </a></div>)} */}
            </div>
          );
    }

    const render = () => {
        if(props.length > 0) {
            const linkMarkup = props.search.map((link) => (
                Array.from(props)
            ));
            
            return <ul className="link-list">{linkMarkup}</ul>;
        } else {
            return <p>No data found for: {props.sentence}</p>
        }
    }

    //return render()
};
export default CharacterId

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
