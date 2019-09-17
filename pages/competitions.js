import React from 'react'
import Layout from './layout';

// The items in the lists should probably link to Competition
// components, which could display the relevant details for that
// specific comp, similar to the Posts/Post architecture.
const Competitions = (props) => (
  <Layout title="Competitions">
    <div className='competitions-wrapper'>
        {/* Perhaps check the current date to automatically
            determine whether a competition is past or future */}
        <div className='past-competitions'>
        <h2>Past Competitions</h2>
        {/* Filler material... */}
        <ul>
            <li>Dublin Open - <a href=''>Photos</a> - <a href=''>Results</a></li>
            <li>ISTO - <a href=''>Photos</a> - <a href=''>Results</a></li>
        </ul>
        </div>
        <div className='future-competitions'>
        <h2>Upcoming Competitions</h2>
        <ul>
            <li>Munster Open - <a href=''>Details</a></li>
            <li>Intervarsities - <a href=''>Details</a></li>
        </ul>
        </div>
    </div>
    <style jsx>{`
      .competitions-wrapper {
          display: flex;
          padding: 14px;
      }
      .competitions-wrapper > div {
          flex: 1 1 auto;
      }
      @media screen and (max-width: 800px) {
        .competitions-wrapper {
          flex-direction: column;
        }
      }
    `}</style>
  </Layout>
)

export default Competitions
