import { Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { TitleComponent } from './components/Title';

import MainLayout from './layouts/Main';

import Homepage from './pages/Homepage';
import About from './pages/About';

function App() {
  return (
    <MainLayout>
      <div class="flex py-12 justify-center px-6 md:px-0">
          <Switch>
            <Route exact path="/">
                <TitleComponent title="Home" />
                <Homepage></Homepage>
            </Route>
            <Route path="/about">
                <TitleComponent title="About" />
                <About></About>
            </Route>
          </Switch>
      </div>
    </MainLayout>
  );
}

library.add(fab)

export default App;
