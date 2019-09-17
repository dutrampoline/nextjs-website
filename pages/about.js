import React from 'react'
import Layout from './layout';

// See this file for the shape of the data
import faq from '../data/faq.json'

const FAQ = ({question, answer}) => (
  <>
    <h4>{question}</h4>
    <p>{answer}</p>
  </>
)

const About = ({faq}) => (
  <Layout title="About Us">
    {/* Include lots of info here! Anything you can think of that might be relevant. */}
    <div className='about-us-box'>
      <div>
        <h2>FAQ</h2>
        { faq.map((item, index) => <FAQ key={`faq-${index}`} question={item.question} answer={item.answer} />) }
      </div>
      <div>
        <h2>About Us</h2>
        <p>We are a student-run trampoline club based in <a href="https://www.tcd.ie/Sport/" target="_blank">Trinity College Dublin</a>. Trampoline is an amazing sport, which lets you get fantastic exercise while having loads of fun throwing yourself up in the air! If you enjoy being athletic, meeting new people, or just taking the weight off your feet, come and give it a go!</p>
        <p>We have four olympic sized trampolines, along with the coaches and all the equipment necessary to run safe training sessions a few times a week. We don't offer much in terms of non-trampoline gymnastics, but we do also have an airtrack for anyone who is more inclined towards tumbling.</p>
        <h2>Find Us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.9552707924063!2d-6.252143384689125!3d53.34405687997857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e91afd17689%3A0xf7745d461bd60bc0!2sTrinity+College+Sports+Centre!5e0!3m2!1sen!2sie!4v1562059760962!5m2!1sen!2sie" frameBorder="0" style={{"border":0}} allowFullScreen></iframe>
      </div>
    </div>

    <style jsx>{`
      .about-us-box {
          padding: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
      }
      .about-us-box iframe {
        width: 600px;
        height: 450px;
      }
      @media screen and (max-width: 1000px) {
        .about-us-box {
          grid-template-columns: 1fr;
          grid-gap: 0px;

        }
        .about-us-box div:nth-child(2) {
          grid-row: 1;
        }
      }
      @media screen and (max-width: 700px) {
        .about-us-box iframe {
          width: 400px;
          height: 300px;
        }
      }
      @media screen and (max-width: 450px) {
        .about-us-box iframe {
          width: 200px;
          height: 150px;
        }
      }
    `}</style>
  </Layout>
)

// Make sure the JSON data is retrieved first!
About.getInitialProps = async function() {
  return {
    faq
  }
}

export default About
