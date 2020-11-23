import React, { useState } from 'react';

import { templates, getTemplateList } from '../../structures/templates';
import { getTunning, getTunningList } from '../../structures/tunnings';
import getNoteList from '../../structures/notes';
import { getScaleList } from '../../structures/scales';

import './index.scss';
import Matrix from '../Matrix';
import Template from '../Template';
import Selector from '../Selector';
import SelectorDouble from '../SelectorDouble';

const Layout = () => {
  const noteOptions = getNoteList();
  const defaultNote = noteOptions[0].value;
  const [note, setNote] = useState(defaultNote);

  const scaleOptions = getScaleList();
  const defaultScale = scaleOptions[0].value;
  const [scale, setScale] = useState(defaultScale);

  const templateOptions = getTemplateList();
  const defaultTemplate = templateOptions[0].value;
  const [template, setTemplate] = useState(defaultTemplate);

  const templateStrings = templates[template].strings;
  const tunningOptions = getTunningList(templateStrings);
  const defaultTunning = getTunning(tunningOptions[0].value, templateStrings);
  const [tunning, setTunning] = useState(defaultTunning);

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

  return (
    <section className="layout">
      <div className="layout__top">
        <div className="layout__column-3">
          <Selector
            id="tunning"
            title="Tunning"
            options={tunningOptions}
            onChange={handleTunningChange}
          />
        </div>
        <div className="layout__column-3">
          <SelectorDouble
            id="scale"
            title="Scale"
            optionsNote={noteOptions}
            optionsScale={scaleOptions}
            onChangeNote={handleNoteChange}
            onChangeScale={handleScaleChange}
          />
        </div>
        <div className="layout__column-3">
          <Selector
            id="template"
            title="Template"
            options={templateOptions}
            onChange={handleTemplateChange}
          />
        </div>
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
