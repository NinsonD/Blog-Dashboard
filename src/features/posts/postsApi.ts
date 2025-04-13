import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../types/post";
import { RootState } from "../../store/store"; // Import RootState for typing

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com", // JSONPlaceholder base URL
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    // Fetch all posts
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),

    // Fetch a single post by ID
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),

    // Create a new post
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      async onQueryStarted(newPost, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // Update the cache for page 1
          dispatch(
            postsApi.util.updateQueryData("getPosts", undefined, (draft) => {
              draft.unshift({
                ...data,
                id: new Date().getTime(), // Mock unique ID
              });
            })
          );
        } catch (err) {
          console.error("Error adding post:", err);
        }
      },
    }),
  }),
});

// Selector to get all cached posts
export const selectAllCachedPosts = (state: RootState) => {
  return Object.values(
    postsApi.endpoints.getPosts.select(undefined)(state)?.data ?? []
  ).flat();
};

// Export hooks for usage in functional components
export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation } =
  postsApi;
