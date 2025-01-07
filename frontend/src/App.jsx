import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import Appbar from './components/Appbar';
import SendMoney from './pages/SendMoney';
import Dashboard from './pages/Dashboard';
function App() {

  return (
    <>
    <Appbar></Appbar>
    <div className="bg-white p-10 m-4">
       
        <BrowserRouter>
          <Routes>
            
            <Route path="/signup" element={<Signup />} />
             <Route path="/signin" element={<Signin />} />
             <Route path="/send" element={<SendMoney />} />
           <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </BrowserRouter>
        </div>
  
    </>
  )
}

export default App
