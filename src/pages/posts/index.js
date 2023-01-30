import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

export default function Post({ blogs }) {
  return (
    <>
      <h1>post</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href={`/posts/${blog.id}`}>
            <h3>{blog.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}
