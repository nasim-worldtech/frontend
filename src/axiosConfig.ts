// import axios from 'axios';

// // Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     // Get the access token from wherever you store it
//     const accessToken =
//       'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjllNjQ3MmZjNGNjNTM5MThhZmQxZjcyNjAxZGI4NDNkNzlkZTMwZDVkOGJmZTdkN2E4ZDg2OWFlMjMwODk1NjAyZTNiODUyMTM3ZTJjY2QiLCJpYXQiOjE3MTQ4MjAzMzAuODE0NzcyLCJuYmYiOjE3MTQ4MjAzMzAuODE0Nzc2LCJleHAiOjE3NDYzNTYzMzAuODA1Njg2LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E0gytC9WEV2yDQCXEZFGAfXGhtjWIjAGdsrjccg6lDsvs08AFXvg2XoFkwkj683Tf_BG6z-OkbhVLJco4Gz_B-1Gs3W5Vz3ifCsJOBMgy7nIIoex042XnFJX2kKk_Ux-4VgL_D0ahadDUilyMWT2Od8wNqiKov3Cm_F2gTifKfgWtt3ElqxLuZaISWMQVOHUjPQtL3DroW299Z8BuHJ4d78xTw3KABdldhZsAFF-B8Wk9FZhbKQWlcN9SMjh5Nda2E8cnLqbnX4gak-y3z5dNbEEZ417naHPD-D7RVDXoKcyPkJJa7ihVEt5IlWMETQQZhtCOox5Cjcqljjq5DqiTo8kR-Us7KzNn2Gxf-6ppC1UZqGq7Z9y05WQZ6VQj3wiK6WiHrFyskze6SU0VEfLMRZdnWFjKAekioS_TyR8iY9ECs3UFvCVmpvO1zWFePuU5_Ei0ClG4hPaNcrlzFnb334LjP8kDLQUfjy93ci8tXvFxSfQnPCShaGtLRRVd__dDpj5-8HeM2O624vyUXDJGhL_sGD1URCsJm9bBYsZba2vXvn62fhlaUdl1Aq34wTSBC_RofhG3J9TpLwXQzmX8hj5JN5EIxUeayk76tq2T3rnWX8bmobqx955ZRsMXa8qMzPbmgWB-2WseVyYPiNuQPd-Roc3b_oiwYzO_laXok8'; // Replace with your actual token

//     // Set the Authorization header if accessToken is available
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );

// // You can also add a response interceptor if needed
// axios.interceptors.response.use(
//   function (response) {
//     // Do something with successful response data
//     return response;
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error);
//   },
// );

// // Set base URL
// axios.defaults.baseURL = 'http://192.168.0.109:8000/api';

// export default axios;
