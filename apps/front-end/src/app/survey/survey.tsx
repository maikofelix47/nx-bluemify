import styles from './survey.module.css';
import { useState } from 'react';
import { saveName } from '../resources/name.resource';

/* eslint-disable-next-line */
export interface SurveyProps {}

export function Survey(props: SurveyProps) {
  const [name,setName] = useState('');
  const inputHandler = (value: string)=>{
      console.log('value..', value);
      setName(value);
  };
  const submitHandler = async ()=>{
    await saveName(name);
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
