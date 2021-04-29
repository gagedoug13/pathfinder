import React, { Component } from 'react'
import Grid from './Grid'

class GridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
      }
    
    componentDidMount() {
        const nodes = []
        for (let row=0; row<28; row++) {
            nodes.push(0)
            for (let col=0; col<35; col++) {
                nodes.push(0)
            }
        }
        this.setState({
            nodes: nodes
        })
    }
    counter = 0
   render() {
       return this.state.nodes.map(x => {
        this.counter++
        return  (
            <div className='gridContainer'>
                <Grid counter={this.counter} nodes={this.state.nodes}/>
            </div>
        )
    })
   }

}

export default GridContainer;