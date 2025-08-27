'use client'

import CustomButtton from "./CustomButtton"


const Hero = () => {
const handleScroll = () => {

}

  return (
    <div >
      <div className="flex-1 pt-36 padding-x">
        <h1 >
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p >
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButtton 
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}


        
        />

      </div>
    </div>
  )
}

export default Hero