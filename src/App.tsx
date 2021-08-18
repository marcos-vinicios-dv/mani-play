import GlobalStyles from './styles/global';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <SideBar />
      <Home />
    </>
  );
};

export default App;
