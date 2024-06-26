
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class MainPane extends React.Component {

  updateDesc(){
    return {__html: this.props.nodeDescription};
  }

  render() {
    return(
      <div className="col-md node" id="node">
        <h3 id="node-heading">
          {this.props.nodeTitle}
        </h3>
        <span id="node-desc" dangerouslySetInnerHTML={this.updateDesc()}>
        </span>
      </div>
    )
  }
}


export default class PersonalInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nodeTitle: "About Me",
      nodeDescription: "I am a Trilingual(English, 日本語, हिंदी) Software Engineer/Architect, based out of Tokyo, who started writing code at the age of 13 and being writing it ever since. Currently, I am working as a Senior Software Engineer(Machine Learning Engineering) for an American Company and as an advisor for various startups. The buzzwords for me(right now) are Reinforcement Learning, Serverless, and Blockchain Protocols. I frequently write about these topics which I plan to start posting here soon. Besides computer-science related stuff, I also like discussing philosophy and psychology. Feel free to send a message, if you want to start a discussion on any of these topics."
    }
  }

  setCurrentNode(currentElement){
    const currentTarget = currentElement.currentTarget
    this.setState({
      nodeTitle: currentTarget.children[0].innerHTML,
      nodeDescription: currentTarget.children[1].innerHTML,
    })
  }

  render(){
    return (
    <div className="row my-0 my-md-5 mx-3 mx-md-0">
      <div className="col-md my-3 my-md-0">
        <div>
          <h3>
            &nbsp;
          </h3>
        </div>
        <div className="row row-cols-1 d-none d-md-block">
          <div className="node-btn button d-flex align-items-center" role="button" tabIndex={-1} id="about-me" onClick={(e) => this.setCurrentNode(e)} onKeyPress={this.handleKeyPress}>
            <div className="w-100 text-end mr-2" id="about-me-title">
              About Me
            </div>
            <div hidden={true} id="about-me-desc">
            I am a Trilingual(English, 日本語, हिंदी) Software Engineer/Architect, based out of Tokyo, who started writing code at the age of 13 and being writing it ever since. Currently, I am working as a Senior Software Engineer(Machine Learning Engineering) for an American Company and as an advisor for various startups. The buzzwords for me(right now) are Reinforcement Learning, Serverless, and Blockchain Protocols. I frequently write about these topics which I plan to start posting here soon. Besides computer-science related stuff, I also like discussing philosophy and psychology. Feel free to send a message, if you want to start a discussion on any of these topics.
            </div>
          </div>
          <div className="node-btn button d-flex align-items-center" role="button" tabIndex={-1} id="work-ex" onClick={(e) => this.setCurrentNode(e)} onKeyPress={this.handleKeyPress}>
            <div className="w-100 text-end mr-2" id="work-ex-title">
              Work Experience
            </div>
            <div hidden={true} id="work-ex-desc">
              Continents I have worked in are North America, Europe, Asia. <br/>
              Companies I have worked for include Google, SoftBank, Square Enix, Teradata, Wikia, etc. <br/>
            </div>
          </div>
          <div className="node-btn button d-flex align-items-center" role="button" tabIndex={-1} id="open-src" onClick={(e) => this.setCurrentNode(e)} onKeyPress={this.handleKeyPress}>
            <div className="w-100 text-end mr-2" id="open-src-title">
              Open Source Contributions
            </div>
            <div hidden={true} id="open-src-desc">
              I am active participants in multiple open source projects. You can find me actively hanging out on IRC of Kubernetes, KubeFlow, Django etc. Recently I have started participating in OpenCollective.
            </div>
          </div>
          <div className="node-btn button d-flex align-items-center" role="button" tabIndex={-1} id="interests" onClick={(e) => this.setCurrentNode(e)} onKeyPress={this.handleKeyPress}>
            <div className="w-100 text-end mr-2" id="interests-title">
              Interests
            </div>
            <div hidden={true} id="interests-desc">
              - Networks and Security (Pen Testing, Intrution Detection etc) <br/>
              - Financial Markets (Derivatives, Algorithmic Trading, Options Trading, Quants etc) <br/>
              - Languages (日本語, हिंदी WIP: 中文, española) <br/>
              - Middleware (ROS, Linux Kernel etc)
            </div> 
          </div>
        </div> 
      </div>
      <MainPane nodeTitle={this.state.nodeTitle} nodeDescription={this.state.nodeDescription} />
      <div className="col-md my-5 my-md-0">
        <h3 className="mb2">Contact</h3>
        <div className="row row-cols-1 px-2">
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%61%69%6C%40%67%61%75%74%61%6D%62%61%6A%61%6A%2E%63%6F%6D"  target="_blank" rel="noopener noreferrer" className="col dark-gray width-120 py-2 text-decoration-none">
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              style={{fontSize: `20px`, alignItems: `center`}}
            />
            <span className="h5 header-font px-3">Email</span>
          </a>
          <a href="https://twitter.com/d34th4ck3r/" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120 py-2 text-decoration-none">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{fontSize: `20px`, alignItems: `center`}}
            />
            <span className="h5 header-font px-3">Twitter</span>
          </a>
          <a href="https://www.linkedin.com/in/d34th4ck3r" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120 py-2 text-decoration-none">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{fontSize: `20px`, alignItems: `center`}}
            />
            <span className="h5 header-font px-3">LinkedIn</span>
          </a>
          <a href="https://github.com/d34th4ck3r/" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120 py-2 text-decoration-none">
            <FontAwesomeIcon
              icon={faGithub}
              style={{fontSize: `20px`, alignItems: `center`}}
            />
            <span className="h5 header-font px-3">GitHub</span>
          </a>
        </div>
      </div>
    </div>
    )
  }
}