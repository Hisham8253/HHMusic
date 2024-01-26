import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
           headers.set( 'X-RapidAPI-Key', 'aff6b274c8mshb7089345b39da44p1e573djsnc6d6b4505f73' );  //799faed7b4msh4e094a11e606f1cp17f7e5jsn867150e7cb30
        return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () =>  '/songs/list-recommendations?key=470699869'}) ,   
        getSongDetails: builder.query({query : ({songid}) => `/songs/get-details?key=${songid}`}),    
        getSongRelated : builder.query({query : ({songid}) => `/songs/list-recommendations?key=${songid}`}) ,
        getArtistDetails : builder.query({query : ({artistId}) => `/artists/get-details?id=${artistId}`}),
        getArtistTopSongs : builder.query({query : ({artistId}) => `/artists/get-top-songs?id=${artistId}`}),
        getSongsBySearch: builder.query({query : ({searchTerm}) => `/search?term=${searchTerm}`})
    }),
});

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopSongsQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;