import React ,{useState , useEffect} from 'react'

// import Components
import Logo from '../assets/img/logo.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';
import { Link } from 'react-scroll';
// import Brands from '../components/Brands';

const Header = () => {
    const [bg,setbg] = useState(false);
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            return window.scrollY > 50 ? setbg(true): setbg(false);
        });
    });
  return (
    <header className={`${bg ? 'bg-tertiary h-20':'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300` }>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        
        <Link to="#">
            <img src={Logo} alt=""className='h-[80px]' />
        </Link>
        <div className="hidden lg:block">
            <Nav/>
        </div>

        {/* socials */}
        <div className="hidden lg:block">
            <Socials/>
        </div>
        <div className="lg:hidden">
            <NavMobile/>
        </div>
      </div>
    </header>
  );
}

export default Header
