import axios from 'axios' ;
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Error , Loader, SongCard } from '../components'
import {useGetSongsBySearchQuery } from '../redux/Services/shazamCore'

const Search = () =>{ 
  const {searchTerm} =useParams()
 
const {activeSong, isPlaying } = useSelector((state) => state.player )
const {data , isFetching, error } =useGetSongsBySearchQuery({searchTerm})
const apiSongs=data?.tracks;
 const songs = data?.tracks.hits?.map((song) => song.track) 
if (apiSongs === null) return <error />
if (isFetching) return <Loader title=" Loading Result " />
if (error) return <Error />
return(
<div className="flex flex-col ">
    <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 ">
        Showing Results For <span className="font-black ">{searchTerm}</span>
    </h2>
    <div className ="flex flex-wrap sm:justify-start justify-center gap-8">
    
    {songs?.map((song, i) => (
        <SongCard
        key={song.key}
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        apiSong={apiSongs}
        i={i}
        />
    ))}
    </div>
</div>
)
}

export default Search;