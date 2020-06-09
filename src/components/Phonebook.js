import React from "react";

const Phonebook = ({
  favorite,
  sAddressBook,
  onDeleteHandler,
  favoriteHandler,
  sortAscDesc,
}) => {
  return (
    <>
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
    </>
  );
};

export default Phonebook;
