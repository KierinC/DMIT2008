import {BASE_URL} from './base'

const getSpaceCraft = (id) => {
    return fetch(`${BASE_URL}/config/spacecraft/${id}/`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            return data
        })
}

export { getSpaceCraft }
