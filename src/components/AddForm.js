import React from "react";

const AddForm = ({ onSubmitHandler, name, number, setName, setNumber }) => {
  return (
    <form className="input-add-container" onSubmit={(e) => onSubmitHandler(e)}>
      <input
        value={name}
        type="text"
        placeholder="Ime"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        value={number}
        type="text"
        placeholder="Broj"
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <input type="submit" value="Dodaj" className="button" />
    </form>
  );
};

export default AddForm;
