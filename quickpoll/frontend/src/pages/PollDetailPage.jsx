import { useEffect,useState } from "react";

import axios from "axios";

export default function PollDetailPage(){
    const [poll, setPoll]= useState()

    useEffect(()=>{
        axios.get('http://localhost;5000/api/polls')
        .then(res=>setPoll(res.data))
    },[id])

    return(
        <div>
            <h1>
                Poll Details Page
            </h1>
        </div>
    )



}