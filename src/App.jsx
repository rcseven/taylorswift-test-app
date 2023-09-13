import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [decision, setDecision] = useState(null);
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
      <h1>Paladesisyon Taylor Swift's Concert</h1>
      <Form onSubmit={handleFormSubmitTotal} />
      <p>θ = 1.8</p>
      {decision !== null ? (
        decision >= 1.8 ? (
          <p>θ &lt;= {decision}. Therefore, you can go to the concert!</p>
        ) : (
          <p>θ &gt; {decision}. Sorry, you can't go to the concert!</p>
        )
      ) : null}
    </>
  );
}

export default App;
