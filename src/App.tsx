import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import { SideBar } from './components/SideBar';
import { Routes } from './router/routes';
import { store } from './store';
import { Header } from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Header />
        <SideBar />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
