import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const ArticleList = ({ articles }) => (
  <div>
    {Object.values(articles).map(article => <Article key={article.id} article={article} />)}
  </div>
);

export default ArticleList;
