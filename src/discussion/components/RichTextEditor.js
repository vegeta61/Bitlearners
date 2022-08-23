import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { useState } from 'react';

import classes from './RichTextEditor.module.css';
import { Button } from 'react-bootstrap';

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    
      return <div className={classes['editor'] + ' shadow rounded mt-2 mb-3'}>
      <section className={classes['editor-header']}></section>
      <Editor editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName={classes['wrapper-class']}
                editorClassName={classes['editor-class']}
                toolbarClassName={classes['toolbar-class']} />
        <div className="d-flex justify-content-between">
            <Button variant="light" size="lg" className={classes['post-button'] + ' mt-2 px-5 border border-dark'}>Preview</Button>
            <Button variant="success" size="lg" className={classes['post-button'] + ' mt-2 px-5'}>Post Question</Button>
        </div>
        
    </div>
}

export default RichTextEditor;