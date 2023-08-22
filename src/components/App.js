import React, { useState, useEffect } from "react";

function App() {
    const API_URL = "https://dog.ceo/api/breeds/image/random";
    const [img, setImg] = useState();

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setImg(data.message);
            });
    }, []);

    if (!img) {
        return <h2>Loading...</h2>
    }

    return (
        <img src={img} alt="A Random Dog" />

    )

}

export default App;
