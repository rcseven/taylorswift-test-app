function RadioButtons({ name, selectedOption, onSelectedOptionChange }) {
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    onSelectedOptionChange(name, value);
  };

  return (
    <>
      <label>
        <input
          type="radio"
          name={name}
          value={1}
          checked={selectedOption === 1}
          onChange={handleChange}
          required={true}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          name={name}
          value={0}
          checked={selectedOption === 0}
          onChange={handleChange}
        />
        No
      </label>
    </>
  );
}

export default RadioButtons;
