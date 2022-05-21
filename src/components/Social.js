import React from "react";
import SocialItem from "./SocialItem";

function Social() {

    const mediaList = [
        { media: "Facebook", id: "facebook", img: "https://picsum.photos/61", },
        { media: "Youtube", id: "youtube", img: "https://picsum.photos/62", },
        { media: "Instagram", id: "instagram", img: "https://picsum.photos/63", },
        { media: "LinkedIn", id: "linkedin", img: "https://picsum.photos/60", }
    ];

    const mediaAll = mediaList.map(mediaItem =>
        <SocialItem
            key={mediaItem.id}
            media={mediaItem.media}
            img={mediaItem.img}
        />
    );

    return (
        <ul className="list-group">
            {mediaAll}
        </ul>
    );
}

export default Social;