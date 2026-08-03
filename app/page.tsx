import PostsGrid from "../components/Common/PostsGrid";
import { getAllPostsSummary } from "../lib/contentful";

export const revalidate = 3600;

export default async function Home() {
  const posts = await getAllPostsSummary();
  return <PostsGrid posts={posts} />;
}
