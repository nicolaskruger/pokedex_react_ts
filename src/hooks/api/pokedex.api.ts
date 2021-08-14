
import { config } from "../../config/webpack.config";
import { useAxios } from "./axios.api"


const usePokedexApi = () => {
    const axiosInstance = useAxios(config.serverUrl as string, {})

    return axiosInstance;
}

export { usePokedexApi }