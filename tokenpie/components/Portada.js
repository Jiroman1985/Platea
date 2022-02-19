import React from 'react'
import imagen_portada from '../imagenes/bistroteca.jpg'
import imagen_logo from '../imagenes/logo.png'

const style = {
    wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://www.revistainteriores.es/uploads/s1/16/40/05/1/lena-salva-lopez-1.jpeg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Portada = () => {
    return ( 
    <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Descubre la primera plataforma de NFTs para el sector de la restauración...
                        </div>
                        <div className= {style.description}>
                            TokenPie te permite ser parte de tu restaurante favorito comprando y vendiendo experiencias, recompensas y privilegios en forma de NFTs.
                        </div>
                        <div className={style.ctaContainer}>
                           <button className={style.accentedButton}>Descubre más</button> 
                           <button className={style.button}>Crear</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img 
                           className="rounded-t-lg"
                            src= "https://lh3.googleusercontent.com/p/AF1QipOuQbD_4acBXun04aCgePTWn1Gaa7tb1rx3DgR-=w1080-h608-p-no-v0"
                            alt="portada"
                            width={650}
                        ></img>
                    <div className={style.infoContainer}>
                        <img
                            className="h-[2.25rem] rounded-full"
                            src="https://cdn.sanity.io/images/1ziy7y9l/production/11f2537e8795f6e6fb5e1198e063b37bec993210-278x263.png"
                            alt=""
                        ></img>
                    <div className={style.author}>
                        <div className={style.name}>La Bistroteca</div>
                        <a
                            className="text-[#1868b7]"
                            href="https://thirdweb.com/rinkeby/0x1A77663C17A675ADF1d8Ded63fe7b4C49B2Eae02/nft-collection/0x79BcC9822ee96f3Df0b184CA81694db0c0AdAC56"
                        >Mesa para 4 comensales</a>    
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Portada  