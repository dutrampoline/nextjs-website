import React from 'react'
import Layout from './layout';
import axios from 'axios'

const FormMessage = ({success, dismiss}) => (
    <>
        {success ? <h4 className='form-message success'>Message sent!</h4> : <h4 className='form-message failure' onClick={dismiss}>Message could not be sent. Please try again.</h4>}
        <style jsx>{`
        .form-message {
            display: inline-block;
            padding-left: 2em;
            flex: 1 1 auto;
            margin: 0;
        }
        .form-message.success {
            color: #2A7221;
        }
        .form-message.failure {
            color: #D11919;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 30px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255,255,255,0.7);
        }
        `}</style>
    </>
)

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            message: '',
            email: '',
            sending: false,
            success: false,
            popup: false
        }
    }

    handleSent = (err) => {
        if (err) {
            this.setState({ sending: false, success: false, popup: true }, () => {setTimeout(() => this.setState({popup: false}), 3000)})
        } else {
            // reset form
            this.setState({
                name: '',
                message: '',
                email: '',
                sending: false,
                success: true,
                popup: true
            }, () => {setTimeout(() => this.setState({popup: false}), 2000)})
        }
    }

    formSubmit = (e) => {
        e.preventDefault()
        this.setState({ sending: true })

        const {name, message, email} = this.state
        const that = this // the 'this' object changes inside the promise below
        axios({
            method: 'post',
            url: 'api/contact',
            data: {name, message, email}
        }).then(function(response) {
            that.handleSent(response.data.error)
        }).catch(function(error) {
            that.handleSent(error)
        })
      }

    render() {
        return (
        <Layout title="Contact Us">

            <div className='contact-wrapper'>
                <h2>Get in contact</h2>
                <p>The best way to get in touch is to message our <a href="https://www.facebook.com/dutrampoline" target="_blank">Facebook page</a>, or send us an email at <a href="mailto:dutrampoline@gmail.com" target="_blank">dutrampoline@gmail.com</a>.</p>
                {/* Copied from somewhere online... */}
                <form className="contact-form" onSubmit={e => this.formSubmit(e)} autoComplete="off">
                    <label className="message" htmlFor="message-input">Your Message</label>
                    <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

                    <label className="message-name" htmlFor="message-name">Your Name</label>
                    <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

                    <label className="message-email" htmlFor="message-email">Your Email</label>
                    <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

                    <div className="button-container">
                    <button type="submit" className="button button-primary">{ this.state.sending ? 'Sending...' : 'Send Message' }</button>
                    {this.state.popup && <FormMessage success={this.state.success} dismiss={() => {this.setState({popup: false})}}/>}
                    </div>
                </form>
            </div>

            <style jsx>{`
            .contact-wrapper {
                padding: 14px;
            }
            .contact-form {
                display: flex;
                flex-direction: column;
                height: 500px;
                justify-content: space-evenly;
                width: 60%;
                margin: auto;
                padding: 10px;
                border: 1px solid #CCCCCC;
                background: #FBFBFB;
                position: relative;
            }
            .contact-form > input, textarea {
                width: 100%;
                padding: 6px;
                resize: none;
                box-sizing: border-box;
            }
            .contact-form > textarea {
                height: 200px;
            }
            .contact-form .button-container {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .contact-form .button-container button {
                background: #d11919;
                color: #FFF;
                border: 0;
                padding: 1em;
                cursor: pointer;
                font-weight: bold
            }
            @media screen and (max-width: 900px) {
                .contact-form {
                    width: 75%;
                }
            }
            @media screen and (max-width: 600px) {
                .contact-form {
                    width: 90%;
                }
            }
            `}</style>
        </Layout>
        )
    }
}
export default Contact