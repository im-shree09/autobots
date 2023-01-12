import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Team from './Team';
import ProjDetails from './ProjDetails';
import TeamDetails from './TeamDetails';
import TeamMember from './TeamMember';
import CreateTeam from './CreateTeam';
import CreateTeamMember from './CreateTeamMember';
import NotFound from './NotFound';
import EditTeam from './EditTeam';
import Edit from './Edit';
import EditTeamMember from './EditTeamMember';
import Login from './Login';
import Signup from './Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/signup'>
              <Signup/>
            </Route>
            <Route path='/team'>
              <Team/>
            </Route>
            <Route path='/create-team'>
              <CreateTeam/>
            </Route>
            <Route path='/team-members'>
              <TeamMember/>
            </Route>
            <Route path='/create-team-members'>
              <CreateTeamMember/>
            </Route>
            <Route path='/my_project_api/:id'>
              <ProjDetails/>
            </Route>
            <Route path='/my_team_api/:id'>
              <TeamDetails/>
            </Route>
            <Route path='/edit-team/:id'>
              <EditTeam/>
            </Route>
            <Route path='/edit/:id'>
              <Edit/>
            </Route>
            <Route path='/edit-member/:id'>
              <EditTeamMember/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
