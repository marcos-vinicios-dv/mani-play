import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { SideBar } from './components/SideBar';
import { Routes } from './router/routes';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <SideBar />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
