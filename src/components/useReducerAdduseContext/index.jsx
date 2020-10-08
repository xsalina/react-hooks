import React,{useState,useEffect} from 'react';
import Father from './father'
import Buttons from './buttons'
import ShowArea from './showArea'
import {ColorContextCom} from './father'
export default (props) => {
    return <>
    <ColorContextCom>
        <Buttons />
       <ShowArea />
    </ColorContextCom>
    </>
}