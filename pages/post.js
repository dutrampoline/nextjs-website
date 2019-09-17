import { withRouter } from 'next/router'
import Layout from './layout'
import Link from 'next/link'
import React from 'react'

// See this file for the shape of the data
import posts from '../data/posts.json'

// This is very incomplete, but mostly because we don't really have
// any posts... These could just be anything that gets put up on
// Facebook etc? Not really sure, some sort of announcement or blog...
// This whole file/component could probably be refactored into Posts.
// The data file should probably be restructured to allow for content
// with multiple paragraphs and multimedia elements.
const Post = withRouter(props => {
  const postData = props.posts.find(post => post.id === parseInt(props.router.query.id))
  return <Layout>
    <div className='post'>
      <h2>{postData.title}</h2>
      <p>{postData.content}</p>
      <div>
        <Link href={`/posts`}>
            <a>Back</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .post {
          padding: 14px;
      }
    `}</style>
  </Layout>
})

// Get JSON data first
Post.getInitialProps = async function() {
  return {
    posts
  }
}

export default Post