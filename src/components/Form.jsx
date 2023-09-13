import { useRef } from "react";
import { useState } from "react";
import RadioButtons from "./RadioButtons";

function Form({ onSubmit }) {
  const [selectedOptions, setSelectedOptions] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });

  const formRef = useRef(null); // Create a useRef for the form

  const handleSelectedOptionChange = (questionNumber, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionNumber]: option,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedOptions); // Pass the selected options to the parent component
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <h2>Will food be served?</h2>
        <RadioButtons
          name="question1"
          selectedOption={selectedOptions.question1}
          onSelectedOptionChange={handleSelectedOptionChange}
        />
        <p>Selected Option: {selectedOptions.question1}</p>
      </div>
      <div>
        <h2>Will alcohol be served?</h2>
        <RadioButtons
          name="question2"
          selectedOption={selectedOptions.question2}
          onSelectedOptionChange={handleSelectedOptionChange}
        />
        <p>Selected Option: {selectedOptions.question2}</p>
      </div>
      <div>
        <h2>Is the weather good?</h2>
        <RadioButtons
          name="question3"
          selectedOption={selectedOptions.question3}
          onSelectedOptionChange={handleSelectedOptionChange}
        />
        <p>Selected Option: {selectedOptions.question3}</p>
      </div>
      <div>
        <h2>Is someone coming with me?</h2>
        <RadioButtons
          name="question4"
          selectedOption={selectedOptions.question4}
          onSelectedOptionChange={handleSelectedOptionChange}
        />
        <p>Selected Option: {selectedOptions.question4}</p>
      </div>
      <div>
        <h2>Will there be freebies?</h2>
        <RadioButtons
          name="question5"
          selectedOption={selectedOptions.question5}
          onSelectedOptionChange={handleSelectedOptionChange}
        />
        <p>Selected Option: {selectedOptions.question5}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
