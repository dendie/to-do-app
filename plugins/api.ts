// plugins/api.ts
import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your API base URL
  })

//   api.interceptors.request.use(
//     (config) => {
//       if (process.client) {
//         const token = localStorage.getItem('token')
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`; // Assuming the token is stored in localStorage as 'token'
//         }
//       }
//       return config;
//     },
//     (error) => {
//         return Promise.reject(error);   
  
//     }
//   );

  // Provide the Axios instance globally
  nuxtApp.provide('api', api)
})

// import axios from 'axios';
// export default defineNuxtPlugin((nuxtApp) => {
//     const api = $fetch.create({
//       baseURL: 'http://localhost:5000/api',
//       onRequest({ options }) {
//         if (process.client) {
//             const token = localStorage.getItem('token')
//             if (token) {
//                 options.headers = {
//                     ...options.headers,
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         }
//       },
//     })
//     nuxtApp.provide('api', api)
// })

// export default defineNuxtPlugin({
//   name: 'api',
//   setup() {
//     const api = $fetch.create({
//       baseURL: 'http://localhost:5000/api',
//       onRequest({ options }) {
//         if (process.client) {
//           const token = localStorage.getItem('token')
//           if (token) {
//             options.headers = {
//               ...options.headers,
//               Authorization: `Bearer ${token}`
//             }
//           }
//         }
//       },
//     })
//     return {
//       provide: {
//         api
//       }
//     }
//   }
// })

// plugins/api.ts
// import { defineNuxtPlugin } from '#app'
// import axios from 'axios'

// export default defineNuxtPlugin((nuxtApp) => {
//   const api = axios.create({
//     baseURL: 'http://localhost:5000/api',
//     onRequest({ options }) {
//       if (process.client) {
//         const token = localStorage.getItem('token')
//         if (token) {
//             options.headers = {
//                 ...options.headers,
//                 Authorization: `Bearer ${token}`
//             }
//         }
//       }
//     },
//   })

//   nuxtApp.provide('api', api)
// })

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Replace with your API base URL
//   // Add other configuration options as needed (e.g., headers, timeout)
// });

// api.interceptors.request.use(
//   (config) => {
//     if (process.client) {
//       const token = localStorage.getItem('token')
//       if (token) {
//         // config.headers = {
//         //   ...config.headers,
//         //   Authorization: `Bearer ${token}`
//         // }
//         config.headers.Authorization = `Bearer ${token}`; // Assuming the token is stored in localStorage as 'token'
//       }
//     }
//     return config;
//   },
//   (error) => {
//       return Promise.reject(error);   

//   }
// );

// export default api;
