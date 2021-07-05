import React from 'react';
import "../styles/LandingPage.css"
import { Link } from 'react-router-dom';
function LandingPage() {
    return(
        <>
        <h1 className="landingPageTitle"> Welcome To Space-22 Music </h1>

        <div className="landingPageSelection">

            <Link to="/albums">      
            <button className="landingPageButtons">
                Discover Albums
            </button>
            </Link>

            <Link to="/learn-more">
            <button className="landingPageButtons">
                Learn About The Artist 
            </button>
            </Link>
            
        </div>
        </>
    )
}

export default LandingPage