"use client"

import axios from "axios";
import { useState, useEffect } from "react";

export const Form = () =>{
    const [data, setData] = useState();

    const postData = () =>{
        try {
            const {response} = axios.post(formData, URL);
            console.log(response);
            setData(response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <form>
                <h2>you can post in this form</h2>
            </form>
        </div>
    )

}


export const GetAll = () =>{
    const [data, setData] = useState();

    const getData = () =>{
        try {
            const {response} = axios.get(URL)
            setData(response)
        } catch (error) {
            console.log(error)
        }
    }

    // const useEffect(() => {
    // getData()
    // }, [])

    return (
        <h2>
            here is the result of the get 
        </h2>
    )

}
