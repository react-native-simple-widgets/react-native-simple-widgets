import axios, { Method } from "axios";
import * as queryString from "query-string";

export function defaultHeaders() {
    return {
        "content-type": "application/json",
        "accept": "application/json",
    };
}

export function httpRequest(endpoint = "", method = "GET", body = {}, params = {}, headers = {}) {
    return axios({
        url: endpoint,
        method: method as Method,
        data: body,
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpGet(endpoint = "", params = {}, headers = {}) {
    return axios.get(endpoint, {
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpPost(endpoint = "", body = {}, params = {}, headers = {}) {
    return axios.post(endpoint, body, {
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpPostForm(endpoint = "", fd, params = {}, headers = { "Content-Type": "multipart/form-data" }) {
    return axios.post(endpoint, fd, { // fd: FormData
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpPostUrlencoded(endpoint = "", body = {}, params = {}, headers = { "content-type": "application/x-www-form-urlencoded", "accept": "application/x-www-form-urlencoded" }) {
    return axios.post(endpoint, queryString.stringify(body), {
        params: params,
        headers: Object.assign({}, defaultHeaders(), headers),
    });
}

export function httpPut(endpoint = "", body = {}, params = {}, headers = {}) {
    return axios.put(endpoint, body, {
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpPutFormData(endpoint = "", fd, params = {}, headers = { "Content-Type": "multipart/form-data" }) {
    return axios.put(endpoint, fd, { // fd: FormData
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpDelete(endpoint = "", params = {}, headers = {}) {
    return axios.delete(endpoint, {
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpPatch(endpoint = "", body = {}, params = {}, headers = {}) {
    return axios.patch(endpoint, body, {
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}

export function httpHead(endpoint = "", params = {}, headers = {}) {
    return axios.head(endpoint, {
        params: params,
        headers: Object.assign(defaultHeaders(), headers),
    });
}
