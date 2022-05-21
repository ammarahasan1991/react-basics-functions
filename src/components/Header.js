import React from "react";

function Header() {
    const client = "Designer";

    const title = {
        designer: "Designer ",
        programmer: "Programmer "
    };

    const info = {
        name: "Ammar",
        nick: "Hasan"
    }

    return (
        <div className="navbar bg-dark rounded text-white">
            hello {`${info.name} ${info.nick}`}
            <h2>
                {client === "Designer" ? title.designer : title.programmer}
                is my life
            </h2>
        </div>
    );
}

export default Header;