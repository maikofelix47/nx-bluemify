import styles from './posts.module.css';
import { getPosts } from '../resources/post.resource';
import { useEffect, useState } from 'react';
import { Post } from '../types';

/* eslint-disable-next-line */
export interface PostsProps {}

export function Posts(props: PostsProps) {
  const [posts,setPosts] = useState<Post[]>([]);
  useEffect(()=>{
      getPosts().then((posts:Post[])=>{
        setPosts(posts);
      });
  },[]);
  return (
    <div className={styles['container']}>
      <h1>Posts</h1>
      {posts.map((post)=>{
         return <article key={post.id}>
            <h4>{post.title.rendered}</h4>
            <p>{post.excerpt.rendered}</p>
         </article>;
      })}
    </div>
  );
}

export default Posts;
