import apiclient from '../utils/api-client';

export function getSuggestionsAPI(serach){
    return apiclient.get(`/products/suggestions?search=${serach}`);
}