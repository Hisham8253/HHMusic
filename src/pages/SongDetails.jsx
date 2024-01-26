import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import {DetailsHeader, Error, Loader, RelatedSongs} from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { useGetSongDetailsQuery } from '../redux/Services/shazamCore';
import {useGetSongRelatedQuery  } from '../redux/Services/shazamCore'
const SongDetails = () => {
    const dispatch = useDispatch();
    const{songid} = useParams();
    const {activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: songData , isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({songid})
    const { data , isFetching : isFetchingRelatedSongs, error} = useGetSongRelatedQuery({songid})
    const apiSong=data?.tracks
    const handlePauseClick = ()=> {
        dispatch (playPause(false));
    
      };
      const handlePlayClick = (song , i)=> {
        dispatch (setActiveSong({ song , apiSong, i }));
        dispatch (playPause(true));
      };
    
    if(isFetchingRelatedSongs || isFetchingSongDetails ) return(
        <Loader title="Searching Song Details "/>
    )
    if (error) return <Error />
    return (
    <div className="flex flex-col ">
       { <DetailsHeader artistId="" 
       songData={songData} 
     /> 
     }
       
       <div className=" mb-10 ">
            <h2 className="text-white text-3xl font-bold ">Lyrics : </h2>
             <div className="mt-5 "> 
                {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => (
                <p className="text-gray-400 text-base my-1 ">{line}</p>
                )): <p className="text-gray-400 text-base my-1 ">Sorry , no lyrics found !</p>}
            </div>
       </div>
       <RelatedSongs 
            apiSong={apiSong}
            isPlaying={ isPlaying }
            activeSong={activeSong }
            handLePauseClick={handlePauseClick}
            handLePlayClick={handlePlayClick }
       />
    </div>
    )
}

export default SongDetails;

  