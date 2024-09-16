import React, { useState } from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
 const [empData, setEmpData] = useState();

 const getAllData = async () = {
    try{
        const getPeople = await fetch(

        );

        const res = await getPeople.json();
        setEmpData(res);
        
    } catch (error){
        console.log(error);
    }
 };
}

export default HomePage;