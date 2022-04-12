import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Body from './components/Body';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

export default function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	const apiCall = async () => {
		const url = 'https://evening-springs-70151.herokuapp.com/';
		const resp = await fetch(url);
		const data = await resp.json();
		console.log(data);
		setLoading(false);
		setData(data);
	};

	return (
		<Container fluid>
			<div class='bg'></div>
			<div class='bg bg2'></div>
			<div class='bg bg3'></div>
			{!loading && <Header apiCall={apiCall} loading={loading} />}
			<div>{loading && <Welcome />}</div>
			{loading && <Header apiCall={apiCall} loading={loading} />}
			<Body data={data} />
			<Footer />
		</Container>
	);
}
