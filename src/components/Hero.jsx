import React, { useState } from 'react'

import Table from './common/Table'
import Header from './common/Header'

const Hero = ({search} ) => {
  
 const [filters, setFilters] = useState({});

  return (
    <div className=' overflow-auto w-full'>
     <Header setFilters={setFilters} />
     <div className='overflow-auto'>
     <Table  filters={filters} search={search}/>
     </div>
    </div>
  )
}

export default Hero