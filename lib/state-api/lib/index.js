export default class StateApi {
  constructor(rawData) {
    this.data = {
      articles: StateApi.mapIntoObject(rawData.articles),
      authors: StateApi.mapIntoObject(rawData.authors),
    };
  }

  static mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = authorId => this.data.authors[authorId];

  getState = () => this.data;
}
