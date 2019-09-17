import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

// This is like the master template for every page. Any page
// wrapped in a Layout component will have the meta info and
// navbar on it, as well as anything else added here.
const Layout = (props) => (
  <div>
    <Head title={props.title || 'DU Trampoline'} />
    <Nav />
    {props.children}

    <style jsx global>{`
      a { 
        color: #d11919;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Layout
