import Link from "next/link";

export async function generateStaticParams() {
  return [{ id: '1' }, { id: 2 }]
}

const DetailPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/post/${params.id}`);
  const posts = await res.json();
  console.log(posts)
  return (
    <div>
      <h1>Page Details </h1>
      <div key={posts.id} className="card m-4  bg-gray-300 shadow-xl w-[70%] mx-auto ">
        <div className="card-body">
          <h2 className="card-title">Post title: {posts.title} </h2>
          <p>{posts.description} </p>
          <p>Total Likes:{posts.likes_count} </p>
          <div className="card-actions justify-end">
            <Link href="/post" > <button className="btn btn-primary">Back</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;