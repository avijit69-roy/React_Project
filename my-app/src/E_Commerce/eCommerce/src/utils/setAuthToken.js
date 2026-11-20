import apiclient from '../utils/api-client';

export default function setAuthToken(token) {
    if (token) {
        apiclient.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete apiclient.defaults.headers.common['x-auth-token'];
    }
}