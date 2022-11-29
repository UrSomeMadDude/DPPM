import './App.css';
import Employee from './components/Employee';

function App() {
  return (
    <Employee 
        icon={require("./assets/Main_icon.png")} 
        profilePhoto={require("../src/assets/profile_photo.jpg")}
        sweets={32}
    />
  );
}

export default App;
