import React from 'react'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import Layout from './layout'

// Currently this is just an Instagram scrape-page... It could
// possibly use our Google Photos account, but this doesn't seem
// as straightforward as I hoped. Alternatively, photos could just
// be added and updated manually from time to time.
class Photos extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            instagram: props.instagram
        }
    }
    render(){
        return <Layout title="Photos">
            <div className="media">
                <div className="instagram">
                    <h1 className="title"><a href="https://www.instagram.com/dutrampoline/">Instagram</a></h1>
                    <div className="images">
                    {
                        this.state.instagram.map(p => {
                            return <a key={p} href={`https://www.instagram.com/p/${p}`} target='_blank'><div style={{'backgroundImage': `url('https://www.instagram.com/p/${p}/media/?size=l')`, }} /></a>
                        })
                    }
                    </div>
                
                </div>
            </div>
            <style jsx>{`
            .title {
                margin: 0;
                width: 100%;
                line-height: 1.15;
                font-size: 48px;
                text-align: center;
            }
            .title a {
                text-decoration: none;
                color: #d11919;
            }
            .media {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                grid-gap: 20px;
            }
            .instagram .images {
                margin-top: 20px;
                padding: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                grid-gap: 10px;
            }
            .images a {
                align-self: center;
                height: 30vw;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #9b9b9b;
            }
            .images a:hover {
                border-color: #d11919;
            }
            .images a div {
                height: 100%;
                width: 100%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
            `}</style>
        </Layout>
    }
}

// Hacky way to scrape our most recent IG posts
Photos.getInitialProps = async function() {
    const res = await fetch('https://www.instagram.com/dutrampoline')
    const data = await res.text()
    const re = new RegExp("_sharedData = (.*);</script>")
    const postIds = JSON.parse(re.exec(data)[1]).entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.map(e => e.node.shortcode)
    return { 'instagram': postIds }
}
export default withRouter(Photos)