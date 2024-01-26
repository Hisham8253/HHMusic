import {useState , useEffect } from 'react';
import axios from 'axios'
import{useSelector  } from 'react-redux'
import {Error , Loader, SongCard } from '../components'

const AroundYou = () => {
    const [country , setCountry] = useState('');
    const [loading , setLoading] = useState(true);
    const {activeSong , isPlaying } = useSelector((state) => state.player);
    console.log(country)
    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v1?apiKey=at_jTvFRalGfSHn2okVYKo47Lezt4y4X')
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[country])
    return (
    <div>


    </div>
);
}
export default AroundYou;
