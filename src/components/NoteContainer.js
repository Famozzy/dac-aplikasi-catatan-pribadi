import React from 'react';
import NoteList from './NoteList';

export default function NoteContainer(props) {
	const activeNotes = props.notes.filter(note => !note.archived);
	const archivedNotes = props.notes.filter(note => note.archived);

	return (
		<div className="note-container">
			<h2>Catatan aktif</h2>
			<NoteList {...props} notes={activeNotes} />
			<h2>Arsip</h2>
			<NoteList {...props} notes={archivedNotes} />
		</div>
	);
}
