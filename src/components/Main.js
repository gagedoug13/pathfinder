import React from 'react'
import GridContainer from './GridContainer'

export default function Main(props) {
    return (
        <div className='main'>
            <GridContainer nodes={props.nodes}/>
        </div>
    )
}
