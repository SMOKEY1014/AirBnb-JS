import React from 'react'
import './SearchPage'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

const SearchPage = () => {
  return (
      <div className='searchPage'>
          <div className='searchPage_info'>
              <p>62 stays . 26 August to 30 August . 2 guests</p>
              <h1>Stays Nearby</h1>
              <Button variant='outline'>Cancellation Flexibility</Button>
              <Button variant='outline'>Type of Place</Button>
              <Button variant='outline'>Price</Button>
              <Button variant='outline'>Rooms and Beds</Button>
              <Button variant='outline'>More Filters</Button>
          </div>
          <SearchResult
                img='https://a0.muscache.com/im/pictures/miso/Hosting-16681534/original/3f2b05de-1334-4b91-aebe-5733fb3620cf.jpeg?im_w=960'
              location="Private room in center of London"
              title="Stay at this spacious Edwardian House"
              description="1 guest . 1 bed . 1,5 shared bathrooms . Wifi . Kitchen . Free Parking"
              star={4.73}
              price="$30/night"
          total="$117 total"/>
      </div>
  )
}

export default SearchPage