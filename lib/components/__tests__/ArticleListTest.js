import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import ArticleList from '../ArticleList';

import { shallow } from 'enzyme';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a',
        title: 'a',
        date: 'a',
        body: 'a',
      },
      b: {
        id: 'b',
        title: 'b',
        date: 'b',
        body: 'b',
      },
    },
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList articles={testProps.articles} />);
    console.log(wrapper.children());
    expect(wrapper.children().length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
