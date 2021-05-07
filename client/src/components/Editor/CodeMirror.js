import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

class EditorInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <CodeMirror
        value={this.props.code}
        height={'65vh'}
        options={{
          theme: 'dracula',
          keyMap: 'sublime',
          mode: 'jsx',
        }}
        onChange={(editor, data) => {
          this.props.onCodeChange(editor.getValue())
        }}
      />
    );
  }
}

export default EditorInput;
