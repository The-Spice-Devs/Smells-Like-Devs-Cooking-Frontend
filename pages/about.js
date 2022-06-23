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
        <h2 className="text-3xl font-bold underline"> Ella Svete </h2>
        <p > Neat Cool Stuff about Ella. Have some Cat ipsum for placeholder: As lick i the shoes yowling nonstop the whole night but making sure that fluff gets into the owner&apos;s eyes, for swat at dog, for purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow , yet somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock. Destroy dog play time, scamper, mice and i heard this rumor where the humans are our owners, pfft, what do they know?! leave dead animals as gifts. </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/EllaSvete">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/ellasvete/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Dwight Lindquist </h2>
        <p > Neat Cool Stuff about Dwight. Have some Cat ipsum for placeholder: Make meme, make cute face attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what&apos;s your problem? i meant to do that now i shall wash myself intently scratch and have secret plans yet i&apos;m bored inside, let me out i&apos;m lonely outside, let me in i can&apos;t make up my mind whether to go in or out, guess i&apos;ll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! dismember a mouse and then regurgitate parts of it on the family room floor. Hunt by meowing loudly at 5am next to human slave food dispenser sit and stare yet i do no work yet get food, shelter, and lots of stuff just like man who lives with us. </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/dlindqu3">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/dwight-lindquist-a9a0b6b4/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Michelle Salazar </h2>
        <p > Neat Cool Stuff about Mish. Have some Cat ipsum for placeholder: Bird bird bird bird bird bird human why take bird out i could have eaten that pet me pet me don&apos;t pet me. Catty ipsum kitty time slap kitten brother with paw but eat my own ears. Bird bird bird bird bird bird human why take bird out i could have eaten that ptracy, for i rule on my back you rub my tummy i bite you hard scratch so owner bleeds destroy the blinds but catching very fast laser pointer. Flex claws on the human&apos;s belly and purr like a lawnmower poop in the plant pot. </p>
        <div>
          <button className="border border-violet-500 bg-violet-300 mx-3" href="https://github.com/MISalz">GitHub Profile</button>
          <button className="border border-violet-500 bg-violet-300 mx-3 my-5" href="https://www.linkedin.com/in/michellesalazar010/" >LinkedIn Profile</button>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-3 gap-4 p-8 mx-auto my-4 text-center bg-violet-200 border-2 border-violet-400 rounded-lg text-md gap-x-8">
        <h2 className="text-3xl font-bold underline"> Thomas Basham </h2>
        <p > Neat Cool Stuff about Tommy. Have some Cat ipsum for placeholder: Pushed the mug off the table i cry and cry and cry unless you pet me, and then maybe i cry just for fun for i see a bird i stare at it i meow at it i do a wiggle come here birdy sleep in the bathroom sink nya nya nyan but bite nose of your human. Flop over eat the rubberband or chase laser your pillow is now my pet bed, for tickle my belly at your own peril i will pester for food when you&apos;re in the kitchen even if it&apos;s salad . Meow furball roll roll roll jump off balcony, onto stranger&apos;s head stare at imaginary bug. Push your water glass on the floor ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss stare at owner accusingly </p>
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

