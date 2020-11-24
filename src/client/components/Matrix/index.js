import React from 'react';
import classnames from 'classnames';

import './index.scss';
import { templates } from '../../structures/templates';
import getStringNotes from '../../structures/utils/getStringNotes';
import { getScale } from '../../structures/scales';
import { getLabelByNote } from '../../structures/notes';

const Matrix = ({ templateId, tunning, scale }) => {
  const { strings } = templates[templateId];
  const { frets } = templates[templateId];
  const availableScaleNotes = scale && getScale(scale.noteId, scale.scaleId);
  return (
    <div className={classnames(
      'matrix',
      `matrix__${templateId}`,
    )}
    >
      <div className="matrix__tunning">
        {
          tunning.map((string) => {
            const stringNotes = getStringNotes(string, frets, 10);
            return (
              <div className={classnames(
                'matrix__tunning-note',
                { 'matrix__tunning--six': strings === 6 },
                { 'matrix__tunning-note--available': availableScaleNotes.includes(stringNotes[0]) },
                { 'matrix__tunning-note--tonic': getLabelByNote(scale.noteId) === stringNotes[0] },
              )}
              >
                <span>{stringNotes[0]}</span>
              </div>
            );
          })
        }
      </div>
      {
        tunning.map((string, i) => {
          const stringNotes = getStringNotes(string, frets, 11);
          return (
            <div className={classnames(
              'matrix__string',
              { 'matrix__string--six': strings === 6 },
              `matrix__string-${i + 1}`,
            )}
            >
              {
                stringNotes.map((note) => (
                  <div
                    id={note}
                    className={classnames(
                      'matrix__string-note',
                      { 'matrix__string-note--available': availableScaleNotes.includes(note) },
                      { 'matrix__string-note--tonic': note === availableScaleNotes[0] },
                    )}
                  >
                    <span>{note}</span>
                  </div>
                ))
              }
            </div>
          );
        })
      }
    </div>
  );
};

export default Matrix;
