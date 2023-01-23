import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Oooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">Home Page</Link>
      </p>
    </div>
  );
}
