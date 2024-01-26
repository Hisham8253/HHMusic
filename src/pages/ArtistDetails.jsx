import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux'
import {DetailsHeader, Error, Loader, RelatedSongs} from '../components';
import { useGetArtistDetailsQuery , useGetArtistTopSongsQuery} from '../redux/Services/shazamCore';

const ArtistDetails = () => {
    const{id: artistId } = useParams();
    const {activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: artistData , isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({artistId})
    const {data : artistsongs } = useGetArtistTopSongsQuery({artistId})
    const artSongs = artistsongs?.data ;
    if(isFetchingArtistDetails) return(
        <Loader title="Loading Artist Details "/>
    )
    if (error) return <Error />
    return (
    <div className="flex flex-col ">
       { <DetailsHeader 
       artistId={artistId} 
       artistData={artistData} 
     /> 
     }
        <RelatedSongs 
          apiSong={artSongs}
          artistId={artistId}
          isPlaying={ isPlaying }
          activeSong={activeSong }
       />  
    </div>
    )
}

export default ArtistDetails;

