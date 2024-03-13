import React from "react";
import Image1 from "./images/gambar_sabah.jpg"

function Home () {
    return (
        <>
            <section className="bg-dark text-light p-5 text-sm-start">
                <div className="container px-0">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="container">
                            <h2>Hi, Everyone! </h2>
                            <h1>I am <span className="text-warning"> Nasrul Arsyad</span> </h1>
                            <p className="lead my-4 ">An Entry Level Web Developer passionate about web development. Welcome to my online space where creativity meets functionality. Explore my journey through code and design together.</p>
                            <a href="#Contact"><button className="btn btn-warning btn-lg" type="submit">Contact Me</button></a>
                        </div>
                        <img className="img-fluid rounded-circle d-none d-sm-block" src={Image1} alt="Nasrul Arsyad profile picture"/>
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

