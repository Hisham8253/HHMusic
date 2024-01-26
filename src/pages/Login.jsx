import react from 'react'
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();
    const handleLogin =(e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate ('/home')
            alert('Logged In Succesfully')
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className=" min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 bg-gradient-to-br from-black to-[#991e0b]" >
          <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md ">
            <h1 className="font-bold text-center text-2xl mb-5 text-white">Login</h1>  
            <div className="bg-grey-500 shadow-lg --tw-shadow: 0 37px 51px -14px w-full rounded-lg divide-y divide-gray-200">
             <form onSubmit={handleLogin} >
              <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                <input type="email" placeholder="Email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                <input type="password" placeholder="Password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit"  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span className="inline-block mr-2">Login</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <div className=" px-5 py-7"> 
                <label className="mt-5 font-semibold text-sm text-white pb-1 block text-center" >Don't You Have A HHmusic Account  </label>
                   <button onClick={()=> {navigate('/sign-up')}} className="focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                       <span className="inline-block mr-2">SignUp</span>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                      </button>
               </div>
              </div>
              </form>
            </div>
          </div>
        </div>
          )
}
export default Login;