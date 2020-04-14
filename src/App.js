import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import MutationComponent from './js/MutationComponent';
import QueryComponent from './js/QueryComponent';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <QueryComponent>
        {(data) => {
          return (
            <React.Fragment>
              <ContactList edges={data.viewer.allContacts.edges} />
              <MutationComponent />
            </React.Fragment>
          );
        }}
      </QueryComponent>
    </div>
  );
};

export default App;
