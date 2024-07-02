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

const Characters = (props) => {

    const [characterData, setCharacterData] = useState([]);
    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_SWAPI_URL);
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
    if (characterData.length > 1) {
        return (
            <div className="col">
                <h1>Characters</h1>
                {characterData.map(char => <div > <a href={'/characters/' + char.id}>{char.name} </a></div>)}
            </div>
        );
    }

    const render = () => {
        if (props.length > 0) {
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
