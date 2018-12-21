import '@babel/polyfill';

import urlUtils from 'url';

const fetch = global.fetch;

let fetchErrorHandler = null;

const Component = async (options) => {
    let { withCredentials = true, url = '', method = 'GET', body, data, ...others } = options;
    let urlEntity = urlUtils.parse(url);
    if (typeof (data) == 'string'
        || (typeof (data) == 'object' && data != null)) {
        if (method.toUpperCase() == 'GET') {
            if (data instanceof global.URLSearchParams) {
                data = data.toString();
            }
            if (typeof (data) != 'string') {
                data = Object.keys(data).map((key) => {
                    let value = data[key];
                    if (typeof (value) == 'object') {
                        value = JSON.stringify(value);
                    }
                    return [
                        global.encodeURIComponent(key),
                        '=',
                        global.encodeURIComponent(value)
                    ].join('');
                }).join('&');
            }
            url = urlUtils.format({
                protocol: urlEntity.protocol,
                host: urlEntity.host,
                auth: urlEntity.auth,
                pathname: urlEntity.pathname,
                search: data ? '?' + data : null
            });
            body = null;
            data = null;
        }
        else {
            if (data instanceof global.FormData) {
                body = data;
                data = null;
            }
            else {
                if (data instanceof global.URLSearchParams) {
                    data = data.toString();
                }
                if (typeof (data) != 'string') {
                    data = Object.keys(data).map((key) => {
                        let value = data[key];
                        if (typeof (value) == 'object') {
                            value = JSON.stringify(value);
                        }
                        return [
                            global.encodeURIComponent(key),
                            '=',
                            global.encodeURIComponent(value)
                        ].join('');
                    }).join('&');
                }
                body = data;
                data = null;
            }
        }
    }
    try {
        const result = await fetch(url, {
            method: method,
            ...(
                typeof (body) == 'string'
                    || body instanceof global.URLSearchParams
                    || body instanceof global.FormData
                    || body instanceof global.Blob
                    || body instanceof global.File
                    ? (
                        {
                            body: body
                        }
                    )
                    : (
                        typeof (body) == 'object' && body != null
                            ? (
                                {
                                    body: JSON.stringify(body)
                                }
                            )
                            : (
                                {}
                            )
                    )
            ),
            ...others,
            ...(
                withCredentials
                    ? (
                        {
                            credentials: 'include'
                        }
                    )
                    : (
                        {}
                    )
            )
        });
        return result;
    }
    catch (e) {
        if (fetchErrorHandler) {
            await fetchErrorHandler(e);
        }
        else {
            throw e;
        }
    }
};

Component.fetchError = (handler) => {
    fetchErrorHandler = handler;
};

export default Component;
