import Header from '../components/Header';
import Image from 'next/image';
import banner from '../assets/bannerThree.jpeg'

export default function About() {
  return (
    <>
      <Header />
      {/* <div className='w-full h-36'>
      <Image src={banner} alt='The Spice Devs!' layout='fill'/>
      </div> */}
      <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '25vw' }}>
      <h1 className="text-8xl font-Rampart text-center" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Yhe SPice Devs"
          style={{opacity:'0.7', zIndex: '-1'}}
        />
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Ella Svete 🐈 </h2>
        <p > Neat Cool Stuff about Ella. Have some Cat ipsum for placeholder: As lick i the shoes yowling nonstop the whole night but making sure that fluff gets into the owner&apos;s eyes, for swat at dog, for purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow , yet somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock. Destroy dog play time, scamper, mice and i heard this rumor where the humans are our owners, pfft, what do they know?! leave dead animals as gifts. </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/EllaSvete">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/ellasvete/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Dwight Lindquist </h2>
        <p > I am an aspiring full-stack developer based out of Atlanta, GA. I have experience in the MERN stack, Flask, and Django. Outside of coding, I enjoy 🧑‍🍳ing, ✈️ing, and reading 🕵️‍♂️ or 👽 novels. Cheers. </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/dlindqu3">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/dwight-lindquist-a9a0b6b4/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Michelle Salazar </h2>
        <p > Michelle Salazar, Full stack Software Developer with background in Medical Reimbursement and  Business Analytics.  Food 🍕 Connoisseur, Professional Child 🤠 Wrangler, information/education 🧽 Sponge, TrueCrime 🕵️‍♀️ addict.
        Sometimes, it takes me all day to get nothing done. I like my bed more than I like most people. I am half princess, half ninja. Creativity is my second language.
 </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/MISalz">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/michellesalazar010/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Thomas Basham </h2>
        <p > 👽👽greetings👽👽 I am A full-stack dev based in the Seattle area. I spend most of my free time creating things! I like producing 🎶music🎵, making digital 🎨art🖌️, 🌱growing plants🪴 and spending time 🏔️outdoors🌄 to get my mind right🧘‍♂️. Before learning software development I was in the Army, and when I was not a soldier, I was a 🛠️carpenter🪚.
 </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/Thomas-Basham">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/thomas-basham/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Eden Brekke </h2>
        <p > Hello! Excited to have you here! I&apos;m Eden, and I&apos;m just a Baby Software Developer, and a trained Virology Research Scientist. I love video games and art of all sorts, including but not limited to drawing, cooking, and crafting. I&apos;m also always interested in trying new activities, some of my favorites that I&apos;ve tried are skateboarding, rock climbing and aerial yoga!  Finally I think a large part of myself is my love for animals, I have two cats and I&apos;m always eager to meet and make new animal friends. I hope you enjoyed the blog we&apos;ve created for you!</p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/eden-brekke">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/eden-brekke/" >LinkedIn Profile</button>
        </div>
      </div>
    </>
  )
}

