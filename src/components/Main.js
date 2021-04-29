import React from 'react'
import FullGrid from './FullGrid'
import Nav from './Nav'

export default function Main(props) {
    return (
        <div className='main'>
            <Nav />
            <FullGrid />
        </div>
    )
}
