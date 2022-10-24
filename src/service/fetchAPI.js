async function handlingResponseStatus(url = '', filter = {}) {
  const response = await fetch(url, filter)

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'))
}

export function fetchAll() {
  return handlingResponseStatus(`https://testbackend.nc-one.com/image`)
}
