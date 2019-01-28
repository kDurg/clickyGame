import React from "react";
// import API from "../utils/API";

import Images from "../../assets/images";

class Populate extends React.Component {
    state = {
        returnedAnimalImages:[], // returns all cat images from API
        selectedAnimalArray: [], //all the selected cats from user input
        selectedAnimal: "", //cat that is clicked to be stored to selectedCats array
    }

    getAnimalPhotos () {
        // for(i = 0; i<Images.length; i++)
            console.log(Images.length);
    }

    componentDidMount() {
        getAnimalPhotos();
    }

    render() {
        return (
            <img className="card-img-top card" src=".../100px180/" alt="Card image cap" style="width: 18rem;"/>
        )
    }

}

export default Populate;
