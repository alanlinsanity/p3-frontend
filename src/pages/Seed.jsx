fetch('http://localhost:2000/api/holidays/seed')
  .then(response => response.json())
  .then(data => console.log(data));

const seed = []

function Seed() {
  return (
    <>
      <h1>Seed</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;