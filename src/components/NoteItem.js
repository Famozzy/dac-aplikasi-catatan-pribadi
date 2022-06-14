import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemButton from './NoteItemButton';
import { showFormatedDate } from '../utils';

export default function NoteItem({ note, onDelete, onArchive }) {
	return (
		<div className="note-item">
			<NoteItemContent
				title={note.title}
				date={showFormatedDate(note.createdAt)}
				body={note.body}
			/>
			<NoteItemButton
				isArchived={note.archived}
				onDelete={() => onDelete(note.id)}
				onArchive={() => onArchive(note.id)}
			/>
		</div>
	);
}
