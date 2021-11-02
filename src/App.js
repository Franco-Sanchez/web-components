import './components/weather-card/weather-card'
import './components/franco-tag/franco-tag'

const App = () => {
  return (
    <>
      <franco-tag></franco-tag>
      <weather-card longitude='85.8245' latitude='20.296'></weather-card>
    </>
  );
}

export default App;
