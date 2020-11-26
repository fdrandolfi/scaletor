import React from 'react';

import './index.scss';

const data = [
  {
    id: 'gray',
    label: 'First note enabled in the selected scale.',
  },
  {
    id: 'orange',
    label: 'Note enabled on the selected scale.',
  },
  {
    id: 'black',
    label: 'Note disabled in the selected scale.',
  },
];

const NotesHistory = () => (
  <div className="notes-history">
    {
      data.map((item) => (
        <p className="notes-history__item">
          <span className={`item--${item.id}`}>N</span>
          {item.label}
        </p>
      ))
    }
  </div>
);

export default NotesHistory;
