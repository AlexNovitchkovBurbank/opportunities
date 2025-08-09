import { useState, type FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './getOpportunites/api'
import formatDateWithSlashes from './utilities/DateToString'
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { debug } from 'console'

function App() {
  const [error, setError] = useState<string>("");
  const [titles, setTitles] = useState<Array<string>>([]);
  const [descriptions, setDescriptions] = useState<Array<string>>([]);

  const apiKey = process.env.API_KEY;
  console.log('API Key:', apiKey);

  //dotenv.config({ path: '.env.dev', debug: true});

  const postedFromDate = new Date('2023-01-01');
  const postedToDate = new Date('2023-12-31');
  const limit = 10;

  function onSubmitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const opportunityCode = formData.get('opportunityCode') as string;

    if (opportunityCode === "") {
      console.error('Opportunity Code is required');
      setError('Opportunity Code is required');
    }
    else {
      setError("");
    }
  }

  const formattedPostedFromDate = formatDateWithSlashes(postedFromDate);
  const formattedPostedToDate = formatDateWithSlashes(postedToDate);

  const naicsCodeArray = [336411,336412,336413,481211,481212];

  let naicsCodeArrayAsString = "";

  for (let i = 0; i < naicsCodeArray.length; i++) {
    naicsCodeArrayAsString = naicsCodeArrayAsString + "," + naicsCodeArray[i].toString();
  }

  if (apiKey !== undefined) {
    api(apiKey, formattedPostedFromDate, formattedPostedToDate, limit, naicsCodeArrayAsString);
  }
  else {
    console.error('No api key found');
    setError('No api key found');
  }
  
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <form onSubmit={onSubmitHandler} className='d-flex flex-column align-items-center'>
          <div>
            <label htmlFor='opportunityCode' className='me-4'>Opportunity Code:</label>
            <input type='text' id='opportunityCode' name='opportunityCode'></input>
          </div>
          <button type='submit' className='mt-2'>Submit</button>
        </form>
        <div>{error}</div>
        <div className='d-flex flex-row align-items-center mt-4'>
          <label htmlFor='result' className='me-4'>Result:</label>
          <textarea id='result' disabled={true}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </textarea>
        </div>
      </div>
    </>
  )
}

export default App
