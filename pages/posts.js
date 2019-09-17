import React from 'react'
import Link from 'next/link'
import Layout from './layout'

// See this file for the shape of the data
import posts from '../data/posts.json'

// Just links to a post -- could maybe stay on the same page...
const PostLink = (props) => (
    <li>
        <Link href={`/post?id=${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

// Probably just needs visual improvement i.e. include image from
// post, first sentence, that kind of thing...
const Posts = (props) => (
  <Layout title="Posts">
    <div className='post-list-wrapper'>
      <h2>News</h2>
      <ul>
        {props.posts.map(post => 
          <PostLink title={post.title} key={`post-${post.id}`} id={post.id} />
        )}
      </ul>
    </div>
    <style jsx>{`
      .post-list-wrapper {
        padding: 14px;
      }
    `}</style>
  </Layout>
)

// Get JSON data first
Posts.getInitialProps = async function() {
  return {
    posts
  }
}

export default Posts
