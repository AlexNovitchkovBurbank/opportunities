import { useEffect, useState, type FormEvent } from 'react'
import './App.css'
import api from './getOpportunites/api'
import formatDateWithSlashes from './utilities/DateToString'
import 'bootstrap/dist/css/bootstrap.min.css';
import { OpportunitiesBarChart } from './charts'
import { fillOpportunityFrequencyData } from './utilities/opportunityDataCreation'
import type { OpportunityApiData } from './types/apiTypes'
import type { OpportunityFrequency } from './types/chartTypes';
import { NameDescriptionLinkTable } from './tables';
import type { NameDescriptionLinkRecords } from './types/tableTypes';
import { createNameDescriptionLinkRecords } from './utilities/createNameDescriptionLinkRecords';

function App() {
  const [error, setError] = useState<string>("");
  const [chartData, setChartData] = useState<OpportunityFrequency[]>([]);
  const [nameDescriptionLinkRecords, setNameDescriptionLinkRecords] = useState<NameDescriptionLinkRecords[]>([]);

  const apiKey = import.meta.env.VITE_API_KEY;

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

/*   
  const dataPoints: ChartData[] = [
    new ChartData("Jan", 200),
    new ChartData("Feb", 300),
    new ChartData("Apr", 300)
  ];
*/

  const formattedPostedFromDate = formatDateWithSlashes(postedFromDate);
  const formattedPostedToDate = formatDateWithSlashes(postedToDate);

  const naicsCodeArray = [336411,336412,336413,481211,481212];

  let naicsCodeArrayAsString = "";

  for (let i = 0; i < naicsCodeArray.length; i++) {
    naicsCodeArrayAsString = naicsCodeArrayAsString + "," + naicsCodeArray[i].toString();
  }

  let opportunityApiData: OpportunityApiData[] = [];

    useEffect(() => {
      try {
        const fetchOpportunities = () => {
          if (apiKey !== undefined) {
            opportunityApiData = api(apiKey, formattedPostedFromDate, formattedPostedToDate, limit, naicsCodeArrayAsString);

            const nameDescriptionLinkRecords = createNameDescriptionLinkRecords(opportunityApiData);
            const dataPoints = fillOpportunityFrequencyData(opportunityApiData);

            setChartData(dataPoints);
            setNameDescriptionLinkRecords(nameDescriptionLinkRecords)
          }
          else {
            console.error('No api key found');
            setError('No api key found');
          }
        }

        fetchOpportunities()
      } catch (e: any) {
        setError(e)
      } 
    }, [])

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
        <div className='d-flex flex-row align-items-center mt-4'>
          <label htmlFor='result' className='me-4'>Result:</label>
          <textarea id='result' disabled={true} value={error}></textarea>
        </div>
      </div>
      <OpportunitiesBarChart dataPoints={chartData}/>
      <NameDescriptionLinkTable nameDescriptionLinkRecords={nameDescriptionLinkRecords} />
    </>
  )
}

export default App
