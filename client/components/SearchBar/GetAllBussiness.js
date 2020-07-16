import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBussiness} from '../../store/business/getBusiness'
import {NavLink} from 'react-router-dom'
import CategoryFilter from './CategoryFilter'

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
      <div>
        <CategoryFilter />
      </div>

      {businesses.map(query => (
        <div id="business_card" key={query.id}>
          <NavLink className="navlink" to={`/business/${query.id}`}>
            <h4>Name: {query.name}</h4>
          </NavLink>
          <img src={query.headerPhoto} />
          <h4>Description: {query.description}</h4>
        </div>
      ))}
    </div>
  )
}

export default GetAllBussiness
