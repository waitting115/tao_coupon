// import React from 'react';
import './App.css';
import './components/public/layout.css';

import Header from './components/header/Header';
import Search from './components/search/Search'; 
import NavigatorBar from './components/navigator_bar/NavigatorBar';
import PPT from './components/ppt/ppt';
import GoodsContainer from './components/goods_container/GoodsContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <NavigatorBar/>
      <PPT/>
      <GoodsContainer/>
    </div>
  );
}

export default App;
