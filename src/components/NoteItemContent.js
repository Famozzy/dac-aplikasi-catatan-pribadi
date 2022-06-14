import React from 'react';

export default function NoteItemContent({ title, date, body }) {
	return (
		<div className="note-item__content">
			<h3>{title.length > 20 ? title.slice(0, 18) + '...' : title}</h3>
			<span>{date}</span>
			<p>{body.length > 200 ? body.slice(0, 200) + '...' : body}</p>
		</div>
	);
}
