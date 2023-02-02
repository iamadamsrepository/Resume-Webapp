import React from "react";

import { Link } from "react-router-dom";

function Navigation() {
    const className = "text-white p-2 hover:border rounded-[6px]"

    return (
        <div className="p-6">
            <div>
                <ul>
                    <li className={className}>
                        <Link to="/">Profile</Link>
                    </li>
                    <li className={className}>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li className={className}>
                        <Link to="/education">Education</Link>
                    </li>
                    <li className={className}>
                        <Link to="/languages">Languages</Link>
                    </li>
                    <li className={className}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={className}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation