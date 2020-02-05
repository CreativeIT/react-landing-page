import React, {Component} from 'react';
// import MailSentBlock from './MailSentBlock';
const validator = require("email-validator");
// const YOUR_FORMSPREE_EMAIL = 'ik@foliage.io';
// const FORMSPREE_POST_URL = `https://formspree.io/${YOUR_FORMSPREE_EMAIL}`;
const POST_URL = `/api/contact`;





export default class Contact extends Component {
  constructor(props) {
    super();

    this.state = {
      checkList: new Set(),
      name: '',
      email: '',
      content: '',
      validationList: [],
      mailSent: false,
      isLoading: false
    }

    this.handleCheck = this.handleCheck.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.submit = this.submit.bind(this);
  }

  handleCheck(id) {
    // console.log(e);
    let checkList = new Set(this.state.checkList);
    if (checkList.has(id)) {
      checkList.delete(id);
    } else {
      checkList.add(id);
    }
    this.setState({checkList});
  }

  handleInputUpdate(e) {
    let newState = {}
    newState[`${e.target.name}`] = e.target.value;


    this.setState(newState, () => {
      let {name, email, content} = this.state;
      let validationList = this.getValidationList(name, email, content);
      if (this.state.validationList.length > 0) {
        this.setState({validationList});
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // let dataString = `checked items: ${Array.from(this.state.checkList)}, name: ${this.state.name}, email: ${this.state.email}, content: ${this.state.content}`;
    // alert(dataString);


    let {name, email, content} = this.state;
    let validationList = this.getValidationList(name, email, content);
    this.setState({validationList});

    if (validationList.length === 0) {
      this.submit();
    }

  }

  getValidationList(name, email, content) {
    let validationList = [];

    if (name.length === 0) {
      validationList.push('name')
    }
    if (!validator.validate(email)) {
      validationList.push('email');
    }
    if (content.length < 100) {
      validationList.push('content');
    }
    return validationList
  }

  submit() {
    let data = Object.assign({}, this.state, {checkList: Array.from(this.state.checkList)});
    let that = this;
    this.setState({
      "isLoading": true
    }, () => {
        that.sentEmail(data);
    });
  }

  sentEmail(data) {
    let that = this;
    fetch(POST_URL, {
        method: 'POST',
        body: JSON.stringify({data}),
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      })
      .catch(e => {
        // Some error handling you should probably be doing... again, if you're a weenie
      })
      // .then(r => r.json())
      .then(response => {
        if (response.statusText === 'OK') {
          console.log(response);
          that.setState({
            mailSent: true,
            isLoading: false
          }, () => {
            window.scrollTo(0, 0);
          })
        }
        else {
          // OMG are you still going on about validation and error handling? You weenie!
        }
      });

  }

  render() {

    if (this.state.mailSent) {
      return (
        // <MailSentBlock name={this.state.name}/>
        <div>Sent</div>
      )
    }

    let invalidName = this.state.validationList.indexOf('name') >= 0,
        invalidEmail = this.state.validationList.indexOf('email') >= 0,
        invalidContent = this.state.validationList.indexOf('content') >= 0;
    return (
      <div className="contact">
            <a id="contact"></a>
            <h3 className="contact__title">Have a React project to discuss?
                <br/><span>Contact us!</span>
            </h3>
            <p className="contact__text">We provide consultancy on React development, project roadmapping and work planning. </p>
            <form className="contact__section-block-form">
                <div className="contact__head">


              <div className="contact__val-block">
                <input
                    name="name"
                    className={'contact__input ' + (invalidName ? 'contact__input--invalid' : '')}
                    type="text"
                    value={this.state.name}
                    placeholder="Your name"
                    onChange={this.handleInputUpdate} />
                {invalidName && (
                  <span className="contact__valid-text">Please,provide a valid name</span>
                )}

              </div>
              <div className="contact__val-block">
                <input
                  name="email"
                  className={'contact__input ' + (invalidName ? 'contact__input--invalid' : '')}
                  type="email"
                  value={this.state.email}
                  placeholder="Your email"
                  onChange={this.handleInputUpdate}/>
                {invalidEmail && (
                  <span className="contact__valid-text">Please,provide a valid email</span>
                )}
              </div>
              </div>
              <div className="contact__val-block">
                <textarea
                  name="content"
                  className="contact__textarea"
                  className={'contact__textarea ' + (invalidName ? 'contact__textarea--invalid' : '')}
                  type="text"
                  value={this.state.content}
                  placeholder="Tell about your project"
                  onChange={this.handleInputUpdate}></textarea>
                {invalidContent && (
                  <span className="contact__valid-text">Let us know about your project at least in 100 symbols. Now only {this.state.content.length} / 100 </span>
                )}
                </div>
              <button className="contact__btn" onClick={this.handleSubmit}>Sent message</button>
            </form>
      </div>
    )
  }
}
