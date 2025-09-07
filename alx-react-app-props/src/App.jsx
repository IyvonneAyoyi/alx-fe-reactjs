import './App.css'
import ProfilePage from './components/ProfilePage'
import { UserProvider } from './components/UserContext'

function App() {
  const userData = { name: "Anne Iyvon", email: "anne.iyv@gmail.com" };

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;



