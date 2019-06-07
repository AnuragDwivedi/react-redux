import * as React from 'react';
import * as ReactDOM from 'react-dom';
import upper from './upper';

import '../css/app.css';

type welcomeProps = {
  name: string;
};

class Welcome extends React.Component<{}, welcomeProps> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: 'Medium'};
  }
  handleChange(e: any) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Welcome</h1>
        <p>Hello {upper(this.state.name)}</p>
        <input className="input-box" onChange={this.handleChange} defaultValue={this.state.name}/>
      </div>
    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));