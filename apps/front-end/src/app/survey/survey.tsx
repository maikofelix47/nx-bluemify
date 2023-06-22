import styles from './survey.module.css';
import React, { useState } from 'react';
import { saveName } from '../resources/name.resource';

/* eslint-disable-next-line */
export interface SurveyProps {}

export const Survey: React.FC<SurveyProps> = ()=>{
  const [name,setName] = useState('');
  const inputHandler = (value: string)=>{
      setName(value);
  };
  const submitHandler = ()=>{
    const payload = {
      name: name
    };
   saveName(payload).then((resp)=>{
    console.log('response', resp);
   });
    
};
  return (
    <div className={styles['container']}>
      <h1>Welcome to Survey!</h1>
      <input type='text' onChange={(e)=>inputHandler(e.target.value)}></input>
      <button onClick={submitHandler}>Save</button>
    </div>
  );
}

export default Survey;
