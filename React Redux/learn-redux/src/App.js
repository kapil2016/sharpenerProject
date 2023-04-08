import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';



function App() {
  const isAuthanticated = useSelector(state=>state.auth.isAuthanticated)
  return (
    <>
    <Header></Header>
    {!isAuthanticated &&
    <Auth></Auth>}
    {isAuthanticated&& <UserProfile></UserProfile> }
    <Counter />
    </>
  );
}

export default App;
