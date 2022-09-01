import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';


function App() {
  return (
    <div>
      <CustomNavbar brand= 'best pasta around!'/>
      <ReservationList/>
      <ReservationForm customClassName='mt-1'/>
      <Home />
    </div>
  );
}

export default App;
