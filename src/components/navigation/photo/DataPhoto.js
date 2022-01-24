import React from "react";
import DataPhoto from "./Photo";
import "./DataPhoto.css";

const Photo = () => {
    const url = [
        "https://root-nation.com/wp-content/uploads/2020/12/1581997813_black-hole_vsthemes_ru-37.jpg",
        "https://thumbor.forbes.com/thumbor/711x532/https://blogs-images.forbes.com/startswithabang/files/2017/05/sagittarius-a-black-hole-milky-way-center-1200x900.jpg?width=960",
        "https://interes-fakti.com/wp-content/uploads/2019/09/fakti-o-chernyh-dyrah.jpg",
        "https://cs8.pikabu.ru/post_img/big/2019/01/22/5/1548139738192673201.jpg"
    ]

    return (
            <DataPhoto url={url}/>
    )
}
export default Photo;