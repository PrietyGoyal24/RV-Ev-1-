// import { useEffect, useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function PollDetailPage() {
//   const { id } = useParams();
//   const [poll, setPoll] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch poll
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/polls/${id}`)
//       .then((res) => {
//         setPoll(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load poll.");
//         setLoading(false);
//       });
//   }, [id]);

//   // Calculate percentages
//   const percentages = useMemo(() => {
//     if (!poll) return [];
//     const total = poll.options.reduce((sum, o) => sum + o.votes, 0);
//     return poll.options.map((o) => ({
//       ...o,
//       percentage: total ? ((o.votes / total) * 100).toFixed(1) : 0,
//     }));
//   }, [poll]);

//   // Vote handler
//   const vote = (option) => {
//     axios
//       .post(`http://localhost:5000/api/polls/${id}/vote`, { option })
//       .then((res) => setPoll(res.data))
//       .catch(() => setError("Failed to submit vote."));
//   };

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
//   if (!poll) return <h2>No poll found.</h2>;

//   return (
//     <div className="poll-detail">
//       <h1>{poll.question}</h1>
//       <div className="options">
//         {percentages.map((o) => (
//           <div key={o.text} className="option">
//             <button className="vote-btn" onClick={() => vote(o.text)}>
//               {o.text}
//             </button>
//             <div className="result">
//               <div className="bar" style={{ width: `${o.percentage}%` }}></div>
//               <span>
//                 {o.votes} votes ({o.percentage}%)
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PollDetailPage() {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch poll
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/polls/${id}`)
      .then((res) => {
        setPoll(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load poll.");
        setLoading(false);
      });
  }, [id]);

  // Calculate percentages
  const percentages = useMemo(() => {
    if (!poll) return [];
    const total = poll.options.reduce((sum, o) => sum + o.votes, 0);
    return poll.options.map((o) => ({
      ...o,
      percentage: total ? ((o.votes / total) * 100).toFixed(1) : 0,
    }));
  }, [poll]);

  // Vote handler
  const vote = (option) => {
    axios
      .post(`http://localhost:5000/api/polls/${id}/vote`, { option })
      .then((res) => setPoll(res.data))
      .catch(() => setError("Failed to submit vote."));
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (!poll) return <h2>No poll found.</h2>;

  return (
    <div className="poll-detail">
      <h1>{poll.question}</h1>
      <div className="options">
        {percentages.map((o) => (
          <div key={o.text} className="option">
            <button className="vote-btn" onClick={() => vote(o.text)}>
              {o.text}
            </button>
            <div className="result">
              <div className="bar" style={{ width: `${o.percentage}% `}}></div>
              <span>
                {o.votes} votes ({o.percentage}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}