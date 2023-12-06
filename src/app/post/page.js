import Link from "next/link";

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/post", {
    cache: "no-store",
  });


  const post = await res.json();
  // console.log(post);


  return (
    <div className="w-full" >
      <h1>Total Post :{post.length}  </h1>
      {
        post.map(posts =>
          <div key={posts.id} className="card m-4  bg-gray-300 shadow-xl w-[70%] mx-auto ">
            <div className="card-body">
              <h2 className="card-title">Post title: {posts.title} </h2>
              <p>{posts.description} </p>
              <p>Total Likes:{posts.likes_count} </p>
              <div className="card-actions justify-end">
                <Link href={`/post/${posts.id}`} > <button className="btn btn-primary">See More</button></Link>
              </div>
            </div>
          </div>)
      }

    </div>
  );
};

export default PostPage;