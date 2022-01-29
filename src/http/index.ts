import axios, { AxiosRequestConfig } from 'axios'

const baseURL = "http://localhost:8848"

const request = ({ url, method, params }: AxiosRequestConfig) => {
    const config: AxiosRequestConfig = {
        baseURL,
        url,
        method,
        params,
        headers: {
            'token': localStorage.getItem('token') || ''
        }
    }
    if (method?.toLocaleLowerCase() === 'post') {
        delete config.params
        config.data = params;
    }
    return axios(config).then(res => res.data);
}

export type LoginParam = {
    username: string,
    password: string
}
export type LoginRes = {
    token: string
}

export const api_login = (params: LoginParam): Promise<LoginRes> => {
    return request({
        url: '/login',
        method: 'post',
        params
    })
}