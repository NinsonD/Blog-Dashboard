import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { dummyPosts } from "../utils/constants";

export default function Home() {
  return (
    <Layout>
      {dummyPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </Layout>
  );
}
// This is a simple home page that displays blog posts using a dummy data array.
// It uses a custom Layout component and a BlogCard component for each post.
