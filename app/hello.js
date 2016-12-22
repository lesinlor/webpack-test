import React, {Component} from 'react';
import config from './config.json';

class hello extends Component{
	render(){
		return(
			<div>
				{config.helloText}
			</div>
		);
	}
}

class Helloer extends Component{
    render() {
        return (
            <div>
        		{config.helloText}
            </div>
    	);
    }
}

export default Helloer;