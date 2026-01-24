import Homepage from './Homepage.jsx'
import Aboutpage from './Aboutpage.jsx';
import Movedetails from './Moviedetails.jsx';
import Header from './Header.jsx';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
export default function App(){
  return(<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/:id" element={<Movedetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>);
}