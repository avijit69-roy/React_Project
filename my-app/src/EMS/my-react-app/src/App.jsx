import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Componenet/Auth/Login_1.jsx'
import Employee from './Componenet/DashBoard/EmployeeDashboard.jsx'
import AdminDashboard from './Componenet/DashBoard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './Utilites/LocalStorage.jsx'
import { DataContext } from './Context/AuthProvider.jsx'
import { data } from 'react-router-dom'

function App() {
  const [User, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);


  // Using Context API
  const AuthData = useContext(DataContext);
  // console.log(AuthData.employee);
  // console.log(AuthData.admin);

  // To persist the login state on page refresh  
   useEffect(() => {
  
      const LoggeInUser=localStorage.getItem("loggedInUser");
      if(LoggeInUser){
        const Userdata=JSON.parse(LoggeInUser);
        setUser(Userdata.role);
        setLoggedInUserData(Userdata.data1);
      } 
    
  },[]);


  // Login Handler Function
  const handleLogin = (email, password) => {

    if (email == 'admin@example.com' && password == '123') {
        
      setUser("admin");

      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    }
  
    else if (AuthData) {
      const employee = AuthData.employee.find((e) => e.email === email && e.password === password);
    
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data1: employee }));
      }
    }

    else {
      alert("Invalid Credentials");
    }
  }




  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // },[]);

  return (
    <>

      {!User ? <Login handleLogin={handleLogin} /> : ''}

      {User == "admin" ? <AdminDashboard changeUser={setUser} /> : (User == 'employee' ? <Employee changeUser={setUser} data={loggedInUserData} /> : null)}

    </>
  )
}

export default App