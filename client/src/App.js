import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Link } from '@reach/router';
import Form from './components/Form';
import Pets from './components/Pets';
import Edit from './components/Edit';
import View from './components/View';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-blue text white">
        <h1>Pet Shelter</h1>
        <nav class="petlink">
        <Link to="/"><button>Home</button></Link>{" "}
        <Link to="/new"><button>Add a pet to the shelter</button></Link>
      </nav>
      </div>
      
      <div>
      
      </div>
      <div>
        <Router>
          <Form path="/new" />
          <Pets path="/" />
          <View path="/pets/:_id" />
          <Edit path="/pet/edit/:_id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
