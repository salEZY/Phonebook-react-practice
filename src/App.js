import React, { useState } from "react";
import AddForm from "./components/AddForm";
import Search from "./components/Search";
import Phonebook from "./components/Phonebook";

export const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addressBook, setAddressBook] = useState([]);
  const [sAddressBook, setSAddressBook] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const updatePhoneBookItem = (name, object) => {
    let index = addressBook.findIndex((el) => el.name === name);

    const tmp = [...sAddressBook];
    tmp[index] = object;
    setAddressBook(tmp);
    setSAddressBook(tmp);
  };

  const addNumber = () => {
    setAddressBook([...addressBook, { name, number }]);
    setSAddressBook([...addressBook, { name, number }]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name === "" || number === "") {
      alert("Niste popunili sva potrebna polja!");
      return;
    }

    for (const address of addressBook) {
      if (address.name === name && address.number === number) {
        alert("Vec postoji!");
        setName("");
        setNumber("");
        return;
      }

      if (address.name === name) {
        if (window.confirm("Do you wish to change the number?")) {
          updatePhoneBookItem(name, { name, number });
          setName("");
          setNumber("");
        }
        return;
      }
    }
    addNumber();
    setName("");
    setNumber("");
  };

  const onFilterHandler = (e) => {
    let filtered = addressBook.filter((el) => el.name.includes(e.target.value));
    setSAddressBook(filtered);
  };

  const onDeleteHandler = (name, arr) => {
    if (arr === "fav") {
      let index = favorite.findIndex((el) => el.name === name);

      const tmp = [...favorite];
      tmp.splice(index, 1);
      setFavorite(tmp);
    } else {
      let index = addressBook.findIndex((el) => el.name === name);

      const tmp = [...addressBook];
      tmp.splice(index, 1);
      setAddressBook(tmp);
      setSAddressBook(tmp);
    }
  };

  const sortAscDesc = (ascDesc) => {
    let tmp = [...sAddressBook];
    tmp.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));
    if (ascDesc === "asc") {
      tmp.reverse();
      setSAddressBook(tmp);
    } else {
      setSAddressBook(tmp);
    }
  };

  const favoriteHandler = (name, number) => {
    setFavorite([...favorite, { name, number }]);
    onDeleteHandler(name);
  };

  return (
    <div className="container">
      <AddForm
        onSubmitHandler={onSubmitHandler}
        name={name}
        number={number}
        setName={setName}
        setNumber={setNumber}
      />
      <Search onFilterHandler={onFilterHandler} />
      <Phonebook
        favorite={favorite}
        sAddressBook={sAddressBook}
        onDeleteHandler={onDeleteHandler}
        favoriteHandler={favoriteHandler}
        sortAscDesc={sortAscDesc}
      />
    </div>
  );
};

export default App;
