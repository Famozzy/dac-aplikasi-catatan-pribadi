import React, { Component } from 'react';

export default class NoteCreateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			characterCount: 50,
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onBodyChageHandler = this.onBodyChageHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onTitleChangeHandler(e) {
		const limitCharacter = 50;
		if (e.target.value.length > limitCharacter) return;
		this.setState({
			title: e.target.value,
			characterCount: limitCharacter - e.target.value.length,
		});
	}

	onBodyChageHandler(e) {
		this.setState({ body: e.target.value });
	}

	onSubmitHandler(e) {
		e.preventDefault();
		const { title, body } = this.state;
		if (!title.length || !body.length) return;

		this.props.addNote({ title, body });
		this.setState({ title: '', body: '', characterCount: 50 });
	}

	render() {
		const { title, body, characterCount } = this.state;
		return (
			<div className="note-create-form">
				<span>Sisa karakter: {characterCount}</span>
				<form className="form" onSubmit={this.onSubmitHandler}>
					<input
						type="text"
						name="title"
						id="title"
						value={title}
						onChange={this.onTitleChangeHandler}
						placeholder="Judul catatan..."
					/>
					<textarea
						name="body"
						id="body"
						value={body}
						onChange={this.onBodyChageHandler}
						placeholder="Isi catatan..."
					/>
					<input
						type="submit"
						value="Buat"
						disabled={!title.length || !body.length}
					/>
				</form>
			</div>
		);
	}
}
