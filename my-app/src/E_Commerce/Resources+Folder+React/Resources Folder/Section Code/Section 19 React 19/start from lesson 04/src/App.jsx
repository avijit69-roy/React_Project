import "./App.css";
import OldUserProfile from "./oldWay/OldUserProfile";

const App = () => {
  return (
    <>
      <h1>App Component</h1>
      <div className="app_div">
        <div>
          <OldUserProfile userid={2} />
        </div>
      </div>
    </>
  );
};

export default App;
