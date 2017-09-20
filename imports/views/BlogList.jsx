import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js'

class BlogList extends React.Component {
  render(){
    console.log(this.props.posts);
    list = this.props.posts.map((element,ind) => (
        <article key={element._id}>
          <h3>{element.head}</h3>
          <p>{element.content}</p>
        </article>
    ));

    return (
      <main>
        <h1>Blog</h1>
        <a href="/new">New Blog</a>
        {list}
      </main>
    );
  }
}

export default createContainer( () => {
  return{
    posts: Posts.find({}).fetch()
  };
}, BlogList);
