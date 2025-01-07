import React from 'react'

import Appbar from '../components/Appbar'
import Search  from '../components/Search'

function Dashboard() {
  return (
    <div className='bg-white '>
        <Appbar/>
        <div className="pt-2">
            <Search/>

        </div>

      
    </div>
  )
}

export default Dashboard
