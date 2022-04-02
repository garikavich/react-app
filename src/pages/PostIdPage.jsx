import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  console.log(params)
  const [fetchPostsId, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id)
    setComments(response.data)
  })

  useEffect(()=> {
    fetchPostsId(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
        : <div style={{marginTop: 50}}>
            <div>{post.id} - {post.title}</div>
          </div>
      }
      <h1>Комментарии к посту</h1>
      {isComLoading
        ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
        : <div>
          {comments.map(comm =>
          <div key={comm.id} style={{marginTop:20}}>
            <h5>{comm.email}</h5>
            <div>{comm.body}</div>
          </div>
          )}
        </div>
      }

      <div style={{marginTop: 50}}>
        <Link className={'button-more'} to={`/posts/`}>Назад</Link>
      </div>
    </div>
  );
};

export default PostIdPage;