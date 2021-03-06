import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBussiness} from '../../store/business/getBusiness'
import {NavLink} from 'react-router-dom'
import CategoryFilter from './CategoryFilter'
import FindBusinessesMap from '../Utility/FindBusinessesMap'

const GetAllBussiness = () => {
  const businesses = useSelector(state => state.businesses)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getAllBussiness())
    },
    [getAllBussiness]
  )

  return (
    <div id="business_card_container">
      <NavLink to="/map">Use Map View</NavLink>
      <div id="category_filter">
        <CategoryFilter />
      </div>
      <div id="business_map">
        <FindBusinessesMap />
      </div>

      <div id="all_businesses">
        {businesses.map(query => (
          <div id="business_card" key={query.id}>
            <NavLink className="navlink" to={`/business/${query.id}`}>
              <h2>{query.name}</h2>
            </NavLink>
            <img src={query.avatar} />
            <h4 className="description">{query.description}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetAllBussiness
