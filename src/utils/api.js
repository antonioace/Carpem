import axios from 'axios';


export default  axios.create({
  baseURL: 'https://reqres.in/api/',
  transformResponse: [
    function (data) {
      const _data = JSON.parse(data);
      return data;
    },
  ],
  headers: {},
});

