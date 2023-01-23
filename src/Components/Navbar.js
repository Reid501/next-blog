import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>Alex Blog</h1>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Blog</Link>
      </div>
    </nav>
  );
}
