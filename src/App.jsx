import Form from "./components/Form";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./styles.css";

function App() {
  const [decision, setDecision] = useState(null);
  const [value, setValue] = useState(0);
  const handleFormSubmitTotal = (selectedOptions) => {

    const mappedData = {
      question1: selectedOptions.question1 * 0.6,
      question2: selectedOptions.question2 * 0.1,
      question3: selectedOptions.question3 * 0.7,
      question4: selectedOptions.question4 * 0.5,
      question5: selectedOptions.question5 * 0.2,
    };

    const sum = Object.values(mappedData).reduce((acc, curr) => acc + curr, 0);
    setDecision(sum);
  };

  return (
    <>
      <h1>Paladesisyon: Taylor Sheeeesh Concert</h1>
      <p>Set threshold:</p>
      <RangeSlider
        className="single-thumb"
        min={0}
        max={2.1}
        step={0.01}
        defaultValue={[0]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        onInput={(values) => {
          setValue(values[1])
        }}
      />

      <p>θ = {value}</p>
      {console.log(value)}
      <Form onSubmit={handleFormSubmitTotal} />
      {decision !== null ? (
        decision >= value ? (
          <p>θ &lt;= {decision}. Therefore, you can go to the concert!</p>
        ) : (
          <p>θ &gt; {decision}. Sorry, you can't go to the concert!</p>
        )
      ) : null}
    </>
  );
}

export default App;
