import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class CounterM extends Component {
 
    state = {

        counter : 0,
        data : []
    }

     handleCounter = ()=> {

        this.setState({
            ...this.state,
            counter: this.state.counter+1
        })


    }

    componentDidMount()
    {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=> {
            this.setState({
                ...this.state,
                data: y
            })
        })

    }

  render() {

    if(this.state.counter ==4)
    {

         throw("This is the error");
    }

    console.log(this.state.data);
    return (
      <div>
            {this.state.counter}


            <button onClick={this.handleCounter}>+</button>

      </div>
    )
  }
}
