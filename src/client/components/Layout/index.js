import React, { useEffect, useState } from 'react';

import { templates, getTemplateList } from '../../structures/templates';
import { getTunning, getTunningList } from '../../structures/tunnings';
import { getNoteList } from '../../structures/notes';
import { getScaleList } from '../../structures/scales';

import './index.scss';
import Matrix from '../Matrix';
import Template from '../Template';
import Selector from '../Selector';
import SelectorDouble from '../SelectorDouble';
import NotesHistory from '../NotesHistory';

const Layout = () => {
  // Lists
  const noteList = getNoteList();
  const scaleList = getScaleList();
  const templateList = getTemplateList();

  // Scale & Note Hooks
  const defaultNote = noteList[0].value;
  const defaultScale = scaleList[0].value;
  const [note, setNote] = useState(defaultNote);
  const [scale, setScale] = useState(defaultScale);

  // Template Hooks
  const defaultTemplate = templateList[0].value;
  const [template, setTemplate] = useState(defaultTemplate);

  // Initial Tunning
  const templateStrings = templates[template].strings;
  const tunningOptions = getTunningList(templateStrings);
  const defaultTunning = getTunning(tunningOptions[0].value, templateStrings);
  const [tunning, setTunning] = useState(defaultTunning);

  useEffect(() => {
    // Update Tunning by Template
    const updateTemplateStrings = templates[template].strings;
    const updateTunningOptions = getTunningList(updateTemplateStrings);
    const updatedTunning = getTunning(updateTunningOptions[0].value, updateTemplateStrings);
    setTunning(updatedTunning);
  }, [template]);

  // Handles
  const handleNoteChange = (event) => {
    setNote(event.value);
  };

  const handleScaleChange = (event) => {
    setScale(event.value);
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.value);
  };

  const handleTunningChange = (event) => {
    setTunning(getTunning(event.value, templateStrings));
  };

  // Return
  return (
    <section className="layout">
      <div className="layout__top">
        <div className="layout__column-3">
          <Selector
            id="tunning"
            title="Tunning"
            options={tunningOptions}
            onChange={handleTunningChange}
            defaultValue={{ label: 'n', value: 'standard' }}
          />
        </div>
        <div className="layout__column-3">
          <SelectorDouble
            id="scale"
            title="Scale"
            optionsNote={noteList}
            optionsScale={scaleList}
            onChangeNote={handleNoteChange}
            onChangeScale={handleScaleChange}
          />
        </div>
        <div className="layout__column-3">
          <Selector
            id="template"
            title="Template"
            options={templateList}
            onChange={handleTemplateChange}
          />
        </div>
      </div>
      <div className="layout__bottom">
        <div className="layout__column-3">
          <NotesHistory />
        </div>
        <div className="layout__column-3" />
        <div className="layout__column-3" />
      </div>
      <div className="layout__center">
        <Matrix
          templateId={template}
          tunning={tunning}
          scale={{
            noteId: note,
            scaleId: scale,
          }}
        />
        <Template id={template} />
      </div>
    </section>
  );
};

export default Layout;
