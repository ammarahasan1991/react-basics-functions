import React from "react";
import TeamMember from "./TeamMember";

function Team() {

    const info = [
        { id: 1, img: "https://picsum.photos/200", name: "Ammar Hasan", position: "Programmer", phone: "0994333222", email: "ammarahasan1991@gmail.com", website: "ammarahasan.com", },
        { id: 2, img: "https://picsum.photos/201", name: "Ahmad Mahmoud", position: "Designer", phone: "0999666777", email: "Ahmad.m@gmail.com", },
        { id: 3, img: "https://picsum.photos/202", name: "Nezar Hasan", position: "Teacher", phone: "0994666890", email: "nezar.hasan@gmail.com", website: "nezarmath.com", },
        { id: 4, img: "https://picsum.photos/203", name: "Manar Hasan", position: "Designer", phone: "0997907654", email: "manar1234@gmail.com", website: "manarking.com", },
        { id: 5, img: "https://picsum.photos/204", name: "Hamza Hasan", position: "HR", phone: "0997907654", email: "manar1234@gmail.com", website: "manarking.com", },
        { id: 6, img: "https://picsum.photos/205", name: "Ali Hasan", position: "Designer", phone: "0997907654", email: "manar1234@gmail.com", website: "manarking.com", },
        { id: 7, img: "https://picsum.photos/206", name: "Rami Hasan", position: "Programmer", phone: "0997907654", email: "manar1234@gmail.com", website: "manarking.com", },
    ];

    const members = info.map(member =>
        <TeamMember
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            website={member.website}
        />
    );

    return (
        <div className="row">
            {members}
        </div>
    );
}

export default Team;