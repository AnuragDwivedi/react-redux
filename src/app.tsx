import * as React from 'react';
import * as ReactDOM from 'react-dom';
import upper from './utils/upper';
import { createStore } from 'redux'

import '../css/app.css';
import root from './reducers/root';
import { Footer } from './components/footer';
import { Provider } from 'react-redux';

type welcomeProps = {
  name: string;
};
const store = createStore(root);
class Welcome extends React.Component<{}, welcomeProps> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: 'Mediummmm' };
  }
  handleChange(e: any) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome</h1>
        <p>Hello {upper(this.state.name)}</p>
        <input className="input-box" onChange={this.handleChange} defaultValue={this.state.name} />
        <Footer></Footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Welcome />
  </Provider>, document.getElementById('app'));