import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <h1>Список постов пустой</h1>
    }
    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    return (
                      <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                      >
                      <PostItem post={post}  number={index + 1} remove={remove} />
                      </CSSTransition>
                    )}
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;