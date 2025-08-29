import { useRef,useState } from "react";
import axios from " axios";

export default function CreatePollPage(){
    const [ options, setOptions] = useState('','');

    axios.post('http:/localhost:5000/api/polls')
    .then(()=> alert("poll created!"));

    return(
        <div>
            <h1>
                Create New Poll
            </h1>
        </div>
    )
}
