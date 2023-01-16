import axios from "axios";

export default async function fetch({ url = '', method = '', data = '', type = '' }) {
  const request = {
    url,
    method
  }
  if (method.toLowerCase() === 'post' && type === 'form') {
    request.data = data
  } else if (method.toLowerCase() === 'post') {
    request.data = JSON.stringify(data)
    request.headers = {'Content-Type': 'application/json'}
  } else if (method.toLowerCase() === 'get') {
    request.params = data
  }

  return new Promise((resolve, reject) => {
    axios(request).then(resp => {
      resolve(resp)
    })
    .catch(error => {
      switch (error.response.status) {
        case 401: 
          console.log('登录失效，请重新登录')
          break
        case 403:
          break
        default: 
          console.log(error.reponse.data)  
      }
      reject(error)
    })
  }) 
}
