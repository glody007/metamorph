import React from 'react';
import './Ide.css';
import EditorInput from "../../components/Editor/CodeMirror";
import Interpreter from 'js-interpreter';

const code = `function add(a, b) {
  return a + b;
};
add(2,5);`;

class Ide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      runCode: false,
      outputText: '',
      code: code
    }

    this.onCodeChange = this.onCodeChange.bind(this)
  }

  run() {
    const interpreter = new Interpreter(this.state.code);
    interpreter.run()
    this.setState({outputText: interpreter.value})
  }

  clear() {
    this.setState({outputText: ''})
  }

  onCodeChange(newCode) {
    this.setState({code: newCode})
  }

  render() {
    return (
      <div className="columns main is-vcentered">
        <div className="column input-zone mr-5">
          <div className="code">
            <EditorInput
              code={this.state.code}
              onCodeChange={this.onCodeChange}>
            </EditorInput>
          </div>
          <div className="columns mt-1">
            <div className="column is-3">
              <button
                className="button is-primary is-fullwidth"
                onClick={() => this.run()}>
                  Run
              </button>
            </div>
          </div>
        </div>
        <div className="column output-zone">
          <div className="output">
            {this.state.outputText}
          </div>
          <div className="columns mt-1">
            <div className="column is-3">
              <button
                className="button is-danger is-fullwidth"
                onClick={() => this.clear()}>
                  Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ide;
