import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive }) {
	return (
		<div className="note-list">
			{notes.length ? (
				notes.map(note => (
					<NoteItem
						key={note.id}
						note={note}
						onDelete={onDelete}
						onArchive={onArchive}
					/>
				))
			) : (
				<h3>Tidak ada catatan</h3>
			)}
		</div>
	);
}
