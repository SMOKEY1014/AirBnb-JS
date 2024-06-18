import React, {useEffect} from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { listListing } from '../Action/ListingAction'
import Banner from './layout/Banner'
import Card from './Card'

const Home = () => {
  const dispatch = useDispatch();
  const listingList = useSelector(state => state.listingList);
  const { loading, error, listings } = listingList;
  
  useEffect(() => { 
    dispatch(listListing());
  },[dispatch])

  return (
      <div className='home'>
      <Banner />
      {loading ? (<h2>Loading ...</h2>) : error ? (<h3>{error} </h3>) : (
        <div className='home_section'>
          {listings && listings.length > 0 ? (
  listings.map((listing) => (
    <Card
      src={listing.img}
      title={listing.title}
      description={listing.description}
      price={listing.price}
    />
  ))
) : (
  <p><i>No listings available</i></p>
)}
      </div>
      )}
      
        {/* <div className='home_section'>

              <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w720"
                    title='Online Experiences'
                  desciption='Unique activities we can do together, led by a world of hosts'
              />

              <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w960"
                    title='Online Stays'
                  desciption='Spaces that are more than just a space to sleep'
              />

              <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w720"
                    title='Entire Homes'
                  desciption='Comfortable private places, with room for friends or family'
              />
          </div>
          <div className='home_section'>
              <Card src="https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=480"
                    title='Online Experiences'
                  desciption='Superhosts with stunning view of the beachside in Sunny Bournemouth'
                  price='$130/night'
              />

              <Card src="https://a0.muscache.com/im/pictures/3b638d62-baa9-4bea-ba33-58c5ca4bbccb.jpg?im_w=480"
                    title='Online Stays'
                  desciption='Enjoy the amazing sights of London with this stunning penthouse'
                  price='$350/night'
              />

              <Card src="https://a0.muscache.com/im/pictures/3d5e4135-3a07-40b0-ad93-b6e7d19b1ef7.jpg?im_w=480"
                    title='Entire Homes'
                  desciption='Superhost with great amenities and a fabulous shopping complex nearby'
                  price='$70/night'
              />
          </div> */}
    </div>
  )
}

export default Home