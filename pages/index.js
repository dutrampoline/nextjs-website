import React from 'react'
import Layout from './layout';

// This is the home page and should really be more enticing
// with photos or autoplaying videos to grab the eye. Should
// also feature the most important information prominently:
// training times and location. Everything else is extra, but
// ideally sells the visitor on the club and/or the sport.
const Index = (props) => (
  <Layout title="Home">
    <div className="hero">
      <h1 className="title">DU Trampoline</h1>
      <p className="description">
        Welcome to trampolining at Trinity!
      </p>
      <div className="training-times">
        <p>All of our training takes place in the Main Hall on Floor 3 of <a href="https://goo.gl/maps/Z1mU6KqaFBEo8wY68" target="_blank">Trinity's Sports Centre</a> at the following times:</p>
        <p>Mondays: 5pm - 7pm</p>
        <p>Wednesdays: 8pm - 10pm</p>
        <p>Fridays: 5pm - 7pm</p>
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
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .training-times {
        font-size: small;
        text-align: right;
        width: 300px;
        padding: 15px;
        margin: auto;
        margin-right: 0;
      }
      .training-times p {
        margin: 5px 0;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Index
