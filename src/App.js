import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		}
	}
	update(e) {
		this.setState({txt: e.target.value})
	}
	render() {
	    return (
	    	<div> 
    			<h1>{this.state.txt} </h1>
    			<Widget update={this.update.bind(this)} />
    			<Button>I <Heart /> React!</Button>
    			<br/>
    			<Title text="1234567"/>
	    	</div>
		)
	}
}

//children component
const Button = (props) => <button>{props.children}</button>

// nested properties
const Widget = (props) => <input type="text" onChange={props.update}/>

// validation
const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
	text(props, propName, component) {
		if(!(propName in props)) {
			return new Error('missing props')
		}
		if(props[propName].length < 6) {
			return new Error(`${propName} was too short`)
		}
	}
}

class Heart extends React.Component {
	render() {
		return <span>&hearts;</span>
	}
}

export default App