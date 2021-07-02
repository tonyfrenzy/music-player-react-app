import './App.css';
import Header from './components/layouts/Header';
import ListAlbums from './components/musicplayers/ListAlbums';
import ListSongs from './components/musicplayers/ListSongs';
import {Route, Switch} from 'react-router-dom'

const data = {
  brandName: 'Music App'
};

const App = () => (
    <div>
      <Header data={data}/>
      <Switch>
        <Route exact path='/' component={ListSongs} />        
        <Route exact path='/albums' component={ListAlbums} />        
      </Switch>
    </div>
  );

export default App;
