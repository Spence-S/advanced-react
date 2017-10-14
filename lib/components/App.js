import React, { Component } from 'react';
import ArticleList from './ArticleList';
// import ArticleItem from './ArticleItem';

import DataApi from '../DataApi';
import { data } from '../testData.json';

const api = new DataApi(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }

  // lookup author
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
      </div>
    );
  }
}

export default App;