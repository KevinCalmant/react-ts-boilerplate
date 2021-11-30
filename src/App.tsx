import './App.scss';
import { useRoutes } from 'react-router-dom';
import routes from './routes/Routes';

const App = () => {
  const router = useRoutes(routes);
  return <>{router}</>;
};

export default App;
