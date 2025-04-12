import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import Layout from "../components/Layout";
import { useAddPostMutation, postsApi } from "../features/posts/postsApi";
import { useAppDispatch } from "../store/hooks";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "error">(
    "success"
  );

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await addPost({ title, body }).unwrap();

      dispatch(
        postsApi.util.updateQueryData("getPosts", undefined, (draft) => {
          draft.unshift({
            ...result,
            id: new Date().getTime(), // unique id
            userId: 1, // mock user
          });
        })
      );

      setSnackbarType("success");
      setShowSnackbar(true);
      setTimeout(() => router.push("/posts"), 1000);
    } catch {
      setSnackbarType("error");
      setShowSnackbar(true);
    }
  };
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Add New Post
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2} maxWidth={600}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            multiline
            rows={4}
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Add Post"}
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity={snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarType === "success"
            ? "Post added successfully!"
            : "Failed to add post."}
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default AddPostPage;
// // This page allows users to add a new blog post.
// // It includes a form with fields for title and content, as well as a submit button.
