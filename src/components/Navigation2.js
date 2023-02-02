import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation2() {
    const[showMenu, setShowMenu] = useState(false)

    let menu 
    
    if(showMenu) {
        menu = <div> This is the menu </div>
    }

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick= {() => setShowMenu(!showMenu)}
                />
            </span>

            { menu }
        </nav>
    )
}

export default Navigation2