
export default async function Page() {
  const data = false;

  if (!data) {
    throw Error("Simulated server error"); 
  }

  return <div>{data}</div>;
}