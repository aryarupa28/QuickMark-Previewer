// QuickMarkPreviewer.js

import React, { useState } from 'react';
import {marked} from 'marked';
import './QuickMarkPreviewer.css'; // Import CSS file for styling

const QuickMarkPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const insertText = (text) => {
    const { selectionStart, selectionEnd } = document.querySelector('.editor');
    const newMarkdown =
      markdown.substring(0, selectionStart) +
      text +
      markdown.substring(selectionEnd);
    setMarkdown(newMarkdown);
  };

  return (
    <div className="container">

      <div className="toolbar">
        <button onClick={() => insertText('## ')}>Heading</button>
        <button onClick={() => insertText('**bold text**')}>Bold</button>
        <button onClick={() => insertText('*italic text*')}>Italic</button>
        <button onClick={() => insertText('[link](URL)')}>Link</button>
        <button onClick={() => insertText('![alt text](image URL)')}>
          Image
        </button>
        <button onClick={() => insertText('```\ncode block\n```')}>
          Code Block
        </button>
      </div>
      <div className="content">
        <textarea
          className="editor"
          value={markdown}
          onChange={handleChange}
          placeholder="Enter Markdown text..."
        ></textarea>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          placeholder="Text Preview..."
        ></div>
      </div>
    </div>
  );
};

export default QuickMarkPreviewer;
