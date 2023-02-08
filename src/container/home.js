import React from "react";
import "./home.css"


const Home = () =>{
    const data = [
        {
            key:1,
            img: Zur1,
            title: Title1
        },
        {
            key:1,
            img: Zur1,
            title: Title1
        },
        {
            key:1,
            img: Zur1,
            title: Title1

        }
    ]
    return (
        <div className="Title">
            <div className="titletext">
                <h2>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</h2>
            </div>
        </div>
    )
}

export default Home