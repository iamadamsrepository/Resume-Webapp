import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faBars, faUser, faPersonDigging, faGraduationCap, faCode, faDiagramProject, faAddressCard } from "@fortawesome/free-solid-svg-icons";

function Navigation() {

    const [menuState, setMenuState] = React.useState(false)

    const className = "text-white p-2 hover:border rounded-[6px] flex flex-col items-center leading-loose cursor-pointer"

    // window.addEventListener()
    console.log(window.innerWidth)

    function makeListItem(icon, text, link) {
        switch (menuState) {
            case true:
                return <li>
                    <Link to={link} className={className}>
                        <FontAwesomeIcon icon={icon} className="text-xl" />
                        <div>{text}</div>
                    </Link>
                </li>
            case false:
                return <li>
                    <Link to={link} className={className}>
                        <FontAwesomeIcon icon={icon} className="text-xl" />
                    </Link>
                </li>
            default: break
        }
    }

    return (
        <div className="p-6">
            <ul>
                <li className={className} onClick={() => {
                    switch (menuState) {
                        case true:
                            setMenuState(false)
                            break
                        case false:
                            setMenuState(true)
                            break
                        default: break
                    }
                }} >
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </li>
                {makeListItem(faUser, "Profile", "/")}
                {makeListItem(faPersonDigging, "Experience", "/experience")}
                {makeListItem(faGraduationCap, "Education", "/education")}
                {makeListItem(faCode, "Languages", "/languages")}
                {makeListItem(faDiagramProject, "Projects", "/projects")}
                {makeListItem(faAddressCard, "Contact", "/contact")}
            </ul>
        </div>
    )
}

export default Navigation