import { NavLink } from "react-router-dom";
import blueButton from "../images/blue-button.png"
import rygButtons from "../images/ryg-buttons.png"

const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "12px",
    margin: "0 0 0 20px",
    background: "black",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img id="blue-button" src={blueButton} alt="blue button" />
            </NavLink>
            <img id="colored-buttons" src={rygButtons} alt="ryg buttons" />
            <div id="links">
                <NavLink
                    to="/library"
                    exact
                    style={linkStyles}
                    activeStyle={{background: "darkblue",}}
                >
                    Pokemon Library
                </NavLink>
                <NavLink
                    to="/pokedex"
                    exact
                    style={linkStyles}
                    activeStyle={{background: "darkblue",}}
                >
                    My Pokedex
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;