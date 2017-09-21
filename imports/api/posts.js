import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Meteor.publish('posts', function postsPublication(){
      return Posts.find({});
  });
}

Meteor.methods({
  'posts.insert'(head, content){
    check(head, String);
    check(content, String);

    Posts.insert({ head, content});
  }
});
