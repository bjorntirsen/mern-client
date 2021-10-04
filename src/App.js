import React from 'react';

// We use Route in order to define the different routes of our application
import { Route } from 'react-router-dom';

// We import all the components we need in our app
import Navbar from './components/navbar';
import Edit from './pages/edit';
import Create from './pages/create';
import Landing from './pages/landing';

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route path='/edit/:id' component={Edit} />
      <Route path='/create' component={Create} />
    </>
  );
};

export default App;
