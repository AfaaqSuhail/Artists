import { environment } from '../../../environments/environment.prod';
export const endPoints = {
    GET_ARTISTS: (name) => `${environment.baseURL}artists/${name}`,
    GET_ARTIST_EVENT: (artistName) => `${environment.baseURL}artists/${artistName}/events`,
};

