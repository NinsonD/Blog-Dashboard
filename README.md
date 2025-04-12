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

### 2. Install dependencies

npm install

### 3. Start the development server

npm run dev

### 4. Open the app in your browser

App will start on: http://localhost:3000

🧠 Design Decisions
🔹 Tech Stack Choices
Next.js – for optimized routing, performance, and developer experience

TypeScript – for robust type safety and scalable code

Material-UI v7 – for a polished, responsive UI with minimal effort

Redux Toolkit Query – for efficient API management and caching

🔹 State Management
API logic and caching handled via RTK Query

Implemented local cache update on post creation (updateQueryData)

Avoided unnecessary refetching by syncing state manually

🔹 UI & Responsiveness
Used Grid2 from MUI v7 for responsive layout handling

Built reusable layout components: Header, Sidebar, Layout

Pagination for better UX when browsing blog posts

Dark/Light theme toggle for accessibility

⚠️ Challenges Faced
Mock API Limitations

JSONPlaceholder doesn't persist new posts

Solution: Inject new posts into RTK Query cache

Grid Migration (MUI v7)

Grid props like item, xs, md deprecated

Fixed by using Unstable_Grid2 and updating layout

Newly Added Post Detail View

JSONPlaceholder /posts/:id fails for new posts

Solution: Fallback to local cache for post lookup

✅ Features
List blog posts with pagination

Add new posts with form validation

View individual post details

Responsive layout with dark/light theme

Toast notifications for user actions

🛠️ Technologies Used
Next.js

TypeScript

Redux Toolkit Query

Material-UI v7

JSONPlaceholder API

📦 Deployment
Project can be deployed using Vercel:
npx vercel
🔗 Live Demo: https://blog-dashboard.vercel.app

💬 Author
Built by Ninson D
Open to feedback, improvements, and full-stack collaborations!
