import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter }  from 'meteor/kadira:flow-router';

import './main.html';
import BlogCreate from '../imports/views/BlogCreate.jsx';
import BlogList from  '../imports/views/BlogList.jsx';
import BlogPost from '../imports/views/BlogPost.jsx';

FlowRouter.route('/', {
  name: 'Blog.List',
  action(params, queryParams) {
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<BlogList />, root);
    }
  }
});

FlowRouter.route('/new/', {
  name: 'Blog.Create',
  action() {
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<BlogCreate />, root);
    }
  }
});

FlowRouter.route('/post/:_postid', {
  name: 'Blog.Post',
  action(params){
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<BlogPost id={params._postid} />, root);
    }
  }
});

Meteor.startup( () => {
  const routeName = FlowRouter.getRouteName();
  const root = document.getElementById('root');
  if(routeName=='Blog.List'){
    ReactDOM.render(<BlogList />, root);
  }else if(routeName=='Blog.Create'){
    ReactDOM.render(<BlogCreate />, root);
  }else if(routeName=='Blog.Post'){
    ReactDOM.render(<BlogPost id={FlowRouter.getParam('_postid')} />, root);
  }
});
