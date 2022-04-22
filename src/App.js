import './styles/App.css';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import StateClass from './Components/StateClass';
import Post from './Components/Post';
import { useState } from 'react';
import PostForm from './Components/PostForm';
import X_component from './Components/X_component';
import XCompForm from './Components/X_comp_form';

function App() {
  // const [ posts, setPosts ] = useState( [
  //   { id: 1, title: 'Javascript', body: 'programming language' },
  //   { id: 2, title: 'Java', body: 'programming language' },
  //   { id: 3, title: 'Python', body: 'programming language' },
  //   { id: 4, title: 'Golang', body: 'programming language' },
  // ] );
  // const createPost = ( newPost ) => {
  //   setPosts( [ ...posts, newPost ] );
  // };
  // const removePost = ( post ) => {
  //   setPosts( posts.filter( p => p.id !== post.id ) );
  // };

  const [ manyPosts, setPost ] = useState( [
    { id: 1, title: 'The first', body: 'Description' },
    { id: 2, title: 'The second', body: 'Description' },
    { id: 3, title: 'The third', body: 'Description' },
    { id: 4, title: 'The forth', body: 'Description' },
  ] );
  const [ superTitle, setSuperTitle ] = useState( 'List of FANTASTIC POSTS' );
  const [ somethin, setSomethin ] = useState( 0 );


  return (
    <div className="App">
      <XCompForm/>
      <X_component
        newPosts={ manyPosts }
        amazingTitle={ superTitle }
        count={ somethin }
      />

      {/*<PostForm create={ createPost }/>*/ }
      {/*{*/ }
      {/*  posts.length !== 0*/ }
      {/*    ? <Post remove={ removePost } posts={ posts } title="Posts List 1"/>*/ }
      {/*    : <div >No post here!!!</div>*/ }
      {/*      }*/ }
      {/*      <StateClass/>*/ }
      {/*      <Counter/>*/ }
      {/*      <Toggle/>*/ }
    </div>
  );
}

export default App;
