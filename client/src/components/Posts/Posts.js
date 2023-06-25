import React from 'react';
import {useSelector } from 'react-redux/es/hooks/useSelector.js';

import Post from './Post/Post.js'

import Styles from './styles'

const Posts=()=>{
    const posts=useSelector((state)=>state.posts);
    const {classes}= Styles();

    console.log(posts);

    return(
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
        

    );
}
export default Posts;