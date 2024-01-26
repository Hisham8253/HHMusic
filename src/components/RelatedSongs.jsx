import SongBar from './SongBar';

const RelatedSongs = ({apiSong , isPlaying,  activeSong ,handLePauseClick ,handLePlayClick, artistId } ) => (
  <div className="flex flex-col ">
    <h1 className="font-bold text-3xl text-white ">Related Songs :</h1>
    <div className="mt-6 w-full flex flex-col  ">
      {apiSong?.map((song , i) => (
        <SongBar 
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handLePauseClick}
          handlePlayClick={handLePlayClick}
          
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
