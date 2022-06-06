import { Routes, Route, Navigate} from 'react-router-dom';
import { getCookie } from './untils';
import HomePage from '@pages/HomePage';
import Login from '@pages/Login';
import CreativePage from '@pages/CreativePage';
import SquarePage from '@pages/SquarePage';


const Cookie = getCookie('token');
export default function RoutesArray():JSX.Element
{
    if(Cookie){
        return <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/creative" element={<CreativePage/>}/>
        <Route path="/square" element={<SquarePage/>}/>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    }else{
        return <Routes>
        <Route path="/"  element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    }
}