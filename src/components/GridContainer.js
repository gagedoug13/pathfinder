import React, { Component } from 'react'
import Grid from './Grid'

class GridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
    componentDidMount() {
        
    }
   render() {
    return (
        <div className='gridContainer'>
            <Grid />
        </div>
    )
   }

}

export default GridContainer;