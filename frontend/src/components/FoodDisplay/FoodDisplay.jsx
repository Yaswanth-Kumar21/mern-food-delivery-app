import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({ category, searchQuery, setSearchQuery }) => {

  const { food_list } = useContext(StoreContext)

  const filteredList = food_list.filter((item) => {
    const matchesCategory = category === 'All' || category === item.category
    const matchesSearch = item.name.toLowerCase().includes((searchQuery || '').toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='food-display' id='food-display'>
      <div className='food-display-header'>
        <h3>Top Dishes near you</h3>
        <div className='food-search-bar'>
          <input
            type='text'
            placeholder='Search for dishes...'
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className='food-search-clear' onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
      </div>
      {filteredList.length === 0 ? (
        <p className='food-no-results'>No dishes found for "{searchQuery}"</p>
      ) : (
        <div className='food-display-list'>
          {filteredList.map((item, index) => (
            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FoodDisplay
