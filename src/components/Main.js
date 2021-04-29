import React from 'react'
import FullGrid from './FullGrid'
import Nav from './Nav'
import NodeOptions from './NodeOptions'

export default function Main(props) {
    return (
        <div className='main'>
            <Nav />
            <NodeOptions />
            <FullGrid />
        </div>
    )
}
