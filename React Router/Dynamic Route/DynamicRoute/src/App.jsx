import './App.css'
// here’s a complete working React app example with dynamic routes, links, and useParams all tied together in one place.

// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

// Dummy post data
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
  { id: 3, title: 'Third Post', content: 'This is the third post.' },
]

// Home component (lists posts with links)
function Home() {
  return (
    <div>
      <h1>Blog Home</h1>
      <nav>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </nav>
    </div>
  )
}

// BlogPost component (uses useParams to find the right post)
function BlogPost() {
  const { id } = useParams() // get :id from the URL
  const post = posts.find((p) => p.id === Number(id))

  if (!post) return <h2>Post not found!</h2>

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">⬅ Back to Home</Link>
    </div>
  )
}

// Main App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
