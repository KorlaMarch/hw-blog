import { Meteor } from 'meteor/meteor'
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

class BlogPost extends React.Component {

  render(){
    console.log("Enter" + this.props.post);
    return (
      <div>
        <a href="/">Back</a> <br/>
        <h1>{this.props.post.head}</h1>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

export default createContainer( ({ id }) => {
  console.log("Create Con " + id);
  Meteor.subscribe('posts');

  return{
    post: Posts.find({_id : id}).fetch()
  };
}, BlogPost);
