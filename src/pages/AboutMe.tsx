import React from "react";
import imageHeader from "../../public/Desain tanpa judul (2).png"
export default function AboutMe() {
    return(
        <div>
           
            <div className="relative">
                <img src="/Desain tanpa judul (2).png" alt="About Me" className="w-full h-150 object-cover mt-4 object-center rounded-xl"/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                     <h1 className="text-2xl font-bold">About Me</h1>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-lg mt-4">Who Am I?</h2>
                <p className="text-gray-500 text-left mt-1 ">
                    Hello! My name is Muhammad Fajri Afriyansyah, a passionate FullStack Developer with expertise in ASP.NET.CORE, ReactJS, TypeScript, and .NET development. I am dedicated to creating efficient and innovative software solutions that meet the needs of users and businesses alike.
                </p>
            </div>
        </div>
    );
}