import {ArtistCard, Loader, Error } from '../components'
import {useGetTopChartsQuery } from '../redux/Services/shazamCore'

const TopArtists = () =>{ 
const {data, isFetching, error } =useGetTopChartsQuery()
const apiSongs=data?.tracks;
if (isFetching) return <Loader title=" Loading Top Charts " />
if (error) return <Error />
return(
<div className="flex flex-col ">
    <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 ">
        Top Artists
    </h2>
    <div className ="flex flex-wrap sm:justify-start justify-center gap-8">
    {apiSongs?.map((track) => (
        <ArtistCard
            key={track.key}
            track={track}
        />
    ))}
    </div>
</div>
)
}

export default TopArtists;