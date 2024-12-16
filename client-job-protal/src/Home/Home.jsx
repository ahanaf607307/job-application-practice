import React from 'react'
import Banner from '../Pages/Banner/Banner'
import HotJob from '../Pages/HotJob/HotJob'

function Home() {
  return (
    <div >
      <section>
        <Banner/>
      </section>
     <section className='border p-4 max-w-7xl mx-auto flex-1'>
       <HotJob/>
     </section>
    </div>
  )
}

export default Home
