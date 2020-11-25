import { createContext } from 'react';
import {stateType, actionType} from '../Types/Types'
let x:stateType;
let y:actionType;


const globalContext = createContext([{}]);

export default globalContext;