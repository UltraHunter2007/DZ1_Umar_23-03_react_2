import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import PostList from './pages/PostList/PostList'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/posts' element={<PostList />}/>
          <Route path='/create' element={<CreatePost />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
