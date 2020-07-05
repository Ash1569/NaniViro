import React from 'react'

import { Card } from 'reactstrap'

import './Footer.css'

const Footer = ({wrapped = true}) => (
  <div className={wrapped ? 'container' : ''}>
    <Card body className='mb-4 mt-4 bg-light footer'>
      <p className='m-0'>naniviro?! • by Matthew Zscherpel.</p>
    </Card>
  </div>
)

export default Footer
