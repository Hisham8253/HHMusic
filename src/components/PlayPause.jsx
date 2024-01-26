import { FaPauseCircle , FaPlayCircle  } from 'react-icons/fa'

const PlayPause = ({isPlaying, activeSong , song ,handLePause, handLePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle 
    size={35}
    className="text-gray-300"
    onClick ={handLePause}  
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick ={handLePlay}  
  />
));

export default PlayPause;
