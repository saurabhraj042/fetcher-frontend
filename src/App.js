import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Body from './components/Body';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

class App extends Component {
	constructor(){
		super()
		this.state = {
			loading : true,
			data : []
		}
		this.apiCall = this.apiCall.bind(this)
	}
	
	async apiCall(){
		const url = "https://evening-springs-70151.herokuapp.com/"
		const resp = await fetch(url)
		const data = await resp.json()
		console.log(data)
		this.setState({
			loading : false,
			data : data
		})
	}
	
	render(){
		return (
			<Container fluid>
				<div class="bg"></div>
				<div class="bg bg2"></div>
				<div class="bg bg3"></div>
				{!this.state.loading && <Header apiCall={this.apiCall} loading={this.state.loading}/>}
				<div>{this.state.loading && <Welcome />}</div>
				{this.state.loading && <Header apiCall={this.apiCall} loading={this.state.loading}/>}
				<Body data={this.state.data}/>
				<Footer />
			</Container>
		)
	}
}
export default App