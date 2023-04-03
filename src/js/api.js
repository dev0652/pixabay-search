// Axios
import axios from 'axios';

// Create PixabayApi class
export default class PixabayApi {
  constructor() {
    this.page = 1;
    this.query = '';
    this.searchParameters = {};
    this.totalHits = null;
    // this.cardHeight = null;
  }

  makeOptions() {
    return Object.entries(this.searchParameters)
      .map(element => `${element[0]}=${element[1]}`)
      .join('&');
  }

  async fetch() {
    const params = this.makeOptions();
    const URL = `?${params}&page=${this.page}&q=${this.query}`;

    return await axios.get(URL);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get q() {
    return this.query;
  }

  set q(newQuery) {
    this.query = newQuery;
  }
}