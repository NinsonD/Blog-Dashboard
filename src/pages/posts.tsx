import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { useGetPostsQuery } from "../features/posts/postsApi";

const PostsPage = () => {
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading, isFetching } = useGetPostsQuery(page);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        All Blog Posts
      </Typography>

      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="40vh"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">Failed to load posts.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {posts?.map((post) => (
              <Grid
                key={post.id}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "50%",
                    md: "33.33%",
                  },
                  px: 1,
                  mb: 2,
                }}
              >
                <BlogCard post={post} />
              </Grid>
            ))}
          </Grid>

          {/* Pagination Controls */}
          <Box mt={4} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="outlined"
              disabled={page === 1}
              onClick={handlePrev}
            >
              Previous
            </Button>
            <Typography mt={1}>Page {page}</Typography>
            <Button
              variant="outlined"
              onClick={handleNext}
              disabled={(posts?.length ?? 0) < 9}
            >
              Next
            </Button>
          </Box>

          {isFetching && <Typography mt={2}>Loading next page...</Typography>}
        </>
      )}
    </Layout>
  );
};

export default PostsPage;
// // This page displays a list of blog posts with pagination controls.
// // It uses a custom Layout component and a BlogCard component for each post.
