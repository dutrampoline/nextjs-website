import React from 'react'
import Link from 'next/link'

// Add anything that should appear in the navbar here
// in the format { href, label, ?imgSrc, ?target }
// where imgSrc and target are optional
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/committee', label: 'Committee' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/contact', label: 'Contact' },
  { href: '/posts', label: 'News' },
  { href: '/photos', label: 'Photos'},
  { href: 'https://facebook.com/dutrampoline', imgSrc: '/static/images/media/fb.svg', label: 'Facebook', target: '_blank'},
  { href: 'https://instagram.com/dutrampoline', imgSrc: '/static/images/media/ig.svg', label: 'Instagram', target: '_blank'},
  { href: 'https://twitter.com/TCDBounce', imgSrc: '/static/images/media/tw.svg', label: 'Twitter', target: '_blank'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  render() {
    return (
      <nav>
        <ul>
          {/* Left hand side of navbar */}
          <li className='home-li'>
            <Link prefetch href="/">
              <a><img alt='Home' className='home-logo' src='/static/images/logo/logo.svg' /></a>
            </Link>
          </li>
          {/* Right hand side of navbar */}
          <div className='nav-menu' onClick={() => this.setState({menuOpen: !this.state.menuOpen})}><img src='/static/images/misc/menu.svg'/></div>
          <ul className={`nav-links ${this.state.menuOpen ? 'open' : ''}`}>
            {links.map(({ key, href, label, imgSrc, target }) => (
              <li key={key} onClick={() => this.setState({menuOpen: false})}>
                <Link href={href}>
                  <a target={target || ''}>{imgSrc ? <img className='nav-media-img' alt={label} src={imgSrc} /> : label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>

        {/* Some of this is auto-generated, feel free to alter it if you know what you want to do */}
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
            background-color: #333;
            padding: 10px 0;
          }
          nav .nav-media-img {
            width:20px;
            height: 20px;
          }
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: none;
          }
          nav > ul {
            padding: 4px 16px;
            margin: 0;
            position: relative;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          .home-li {
            padding: 0;
          }
          a {
            color: #d11919;
            text-decoration: none;
            font-size: 14px;
            font-weight: bold;
          }
          .home-logo {
            height: 50px;
          }
          .nav-menu {
            display: none;
            padding: 10px;
            cursor: pointer;
          }
          @media screen and (max-width: 800px) {
            .nav-links {
              display: none;
            }
            .nav-links.open {
              display: flex;
              flex-direction: column;
              position: absolute;
              width: 100%;
              padding: 0;
              left: 0;
              right: 0;
              top: 70px;
              background: #333;
              z-index: 3;
            }
            .nav-links.open > li {
              width: 100%;
              justify-content: center;
              background: #333;
              height: 2em;
              padding: 6px 0;
            }
            .nav-links.open > li > a {
              width: 100%;
              height: 100%;
              display: inline-flex;
              justify-content: center;
              align-items: center;
            }
            .nav-menu {
              display: block;
            }
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav
