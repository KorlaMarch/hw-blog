import React from 'react';

export default class App extends React.Component {
  render(){
    list = this.props.posts.map((element) => {
      return (
        <article key={element.id}>
          <h3>{element.head}</h3>
          <p>{element.massage}</p>
        </article>
      );
    });

    return (
      <main>
        <h1>Blog</h1>
        <a href="/new">New Blog</a>
        {list}
      </main>
    );
  }

}
