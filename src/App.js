import React, { useState } from 'react'
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';




function App() {

const [posts,setPosts] = useState([
  {id: 1, title : 'ript', body: 'sdf'},
  {id: 2, title : 'jript2', body: 'jkl'},
  {id: 3, title : 'ascript3', body: 'sdkl'},
  {id: 4, title : 'javript4', body: 'kl'},
])

const [filter,setFilter] = useState({sort:'',query:''});
const [modal,setModal] = useState(false);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


const createPost = (newPost) => {
setPosts([...posts,newPost])
setModal(false)
}

const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}
  return (
   <div className = 'App'>
    
    <MyButton style={{marginTop:'30px'}} onClick={() => {setModal(true)}}>
      Создать пост
    </MyButton>
    <MyModal visable={modal} setVisable={setModal}> 
       <PostForm create={createPost}/>
    </MyModal>

   <hr style={{margin:'15px 0'}}/>
   <PostFilter
     filter={filter} 
     setFilter={setFilter}
   />
   <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1"/> 
   </div>
  );
}

export default App;

