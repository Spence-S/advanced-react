export default class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  static mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles() {
    return this.constructor.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.constructor.mapIntoObject(this.rawData.authors);
  }
}
