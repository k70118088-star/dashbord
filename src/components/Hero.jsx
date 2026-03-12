import React, { useState } from 'react'

import Table from './common/Table'
import Header from './common/Header'

const Hero = ({search} ) => {
  
 const [filters, setFilters] = useState({});

  return (
    <div>
     <Header setFilters={setFilters} />
     <Table  filters={filters} search={search}/>
    </div>
  )
}

export default Hero