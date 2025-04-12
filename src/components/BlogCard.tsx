import { Card, CardContent, Typography, Button } from "@mui/material";
import { Post } from "../types/post";
import Link from "next/link";

type Props = {
  post: Post;
};

const BlogCard = ({ post }: Props) => {
  console.log("Rendering post:", post.id); // Debugging log

  return (
    <Card sx={{ minWidth: 275, mb: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body.slice(0, 100)}...
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mt: 1 }}
        >
          Author ID: {post.userId}
        </Typography>
        <Link href={`/posts/${post.id}`} passHref>
          <Button variant="outlined" size="small">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
// // This component represents a single blog post card.
// // It displays the title, a snippet of the content, and a button to read more.
