import React from 'react'
import './ComponentFixedMenu.css'
import Logo from '../../assets/imgs/logo-sciensa-pb2.png';

const ComponentFixedMenu = () => {
    return (
        <div class="fixed-menu">
            <div class="logo-content">
                <img src={Logo} alt="Logo Sciensa uma empresa legal" />
            </div>
            <div class="menu-content">
                <button>Categorias</button>
                <button>Adicionar Filme</button>
            </div>
        </div>
    );
    return <>{ComponentFixedMenu()}</>;
}

export default ComponentFixedMenu;
