import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { SideBar } from './components/SideBar';
import { Routes } from './router/routes';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <SideBar />
      <Routes />
    </Router>
  );
};

export default App;
