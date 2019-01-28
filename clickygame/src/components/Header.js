import React from "react";

const Header = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">The Clickiest Of Games</h1>
                    <p className="lead">Click on an image below to being. Increase your score by clicking new images each time. If you click the same image twice, YOU LOSE!</p>
                    <hr></hr>
                    <p className="lead"><b>Your Score: <span id = "scoreSpan">0  |  </span>Top Score: <span id = "topScoreSpan">0</span></b></p>
                </div>
            </div>

            <div className = "imageContainer">
            
            </div>
        </>
    )
}

export default Header;