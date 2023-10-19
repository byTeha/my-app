import React, { useState } from 'react'
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';



function App() {

const [posts,setPosts] = useState([
  {id: 1, title : 'javascript', body: 'sdfghjkl'},
  {id: 2, title : 'javascript2', body: 'sdfghjkl'},
  {id: 3, title : 'javascript3', body: 'sdfghjkl'},
  {id: 4, title : 'javascript4', body: 'sdfghjkl'},
])

const [title, setTitle] = useState('')
const addNewPost = () => {

}
  return (
   <div className = 'App'>

    <form >
      <MyInput
       value ={title}
       onChange ={e => setTitle(e.target.value)}
        type='text' 
        placeholder='Название поста'/>
      <MyInput type='text' placeholder='Описание поста'/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
    
   <PostList posts = {posts} title="Список постов 1"/>
 
   </div>
  );
}

export default App;

