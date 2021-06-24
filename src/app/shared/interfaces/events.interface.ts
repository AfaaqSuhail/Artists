export interface IEvent {
    id: string,
    artist_id: string,
    url: string,
    on_sale_datetime: string,
    datetime: string,
    description: string,
    venue: IVenue,
    offers: IOffer[],
    lineup: string[],
}

interface IVenue {
    name: string,
    latitude: string,
    longitude: string,
    city: string,
    region: string,
    country: string
}

interface IOffer {
    type: string,
    url: string,
    status: string
}