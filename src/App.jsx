import './App.css'
import Users from './components/Users'

const usersPromise = fetch('http://localhost:9000/users').then(res => res.json())

function App() {
  
  return (
    <div>
      <h2>User Management Application</h2>
      <Users usersPromise={usersPromise}/>
    </div>
  )
}

export default App
