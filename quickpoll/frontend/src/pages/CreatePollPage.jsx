import { useRef, useState } from "react";
import axios from "axios";

export default function CreatePollPage() {
  const questionRef = useRef();
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => setOptions([...options, ""]);
  const updateOption = (i, val) => {
    const newOptions = [...options];
    newOptions[i] = val;
    setOptions(newOptions);
  };

  const submitPoll = () => {
    axios.post("http://localhost:5000/api/polls", {
      question: questionRef.current.value,
      options
    }, {
      headers: { Authorization: "Bearer MY_SECRET_TOKEN" }
    }).then(() => alert("Poll created!"));
  };

  return (
    <div>
      <h1>Create New Poll</h1>
      <input ref={questionRef} placeholder="Enter poll question" />
      {options.map((opt, i) => (
        <input
          key={i}
          value={opt}
          placeholder={`Option ${i + 1}`}
          onChange={(e) => updateOption(i, e.target.value)}
        />
      ))}
      <button onClick={addOption}>Add Option</button>
      <button onClick={submitPoll}>Submit Poll</button>
    </div>
  );
}