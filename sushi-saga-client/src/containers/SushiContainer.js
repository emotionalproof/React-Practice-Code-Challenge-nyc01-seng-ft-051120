import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  console.log("sushicontainer",props)
  
  

  return (
    
    <Fragment>
      <div className="belt">
      {props.sushis.map((piece, index) => (
        <Sushi key={index} sushi={piece}/>
        ))}
        <MoreButton 
          moreSushi={props.moreSushi}
        />
      </div>
    </Fragment>
    
  )
}

export default SushiContainer