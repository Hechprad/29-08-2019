import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponenteHeader from './componentes/header/ComponenteHeader';
import ComponenteFixedMenu from './componentes/fixedMenu/ComponentFixedMenu';
import ComponentGalleryContainer from './componentes/galleryContainer/ComponentGalleryContainer';

function App() {
  return (
    <>
      <ComponenteFixedMenu />
      <ComponenteHeader />
      <ComponentGalleryContainer />
    </>
  );
}

export default App;
