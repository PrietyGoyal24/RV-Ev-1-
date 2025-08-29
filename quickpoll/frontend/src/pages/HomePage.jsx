import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/polls").then(res => setPolls(res.data));
  }, []);

  return (
    <div>
      <h1>All Polls</h1>
      <ul>
        {polls.map(p => (
          <li key={p.id}>
            <Link to={`/poll/${p.id}`}>{p.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}