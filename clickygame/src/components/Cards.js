import React from "react";
import imageArray from "../assets/images/imageArray"

class Populate extends React.Component {
    state = {
        returnedAnimalImages:[], // returns all cat images from API
        selectedAnimalArray: [], //all the selected cats from user input
        selectedAnimal: "", //cat that is clicked to be stored to selectedCats array
    }

    getAnimalPhotos () {
        for(var i = 0; i<imageArray.length; i++)
            console.log(imageArray.length);
            return this.name;
    }

    componentDidMount(name) {
        console.log(name)
        this.getAnimalPhotos();
        currentScore = 0;
    }

    handlePhotoClick() {
        // needs to check selectedAnimal to selectedAnimalArray
            // if the selectedAnimal.name is in selectedAnimalArray,
                // end current game score, compare to top score and update if new high score
                // reset current score to zero
                // run imageRandomize function
            // if selectedAnimal.name is NOT in selectedAnimalArray
                // add name to selectedAnimalArray
                // add 1 to score
                // run imageRandomize function
    }

    imageRandomize () {
        // loop through images and use a Math(function) to randomize placement in containing image boxes
            // have to use a render? Need to change state?
    }

    compareChoice() {
        if (selectedAnimal = selectedAnimalArray) {
            console.log("Selection already part of array, you lose!");
            compareScore();
            imageRandomize()
        }
    }

    compareScore() {
        // take currentScore (const?) vs topScore (const?). 
        if (currentScore >= topScore) {
            topScore = currentScore
        } else {
            currentScore = 0;
        }
    }

    render() {
        return (
            <img className={this.name} src=".../100px180/" alt="Card image cap" style="width: 18rem;"/>
        )
    }

}

export default Populate;
