import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

import Layout from './layout'

// See this file for the shape of the data
import profiles from '../data/committee-profiles.json'

// This component formats the committee profile data into
// something vaguely pleasant to look at. I've done some 
// media querying here, but it's not foolproof yet.
const CommitteeCard = ({ profile }) => {
  return <Link href={`/committee`}>
    <a className="card" title={profile.position}>
      <h3>{`${profile.name} - ${profile.position}`}</h3>
      <img src={profile.photos[1]} />
      <div>
        <p>{`${profile.year} in ${profile.course}`}</p>
        {profile.bullets.map((bullet, index) => <p key={`${profile.id}-bullet-${index}`}>{bullet}</p>)}
      </div>
      <style jsx>{`
        .card {
          padding: 18px 18px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #d11919;
        }
        .card h3 {
          grid-column: 1 / -1;
          margin: 0;
          color: #d11919;
          font-size: 18px;
          padding-bottom: 12px;
          text-align: center;
        }
        @media screen and (max-width: 600px) {
          .card {
            grid-template-columns: 1fr;
          }
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .card img {
          width: 100%;
        }
        `}</style>
      </a>
  </Link>
}

const Committee = withRouter(props => {
  return <Layout title="Committee">
    <div className="hero">
      <h1 className="title">Committee</h1>
      <p className="description">
        Our committee members for 2018/2019!
      </p>
      <div className="committee">
      {
        // If you're not looking at a specific profile
        // then show all the mini cards together
        !props.router.query.id && props.profiles.map(profile => {
          return (
            <div key={`committee-profile-${profile.id}`} className="committee-profile">
              <Link href={`/committee?id=${profile.id}`}>
                <a className="card" title={profile.position}>
                  <h3>{`${profile.name}`}</h3>
                  <img src={profile.photos[0]} />
                  <p>Click to learn more about our <b>{profile.position}</b>!</p>
                  </a>
              </Link>
            </div>
          )
        })
      } 
      {
        // If you ARE looking at a specific profile
        // then just show that expanded profile card
        props.router.query.id && <div className="committee-profile expanded">
          <CommitteeCard profile={props.profiles.find(profile => `${profile.id}` === props.router.query.id)} />
        </div>
      }
      </div>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .committee {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding: 20px;
        grid-gap: 20px;
      }
      @media screen and (max-width: 1000px) {
        .committee {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
      @media screen and (max-width: 800px) {
        .committee {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
      @media screen and (max-width: 600px) {
        .committee {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media screen and (max-width: 400px) {
        .committee {
          grid-template-columns: 1fr;
        }
      }
      .committee-profile {
        display: flex;
      }
      .committee-profile.expanded {
        grid-column: 2 / -2;
      }
      @media screen and (max-width: 1000px) {
        .committee-profile.expanded {
          grid-column: 1 / -1;
        }
      }
      .card {
        padding: 18px 18px 24px;
        display: block;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #d11919;
      }
      .card h3 {
        margin: 0;
        padding-bottom: 12px;
        color: #d11919;
        font-size: 18px;
        text-align: center;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .card img {
        width: 100%;
      }
    `}</style>
  </Layout>
})

// Make sure the JSON data is retrieved first!
Committee.getInitialProps = async function() {
  return {
    profiles
  }
}

export default Committee
