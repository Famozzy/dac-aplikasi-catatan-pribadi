import React, { Component } from 'react';
import NoteCreateForm from './NoteCreateForm';
import NoteContainer from './NoteContainer';
import NoteSearchBar from './NoteSearchBar';

export default class NoteApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			filteredNotes: [],
			isSearching: false,
		};

		this.addNoteHandler = this.addNoteHandler.bind(this);
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.searchNoteHandler = this.searchNoteHandler.bind(this);
	}

	addNoteHandler(data) {
		const { notes } = this.state;
		const { title, body } = data;
		const newNote = {
			id: +new Date(),
			title,
			body,
			archived: false,
			createdAt: new Date().toISOString(),
		};
		this.setState({ notes: [...notes, newNote], isSearching: false });
	}

	onDeleteHandler(id) {
		const { notes } = this.state;
		const filteredNotes = notes.filter(note => note.id !== id);
		this.setState({ notes: filteredNotes, isSearching: false });
	}

	onArchiveHandler(id) {
		const { notes } = this.state;
		const noteIndex = notes.findIndex(note => note.id === id);
		notes[noteIndex].archived = !notes[noteIndex].archived;
		this.setState({ notes, isSearching: false });
	}

	searchNoteHandler(searchValue) {
		const { notes } = this.state;
		const isSearching = searchValue.length > 0;
		if (!searchValue) return this.setState({ filteredNotes: [], isSearching });

		const filteredNotes = notes.filter(note =>
			note.title.includes(searchValue)
		);

		this.setState({ filteredNotes, isSearching });
	}

	render() {
		const { notes, filteredNotes, isSearching } = this.state;
		return (
			<main className="app">
				<NoteCreateForm addNote={this.addNoteHandler} />
				<NoteSearchBar searchNote={this.searchNoteHandler} />
				<NoteContainer
					notes={isSearching ? filteredNotes : notes}
					onDelete={this.onDeleteHandler}
					onArchive={this.onArchiveHandler}
				/>
			</main>
		);
	}
}
