import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/db.json";

function PostsList1() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (postsQuery.status === "loading") return <h1>Loading...</h1>;
  if (postsQuery.status === "error") {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  }

  const posts = postsQuery.data || []; // Check if data is undefined and provide an empty array as a fallback

  return (
    <div>
      <h1>PostsList1</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default PostsList1;
