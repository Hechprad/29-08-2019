import React from 'react'

import ComponenteHeader from '../componentes/header/ComponenteHeader.js';
import ComponenteFixedMenu from '../componentes/fixedMenu/ComponentFixedMenu';
import ComponentGalleryContainer from '../componentes/galleryContainer/ComponentGalleryContainer';

/** desconstruir props => (props) ou ({ movie }) */
const Main = () => {
    return (
    <>
      <ComponenteFixedMenu />
      <ComponenteHeader />
      <ComponentGalleryContainer />
    </>
)};

export default Main;
