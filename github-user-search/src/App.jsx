import { useEffect } from "react";
import api from "./services/api";
import TestComponent from "./components/TestComponent";

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/users/octocat"); // test with GitHub's demo user
        console.log("GitHub User:", response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>GitHub User Search App</h1>
      <p>Check the console for API test results ✅</p>
      <TestComponent />
    </div>
  );
}

export default App;
