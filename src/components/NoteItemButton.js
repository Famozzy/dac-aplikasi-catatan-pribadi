import React from 'react';

export default function NoteItemButton({ isArchived, onDelete, onArchive }) {
	return (
		<div className="note-item__button">
			<button className="btn-delete" onClick={onDelete}>
				Hapus
			</button>
			<button className="btn-archive" onClick={onArchive}>
				{isArchived ? 'Pindahkan' : 'Arsipkan'}
			</button>
		</div>
	);
}
