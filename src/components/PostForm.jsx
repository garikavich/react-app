import React, {useState} from 'react';
import MyInput from "./UI/input/myInput";
import MyButton from "./UI/button/myButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (e) => {
        e.preventDefault()
        const NewPost = {
        ...post, id: Date.now() }

        create(NewPost)

        setPost({title: "", body: ""})
    }

    return (
        <form action="">
            <MyInput
              type="text"
              placeholder={"Название нового поста"}
              value={post.title}
              onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
              type="text"
              placeholder={"Описание нового поста"}
              value={post.body}
              onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    );
};

export default PostForm;