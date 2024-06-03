import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white" style={{ backgroundImage: 'url("/hero.png")' ,backgroundSize: 'cover' }}>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ">
    <div className="mx-auto max-w-6xl text-center">
      <h1
        className="bg-white bg-clip-text text-6xl font-extrabold text-transparent sm:text-6xl"
      >
        Secure Your Password.

        <span className="sm:block"> In a Click. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      "Unlock the Power of Security: Generate Encrypted Text Instantly with Our Next.js Blowfish App!"
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          + Secure Message
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero