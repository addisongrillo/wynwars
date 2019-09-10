import React, { Component } from 'react'
import axios from 'axios';

class Fetcher extends Component {
    state = {info:[]}
    componentDidMount(){
        axios.get(this.props.url)
            .then(res => {
            this.setState({ info: res.data })
            })
    }
    render(){
        return(
            <>
            {this.props.data === "name" &&
            <div className="results">{this.props.label}: {this.state.info.name}</div>
            }
            </>
        )
    }
}

export default Fetcher