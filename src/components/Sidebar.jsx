import {useState , useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {RiCloseLine } from 'react-icons/ri'
import { logo , HHlogo } from '../assets'
import { links } from '../assets/constants'
import { HiOutlineMenu } from 'react-icons/hi'
import { AuthContext } from '../store/context'
const NavLinks = ({ handleClick  })=> 
      { const {user} = useContext(AuthContext)  
    return (
      <div className="mt-1">
          <h1 className="flex flex-row justify-start items-center my-8 text-2xl font-bold text-white">
           Hello {user ? user.displayName : 'Login'}
          </h1>
          <div className="mt-5">
         {links.map((item) => (
          <NavLink 
          key={item.name}
          to= {item.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick= {() => handleClick && handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </NavLink>
        ))}
        </div>
      </div>
)
         }
const Sidebar = () => {
  const [mobileMenuOpen , setmobileMenuOpen] = useState(false);
  return(
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#360a03]  ">
      <img src={HHlogo} alt="logo" className="w-full mt-10 h-20 w-100 object-cover" />
      <NavLinks />
    </div>
    
    <div className=" absolute md:hidden block top-6 right-3  ">
      {mobileMenuOpen ? (
        <RiCloseLine className="w-6 h-6 text-white mr-2 " onClick={() => setmobileMenuOpen(false)}/>
      ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2 " onClick={() => setmobileMenuOpen(true)} /> }
    </div>
    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-ti from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
      <img src={HHlogo} alt="logo" className="w-full mt-10 h-40 w-30 object-cover" />
      <NavLinks handleClick={() => setmobileMenuOpen(false)}  />
    </div>
    </>
  )
}

export default Sidebar;
