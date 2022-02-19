import React from 'react';
import Image from 'next/image'
import logoTokenPie from '../imagenes/logo.png'
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'

const style = {

    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end` ,
  headerItem: `text-black px-4 font-bold text-[#c8cacd] hover:text-black cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}


const Header = () => {
    return ( 
    <div className={style.wrapper}> 
    
        <Link href="/">
            <div className= {style.logoContainer}>
                <Image src= {logoTokenPie} height={40} width={40} />
                <div className={style.logoText}>TOKEN PIE</div>
            </div>
        </Link>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch></AiOutlineSearch>
            </div>
            <input className={style.searchInput}
            placeholder= 'Busca tokens de restaurantes: mesas, descuentos, eventos, experiencias VIP, etc'></input>
        </div>
        <div className={style.headerItems}>
            {/* <Link href ="/topies/0x79BcC9822ee96f3Df0b184CA81694db0c0AdAC56">
            <div className={style.headerItem}> RESTAURANTES</div>
            </Link>
            <div className={style.headerItem}> HOTELES</div>
            <div className={style.headerItem}> RECURSOS</div> */}
           
            <nav aria-label="primary" class="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
  
            <div class="relative group">
            <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-center uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <div className={style.headerItem}> RESTAURANTES</div>
            </button>
            <div class="absolute z-10 hidden bg-grey-200 group-hover:block ">
          
          <div class="px-8 pt-2  bg-white bg-gray-100 ">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-1 ">
           
            <div className={style.headerItems}>
            <Link href ="/topies/0x79BcC9822ee96f3Df0b184CA81694db0c0AdAC56">
            <div className={style.headerItem}> La Bistroteca</div>
            </Link>
           </div> 

           <div className={style.headerItems}>
            <Link href ="/topies/0xA49236614cE50Ab7F16f68F6ef511F6bFf801E26">
            <div className={style.headerItem}> Alfredo's</div>
            </Link>
           </div> 
            
            </div>
             </div>
            </div>
             </div>  

             {/* Segundo elemento */}

             <div class="relative group">
            <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <div className={style.headerItem}> HOTELES</div>
            </button>
            <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
          
             <div class="px-8 pt-2 pb-4 bg-white bg-grey-200 shadow-lg">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> 
           
            <div className={style.headerItems}>
            <Link href ="/topies/0x79BcC9822ee96f3Df0b184CA81694db0c0AdAC56">
            <div className={style.headerItem}> La Zenia</div>
            </Link>
           </div> 
            
            </div>
             </div>
            </div>
            </div> 
  
  
</nav>


            {/* <div className={style.headerItem}> CREAR</div> */}
            <div className={style.headerIcon}><CgProfile></CgProfile></div>
            <div className={style.headerIcon}><MdOutlineAccountBalanceWallet></MdOutlineAccountBalanceWallet></div>
        </div>
    </div>
    )
}

export default Header