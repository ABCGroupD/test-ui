import axios from 'axios'

export const saveProfile = (profile) => {
    return axios
        .post(`/profiles/profile`, profile, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(e => {
            console.log(e)
        })
}

export const getProfile = async (assetName) => {
    return await axios
        .get(`/profiles/asset/${assetName}`)
        .then(res => {return res.data})
        .catch(e => {
            console.log(e)
        })
}
