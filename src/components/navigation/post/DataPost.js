import React from "react";
import Post from "./Post";
import "./DataPost.css"

const DataPost = () => {
    const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    const LEIA_IMAGE = "https://www.vokrug.tv/pic/news/5/d/1/a/rsz300x300_5d1a2686601497edc7110cdec68d62e9.jpg";
    const DART_IMAGE = "https://www.peoples.ru/character/movie/darth_vader/darth_1.jpeg";
    return (
        <div className="wrapper">
        <Post
            author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
        }}
              content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
              image={RAY_IMAGE}
              date={"26 февр."}

        />
            <br/>
            <Post
                author={{
                    name: "Princess Leia",
                    photo: LEIA_IMAGE,
                    nickname: "@Leia"
                }}
                content="The dark side is waiting for everyone"
                image={DART_IMAGE}
                date={"26 февр."}

            />
        </div>
    )
}

export default DataPost;