import axios from 'axios'

export default store => next => action => {
  axios.get('api/article')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  next(action)
}