import axios from 'axios';
const KEY = 'AIzaSyAHeNCI8Lcn-dJ5ywvOmiHq_sCqBqNgzTI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
})