# 📝 Urbio Blog Dashboard

A modern, responsive blog dashboard built using **Next.js**, **TypeScript**, **Material-UI**, and **Redux Toolkit Query**.  
This project replicates an admin-style CMS for managing blog content as part of a frontend developer evaluation by **Urbio Technologies**.

---

## 🚀 Getting Started (Run Locally)

### 1. Clone the repository

```bash
git clone https://github.com/NinsonD/urbio-blog-dashboard.git
cd urbio-blog-dashboard
```

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

App will start on: http://localhost:3000

🧠 Design Decisions
🔹 Tech Stack Choices
Next.js for routing and performance

TypeScript to catch bugs early and ensure scalable, typed components

Material-UI v7 for a sleek, responsive UI out of the box

Redux Toolkit Query for API data fetching and smart caching

🔹 State Management
All API logic and caching are handled via RTK Query

Added local cache updates after post creation using updateQueryData

Avoided unnecessary refetching by syncing state manually when needed

🔹 Responsiveness & UI
Used Grid2 from MUI v7 to handle responsive layouts across breakpoints

Built reusable layout components: Header, Sidebar, and Layout

Included pagination for better UX when browsing blog posts

⚠️ Challenges Faced

1. Mock API Limitations
   JSONPlaceholder doesn't actually persist new posts, which meant added posts weren't returned on subsequent API calls

Solved this by injecting new posts directly into RTK Query cache to reflect them immediately in the UI

2. Grid Migration (MUI v7)
   MUI removed item, xs, sm, md props from <Grid>, which broke layout initially

Resolved by switching to Unstable_Grid2 and rewriting layout for full MUI v7 compatibility

3. Detail View for Newly Added Posts
   Since JSONPlaceholder only supports /posts/:id for existing (static) posts, newly added ones would 404

Fixed by resolving post data from local cache instead of hitting the API

✅ Features
List all blog posts with pagination

Add new posts with form validation

View single post in detail

Responsive layout with dark/light theme support

Toast/snackbar feedback for user actions

🛠️ Technologies Used
Next.js

TypeScript

Redux Toolkit Query

Material-UI v7

JSONPlaceholder API

📦 Deployment
You can deploy this project easily using Vercel:
npx vercel

💬 Author
Built by Ninson D
Open to feedback, improvements, and full-stack extensions of this project!

---
