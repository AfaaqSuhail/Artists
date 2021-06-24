import { environment } from '../../../environments/environment.prod';
export const EndPoints = {
    getArtist: (name) => `${environment.baseURL}artists/${name}`,
    getArtistEvent: (artistName) => `${environment.baseURL}artists/${artistName}/events`,
    BASIC_ARTIST_EVENT: '/artist/event',
};

