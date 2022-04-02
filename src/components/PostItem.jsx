import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "./UI/button/myButton"

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__name">
                <strong>{props.post.id} </strong>
                <div className="post__title">{props.post.title}</div>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <Link className={'button-more'} to={`/posts/${props.post.id}`}>Открыть</Link>
                <MyButton onClick={()=> props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;