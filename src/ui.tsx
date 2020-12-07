import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.scss'

declare function require(path: string): any



class App extends React.Component {
  textbox: HTMLInputElement
 
  placeholder=<label id="placeHolder">
  input<span className="req">*</span>;
</label>
  


 
  onTyping= (event: React.ChangeEvent<HTMLInputElement>) => {
    let element = event.target as HTMLInputElement;
    parent.postMessage({ pluginMessage: { type: 'typing' ,value:element.value} }, '*');


  }

  render() {
    return <div>
      <h2>RTL Support</h2>
      <div className="field-wrap">
           {this.placeholder}
              <input id="textInput"   autoComplete="off" onChange ={this.onTyping}/>
            </div>
        
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))
