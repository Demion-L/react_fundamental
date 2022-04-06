import './styles/App.css';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import StateClass from './Components/StateClass';
import Post from './Components/Post';
import { useState } from 'react';
import MyButton from './Components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'programming language'},
    {id: 2, title: 'Java', body: 'programming language'},
    {id: 3, title: 'Python', body: 'programming language'},
    {id: 4, title: 'Golang', body: 'programming language'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name of the post"/>
        <input type="text" placeholder="Post content"/>
        <MyButton>Create Post</MyButton>
      </form>

      <Post posts={posts} title='Posts List 1'/>
      <StateClass/>
      <Counter/>
      <Toggle />
    </div>
  );
}

export default App;
