import React from 'react';

import { Posts } from '../api/posts.js'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      head : "",
      content : ""
    }
    this.handleHeadChange = this.handleHeadChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHeadChange(event){
    this.setState({ head: event.target.value });
  }

  handleContentChange(event){
    this.setState({ content: event.target.value });
  }

  handleSubmit(event){
    Posts.insert({ head : this.state.head, content : this.state.content});
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <h1>Make new post</h1>
        <a href="/">Back</a> <br/>
        <form id="post" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.head} onChange={this.handleHeadChange}/>
          <br/>
          <textarea value={this.state.content} onChange={this.handleContentChange} rows="10" cols="50"/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
