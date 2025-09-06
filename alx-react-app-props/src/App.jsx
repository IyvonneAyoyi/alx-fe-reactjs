import './App.css'
import ProfilePage from './ProfilePage';
import {UserContext} from './UserContext';

function App() {
  const userData = { name: "Anne Iyvon", email: "anne.iyv@gmail.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;



