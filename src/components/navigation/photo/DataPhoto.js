import React from "react";
import DataPhoto from "./Photo";
import "./DataPhoto.css";

const Photo = () => {
    const url = [
        "https://varianty.lviv.ua/thumbnails/320x180/1b532115b2d7d52cac401f4c8b960102.jpg",
        "https://i.imgur.com/o9IJ7e6.jpeg",
        "https://scontent.fiev22-1.fna.fbcdn.net/v/t31.18172-8/10362822_1502883493279214_8164876466224249799_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=QZ3Ot5r4AwMAX_QpScW&_nc_ht=scontent.fiev22-1.fna&oh=ea6ee9936a5787abc066fb8442d801af&oe=61D40E3F",
        "https://www.etoretro.ru/data/media/29/15124730068d8.jpg"
    ]

    return (
            <DataPhoto url={url}/>
    )
}
export default Photo;