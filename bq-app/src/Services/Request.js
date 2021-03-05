
export const RequestApi = (path, methodType, idUser) => {
  return fetch(`https://lab-api-bq.herokuapp.com/${path}`, {
    method: `${methodType}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${idUser}`
    },
    redirect: 'follow'
  }) 
};

export const RequestApiBody = (path, methodType, idUser, bodyContent) => {
    return fetch(`https://lab-api-bq.herokuapp.com/${path}`, {
      method: `${methodType}`,
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${idUser}`
      },
      redirect: 'follow',
      body: bodyContent
    })
  };

export const RequestApiUrl = (path, methodType, bodyContent) => {
  return fetch(`https://lab-api-bq.herokuapp.com/${path}`, {
    method: `${methodType}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow',
    body: bodyContent
  }) 
};