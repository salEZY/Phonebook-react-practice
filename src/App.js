import React, { useState } from "react";

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
      <form
        className="input-add-container"
        onSubmit={(e) => onSubmitHandler(e)}
      >
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
      <h3>
        Trazi po imenu <i className="fa fa-search" aria-hidden="true"></i>
      </h3>
      <input
        type="text"
        placeholder="Trazi"
        onChange={onFilterHandler}
        style={{ margin: "0 0 20px 0" }}
      ></input>
      <h1>
        Imenik <i className="fa fa-address-book-o" aria-hidden="true"></i>
      </h1>
      {favorite.length === 0 && sAddressBook.length === 0 ? (
        <p>Nemate dodate kontakte.</p>
      ) : (
        <>
          <div className="address-book">
            <div className="favorites">
              <h3>Omiljeni kontakti:</h3>
              {favorite.length === 0 ? (
                <p>Nemate omiljenih kontakata</p>
              ) : (
                favorite.map((fav) => (
                  <p key={fav.name} style={{ fontWeight: "bolder" }}>
                    {fav.name} - {fav.number}
                    <span
                      onClick={() => onDeleteHandler(fav.name, "fav")}
                      style={{
                        color: "red",
                        fontSize: "25px",
                        fontWeight: "bolder",
                        cursor: "pointer",
                        padding: "0 10px",
                      }}
                    >
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </p>
                ))
              )}
            </div>
            <div className="contacts">
              <h3>Kontakti:</h3>
              {sAddressBook.length === 0 ? (
                <p>Nema kontakata!</p>
              ) : (
                sAddressBook.map((address) => (
                  <p key={address.name}>
                    {address.name} - {address.number}
                    <span
                      onClick={() => onDeleteHandler(address.name, "address")}
                      style={{
                        color: "red",
                        fontSize: "25px",
                        fontWeight: "bolder",
                        cursor: "pointer",
                        borderRight: "2px solid black",
                        padding: "0 10px",
                      }}
                    >
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                    <span
                      onClick={() =>
                        favoriteHandler(address.name, address.number)
                      }
                      style={{
                        color: "orange",
                        fontSize: "20px",
                        fontWeight: "bolder",
                        cursor: "pointer",
                        padding: "10px",
                      }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </p>
                ))
              )}
            </div>
          </div>
          <>
            <button onClick={() => sortAscDesc("desc")} className="button">
              Z-A
            </button>
            <button onClick={() => sortAscDesc("asc")} className="button">
              A-Z
            </button>
          </>
        </>
      )}
    </div>
  );
};

export default App;
