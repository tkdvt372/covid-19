
import { useCallback, useEffect, useState } from 'react';
import CountrySelector from './component/CountrySelector';
import Highlight from './component/Highlight/index';
import Summary from './component/Summary';
import { getCountries ,getReportByCountry} from './apis/index';
import { Container, Typography } from '@material-ui/core';
function App() {
  const [countries,setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report,setReport] = useState([]);
  useEffect(() => {
    getCountries()
    .then(res => {
      setCountries(res.data.Countries);
      setSelectedCountryId('VN');
    })
  },[])
  const hanldeOnChange = useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);
  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.CountryCode === selectedCountryId);
      getReportByCountry(selectedCountry.Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  return (
 <Container>
 <Typography variant="h2" component="h2">Số liệu covid 19</Typography>
 <CountrySelector countries={countries} hanldeOnChange={hanldeOnChange} value={selectedCountryId}/>
<Highlight report={report}/>
 <Summary report={report}  selectedCountryId={selectedCountryId}/>
 </Container>
  );
}

export default App;
