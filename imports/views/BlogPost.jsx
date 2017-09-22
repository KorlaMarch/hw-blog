import { Meteor } from 'meteor/meteor'
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

class BlogPost extends React.Component {

  render(){
    console.log("Enter" + this.props.post);
    return (
      <div>
        <a href="/">Back</a> <br/>
        { this.props.post &&
          <main>
            <h1>{this.props.post.head}</h1>
            <p>{this.props.post.content}</p>
          </main>
        }
      </div>
    );
  }
}

export default withTracker( ({ id }) => {
  console.log("Create Con " + id);
  Meteor.subscribe('posts', id);

  return{
    post: Posts.findOne({_id : id})
  };
})(BlogPost);
