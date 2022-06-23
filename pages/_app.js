import '../styles/globals.css';
import { FaPepperHot } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AuthProvider } from '../contexts/auth';
import Image from 'next/image'
import spicy from '../assets/SpicyChicken.png'


function MyApp({ Component, pageProps }) {

  return (
    <>   
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
          <footer className="w-full bg-amber-700 text-orange-50 flex justify-around">
            <div style={{display: 'flex', justifyContent: 'space-around'}} className="py-2 rounded-full">
            <Image src={spicy} alt="spicy chicken" width={200} height={50} className="rounded-full"/>
            <p className="text-2xl pt-20">&nbsp;&nbsp;&copy;2022</p>
            </div>
            <div className="text-center pt-10">
            <a style={{display: 'flex', justifyContent: 'space-around'}} href="https://github.com/The-Spice-Devs"><FaPepperHot />The Spice Devs GitHub</a>
            <a style={{display: 'flex', justifyContent: 'space-around'}} href="https://github.com/The-Spice-Devs/Smells-Like-Devs-Cooking-Frontend"> <BsGithub /> &nbsp;&nbsp;Smells Like Devs Cooking Front End Code </a>
            <a style={{display: 'flex', justifyContent: 'space-around'}} href="https://github.com/The-Spice-Devs/Smells-Like-Devs-Cooking-API"><BsGithub /> &nbsp;&nbsp;Smells Like Devs Cooking API Code </a>
            </div>
            <div className="flex pt-2">
              <p> Friends List: &nbsp;&nbsp;</p>
              <ul>
                <li>JB Tellez</li>
                <li>Chloe Nott</li>
                <li>Justin Hammerly</li>
                <li>Adam Owada</li>
                <li>Joseph Streifel</li>
                <li>Aaron Imbrock</li>
                <li>David Hecker</li>
              </ul>
            </div>
          </footer>
        </>
    )
}

export default MyApp
