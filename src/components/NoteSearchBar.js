import React, { Component } from 'react';

export default class NoteSearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
		};

		this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
	}

	onSearchChangeHandler(e) {
		this.setState({ searchValue: e.target.value });
		this.props.searchNote(e.target.value);
	}

	render() {
		return (
			<div className="note-search-bar">
				<h2>Cari Catatan</h2>
				<input
					type="text"
					placeholder="Cari catatan..."
					value={this.state.searchValue}
					onChange={this.onSearchChangeHandler}
				/>
			</div>
		);
	}
}
