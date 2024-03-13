import React from "react";
import Img2 from "./images/my_image.jpg";

export default function About () {
    return (
        <section className="bg-light text-dark p-5 text-sm-start" id="About">
            <div className="container px-0">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <img className="img-fluid d-none d-sm-block rounded-circle" src={Img2} alt="Nasrul Arsyad Baju Melayu pic"/>

                <div className="container  ">
                    <h2>About Me</h2>
                    <p className="lead my-4">My name is Nasrul Arsyad bin Hamidi and born in Johor Bahru, Johor. I am fresh graduate from Universiti 
                        Teknologi MARA, Shah Alam studied in Bachelor's Degree in Information Technology (Hons.). I specialize in a range of programming languages and frameworks. 
                    </p> 
                    
                    <p className="lead font-weight-bold">Programming Skills:</p>
                    <ul className="list-group">
                        <li className="list-group-item">Programming Languages: Java, HTML, CSS, JavaScript, PHP, Python, SQL, VB.Net</li>
                        <li className="list-group-item">Frameworks: Android Studio, .NET Framework</li>
                        <li className="list-group-item">Database Technologies: MySQL</li>
                    </ul>
                    
                    <p className="lead my-4">Feel free to browse my portfolio, and don't hesitate to reach out for collaboration or exciting opportunities.</p>
                </div>
                
                </div> 
            </div>
        </section>
    )
}