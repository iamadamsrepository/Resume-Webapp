import React from "react";

function Header() {
    return (
        <header className="flex border-b-2 p-6 justify-between items-center">
            <div className="font-bold text-white">
                <div className="text-4xl">Adam Florence<br></br></div>
                <div className="text-2xl">Software Engineer</div>
            </div>

            <div className="flex flex-col justify-between items-center">
                <div className="hover:border rounded-[6px] p-1">
                    <a className="text-white text-xs" href="/Adam_Florence_Resume.pdf" download>Download PDF</a>
                </div>
                <div className="hover:border rounded-[6px] p-1">
                    <a className="text-white text-xs" href="/Adam_Florence_Resume.pdf" target="_blank">View PDF</a>
                </div>
            </div>

        </header>
    )
}

export default Header