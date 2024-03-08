import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId }= useParams();
    return <>
    <div className=" bg-gray-100 text-black text-3xl text-b text-center">User:{userId}</div>
    </>
}