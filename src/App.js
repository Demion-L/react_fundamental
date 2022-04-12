import './styles/App.css';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import StateClass from './Components/StateClass';
import Post from './Components/Post';
import { useState } from 'react';
import PostForm from './Components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'programming language'},
    {id: 2, title: 'Java', body: 'programming language'},
    {id: 3, title: 'Python', body: 'programming language'},
    {id: 4, title: 'Golang', body: 'programming language'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <Post remove={removePost} posts={posts} title='Posts List 1'/>
      <StateClass/>
      <Counter/>
      <Toggle />
    </div>
  );
}

export default App;
