import { useEffect, useState } from "react";

const BACKEND = process.env.BACKEND ?? "http://localhost:2000" 

function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND}/api/holidays/seed`)
      .then((response) => response.json())
      .then((data) => setSeed(data));
  }, []);

  return (
    <>
      <h1>Seed 2</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
