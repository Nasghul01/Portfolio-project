import React from "react";

export default function Footer () {
    return (
    <footer className="bg-dark text-white p-5 text-center position-relative">
        <div className="container">
            <p className="lead">&copy; 2024 Nasrul Arsyad. All rights reserved.</p>
            <a href="#" className="position-absolute bottom-0 end-0 p-5">
                <i className="bi bi-arrow-up-circle h1"></i>
            </a>
        </div>
    </footer>
    )
}