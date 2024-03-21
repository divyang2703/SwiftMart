import React from 'react'
import Cards from '../../../src/components/cards/Cards'

const ProductPage = ({content}) => {
    // console.log(props.props.products)
  return (
    <div>
     <Cards contents={content}/>
    </div>
  )
}

export default ProductPage
