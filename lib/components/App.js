import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  state = this.props.store.getState();

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return <ArticleList articles={this.state.articles} store={this.props.store} />;
  }
}

export default App;
