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
        for (let row=0; row<40; row++) {
            nodes.push(0)
            for (let col=0; col<32; col++) {
                nodes.push(0)
            }
        }
        this.setState({
            nodes: nodes
        })
    }
   render() {
    return this.state.nodes.map(x => {
        return  (

                <Grid nodes={this.state.nodes}/>
            
        )
    })
   }

}

export default GridContainer;