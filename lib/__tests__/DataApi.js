import StateApi from '../state-api/lib';
import { data } from '../testData.json';

const store = new StateApi(data);

describe('StateApi', () => {
  it('Exposes articles as an object', () => {
    const { articles } = store.getState();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('Exposes authors as an object', () => {
    const { authors } = store.getState();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
