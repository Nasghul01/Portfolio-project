import React from "react";
import Video1 from "./Video_FoundIt.mp4";
import pic4 from "./images/ulasan.png";
import pic5 from "./images/borang_tempahan.png";

export default function Project (props){
    return (
        <div className="container-FoundIt px-0 row align-items-center justify-content-between mb-5">
               <div className="container col-md pe-5">
                <h1 className="mb-5">{props.title}</h1>
                <h4 className="mb-2">{props.role}</h4>
                <p className="text-dark lead">{props.description}</p>
                </div>
            <div className="cointaner col-md">
                            {props.id === 1 ? <>
                                <div className="phone-frame">
                                <div className="screen">
                                    <video autoPlay controls className="Vid-FoundIt">
                                    <source src={Video1} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            </> : <>
                            <div className="container px-0 row mt-5 align-items-center justify-content-between">
                        <div className="container pe-5 col-md">
                            <h1 className="mb-5">Chicken Royale website</h1>
                            <h4  className="mb-2">Full stack developer | UI Designer</h4>
                            <p className="text-dark lead">A restaurant website application for user to do reservation of the table in the restaurant. Also have feedback about
                                the food or the restaurant and customer service by star and comment. </p>
                            <a href="http://localhost/GitHub/ICT600/Login-Register/login.php"><button className="btn btn-lg bg-warning mb-5">Click here for demo!</button></a>
                        </div>



                        <div className="container col-md">
                            {/* <div className="container row mb-3">
                                <img src={pic3} className="d-block w-100" alt="borang tempahan"/>
                            </div> */}
                            <div className="container row mb-3">
                            <img src={pic4} className="d-block w-100" alt="ulasan"/>
                            </div>
                            <div className="container row mb-3">
                                
                            <img src={pic5} className="d-block w-100" alt="borang tempahan"/>
                            </div>

                        </div>
                        
                    </div>
                            </>}
            </div>
        </div>         
                        
        
    )
}