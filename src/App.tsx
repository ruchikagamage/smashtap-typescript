import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { weather } from "./component/store";
import { useTypeSelector } from "./component/hook/useTypedSelector";

const city = ["colombo", "mumbai", "sydney", "singapore", "shanghai"];

function App() {
  const [formData, setState] = useState<any>(0);
  const [currentTry, setCurrentTry] = useState(0);
  const [cityList, setCityList] = useState<any>([]);
  const dispatch = useDispatch();
  const { isLoading, actualTemp } = useTypeSelector((state) => state);
  console.log("actualTemp 1", actualTemp);

  useEffect(() => {
    if (actualTemp) {
      console.log("actualTemp 2", actualTemp);
      const success = formData <= actualTemp + 5 && formData >= actualTemp - 5;
      setCurrentTry((currentTry) => currentTry + 1);
      setCityList([
        ...cityList,
        { city: city[currentTry], temp: actualTemp, success },
      ]);
    }
  }, [actualTemp]);

  const getCount = () => {
    dispatch(weather.getWhether(city[currentTry]));
  };

  return (
    <div>
      <div>{city[currentTry]}</div>
      <input
        value={formData}
        type="text"
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={getCount}>
        {isLoading === true ? "loading" : "add"}
      </button>
      <pre>{JSON.stringify(cityList, null, 2)}</pre>
    </div>
  );
}

export default App;
