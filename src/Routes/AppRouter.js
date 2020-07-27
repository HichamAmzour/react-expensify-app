import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import ExpenseDashboard from '../Components/ExpenseDashboard';
import AddExpensePage   from '../Components/AddPage';
import HelpPage         from '../Components/HelpPage';
import EditPage  from '../Components/EditPage';
import NotFound         from '../Components/NotFound';
import Header           from '../Components/Header';

const AppRouter = () => (
    <BrowserRouter>
      <div> 
        <Header/>
        <Switch>
          <Route path="/" component={ExpenseDashboard} exact={true} />
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/help" component={HelpPage}/>
          <Route path="/edit/:id" component={EditPage}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;