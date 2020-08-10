import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DeleteForm from './memo/DeleteForm';
import PersistForm from './memo/PersistForm';

class App extends Component {
  td = {
    width: '250px'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Memo App that uses React and Redux </h1>
        <AddForm />
        <hr/>
        <table>
          <tbody>
            <tr>
              <td style={this.td}>
                <FindForm />
              </td>
              <td style={this.td}>
                <DeleteForm />
              </td>
              <td style={this.td}>
                <PersistForm />
              </td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    );
  }
}

export default connect()(App);
