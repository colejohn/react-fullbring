import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const SAMPLE_QUERY = gql`
	{
		users {
			name
		}
	}
`;

function App() {
	/* 
    GRAPHQL QUERY
  */
	const { loading, error, data } = useQuery(SAMPLE_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :( </p>;
	console.log(data);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>React GraphQL MongoDB and Apollo Boilerplate</p>
				<a
					className="App-link"
					href="http://localhost:4000/playground"
					target="_blank"
					rel="noopener noreferrer"
				>
					GraphQL Playground
				</a>

				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>

				<a
					className="App-link"
					href="https://www.apollographql.com/docs/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Apollo
				</a>
				<a
					className="App-link"
					href="https://docs.mongodb.com/manual/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn MongoDB
				</a>
				<a className="App-link" href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer">
					Learn GraphQL
				</a>
			</header>
		</div>
	);
}

export default App;
