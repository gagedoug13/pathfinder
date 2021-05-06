import React, { Component } from 'react'
import Node from './Node'
// import FullGrid from './FullGrid'
// import Nav from './Nav'
// import NodeOptions from './NodeOptions'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
      }
    
    componentDidMount() {
        const nodes = []
        for (let row=0; row<30; row++) {
            const currentRow = []
            for (let col=0; col<20; col++) {
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col === 18,

                }
                currentRow.push(currentNode)
            }
            nodes.push(currentRow)
        }
        this.setState({
            nodes: nodes
        })
    }
    counter = 0
   render() {
       const nodes = this.state.nodes
        return  (
        <>
            <button onClick={() => this.dijkstra()}>visualize Dijkstra's algorithm</button>
            <div className='grid'>
                {nodes.map((row, rowId) => {
                    return (
                        <div className='nodesContainer'>
                            {row.map((node, nodeId) => {
                                const { isStart, isFinish } = node
                                return (
                                    <Node isStart={isStart} isFinish={isFinish}/>
                                )
                            })}
                        </div>
                    )
                })}
                <Node counter={this.counter} nodes={this.state.nodes}/>
            </div>
        </>
        )
   }

}

export default Main;


function dijkstra(grid, startNode, endNode) {
    if (!startNode || !endNode || startNode === endNode) {
        return false;
    }
}