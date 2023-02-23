import React, { Component } from 'react';

const Context = React.createContext();

class Provider extends Component {
	state = {
		loaded: false,
		error: false,
		endpoint: 'https://restcountries.com/v3.1/all?results=10',
		countries: []
	}

	componentDidMount() {
		fetch(this.state.endpoint)
			.then(res => {
				this.setState({
					loaded: true,
					countires: res.data
				})
				console.log(this.state.countries);
			})
			.catch(err => {
				this.setState({
					loaded: true,
					error: true
				})
				console.error(err);
			})
	}

	render() {
		const { state } = this;
		const { countries, loaded, error } = state;

		console.log(countries)

		return(
			<Context.Provider value={{
				loaded,
				error,
				countries
			}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export { Context, Provider }