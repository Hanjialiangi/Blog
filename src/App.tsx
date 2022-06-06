import React,{useEffect,useState} from 'react';
import './App.css';
import LayoutSide from '@components/Layout';

function App():JSX.Element {
  const [userInfo,setUserInfo] = useState<string>('');
  useEffect(()=>{
    setUserInfo('');
  },[userInfo])
  return <LayoutSide userInfo={userInfo}/>;
}

export default App;
