import react ,{useEffect, useState , useContext} from 'react'
import {getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './store/context';

const PageAuthentication = ()=>{
    const {user, setUser} = useContext(AuthContext)
    const auth = getAuth()
    const navigate = useNavigate()
    useEffect (()=> {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser)
            } else {
                setUser(null)
            }
        })
        return () => {
            unsubscribe();
        }
    }, []);
    useEffect(() => {
        if (user) {
            navigate('/home');
        }else {
            navigate('/login')
        }
    }, [user, navigate])
    return null;
}
export { PageAuthentication } ;