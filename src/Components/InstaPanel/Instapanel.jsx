import React from 'react'
import '../../Styles/Instapanel.scss';
import InstaData from '../../Data/instapaneldata'
import insta from '../../assets/Icons/Header_Icons/insta.png'

function Instapanel() {
    return (
        <div className='main-insta'>
            <div className='header'>
                <h1>{InstaData.Title}</h1>
                <p>{InstaData.Description}</p>
            </div>
            <div className='photos'>
                {InstaData.Images.map((item, index) => { return (<img key={index} src={item} alt="" />) })}
            </div>
            <div className='btnn'>
                <button>Visit Our Instagram <img src={insta} alt="" /></button>
            </div>


        </div>
    )
}

export default Instapanel
