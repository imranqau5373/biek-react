import React, { Component } from 'react';
import {Header} from '.././header/Header';
import {Imageslider} from '../imageSlider/imageslider';
import {MainContent} from '../main-content/main-content';
import {Footer} from '../footer/Footer';
export class Home extends Component{
   render(){
    return (
        <>
        <Header/>
        <Imageslider/>
        <MainContent />
        <Footer />
        </>
    );
   }

} 