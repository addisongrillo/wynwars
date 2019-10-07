import React, { Component } from 'react'
import axios from 'axios';

class Fetcher extends Component {
    state = {info:[],
            loading:true}
    componentDidMount(){
        axios.get(this.props.url)
            .then(res => {
            this.setState({ info: res.data,
                            loading:false })
            })
    }
    render(){
        return(
            <>
            {this.state.loading === true ? 
                <p className="results">loading...</p>  :
                this.props.data === "homeworld" &&
                <div className="results">{this.props.label}: {this.state.info.name}</div>
                }
                {this.props.data === "films" &&
                <div className="results">{this.state.info.title}</div>
        }

            </>
        )
    }
}

export default Fetcher