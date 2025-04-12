import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useGetPostsQuery } from "../../features/posts/postsApi";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import Link from "next/link";

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: posts, isLoading, isError } = useGetPostsQuery(1);

  if (isLoading) {
    return (
      <Layout>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  if (isError || !posts) {
    return (
      <Layout>
        <Alert severity="error">Failed to load posts.</Alert>
      </Layout>
    );
  }

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <Layout>
        <Alert severity="error">Post not found.</Alert>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box maxWidth="800px" mx="auto">
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Author ID: {post.userId || "N/A"}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {post.body}
        </Typography>
        <Box mt={4}>
          <Link href="/posts" passHref>
            <Button variant="outlined">← Back to Posts</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default PostDetailPage;
// // This page displays the details of a single blog post.
// // It fetches the post data based on the ID from the URL and displays it.
