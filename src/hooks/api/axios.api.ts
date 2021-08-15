import axios from 'axios'

const useAxios = (baseUrl: string, headers: any) => {
    return axios.create({
        baseURL: baseUrl,
    })
}

export { useAxios }