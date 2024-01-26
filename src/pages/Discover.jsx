import { useDispatch, useSelector } from 'react-redux';
import {Error, Loader, SongCard } from '../components';
import {genres} from "../assets/constants";
import {  useGetTopChartsQuery } from '../redux/Services/shazamCore';


const Discover = () => {
    const dispatch = useDispatch() ;
    const {activeSong, isPlaying ,} =useSelector((state) => state.player );
    const {data, isFetching, error} = useGetTopChartsQuery();

    if(isFetching) return <Loader title= "Loading Songs..." />;
    if (error) return <Error />
    const apiSong = data?.tracks;
    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
      
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {apiSong?.map((song, i)=> (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        i={i}
                        apiSong={apiSong}
                    />
                ))}
            </div>
        </div>
    )
}
export default Discover;
