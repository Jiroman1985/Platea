import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import Portada from '../components/Portada'
import {client} from '../lib/sanityClient'
import toast, {Toaster} from 'react-hot-toast'


const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const {address, connectWallet} = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(

      `Bienvenid@ de nuevo ${userName !== 'Sin nombre' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if(!address) return

    ;(async () => {
      const userDoc={
      _type: 'users',
      _id: address,
      userName: 'Sin nombre', 
      walletAddress: address,
    }
   
    const result = await client.createIfNotExists(userDoc)
    welcomeUser(result.userName)
    })()

  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      {address ? (
        <>
        <Header></Header>
        <Portada></Portada>
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
      <button
        className={style.button}
        onClick={() => connectWallet('injected')}
      > Conecta tu Wallet</button>
      <div className={style.details}>
        Necesitas tener Chrome <br></br> para poder usar la aplicación.
        </div>
        </div>
      )}
      </div>
  
  )
}