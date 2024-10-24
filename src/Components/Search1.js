import React, { useState } from "react";

function Search1(props) {
  const [text, setText] = useState("");
  //intially text value is empty
  //but when we type something-> text value will be value of the text

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchName(text);
    setText("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {props.showClear && (
        <button
          type="button"
          className="btn btn-light btn-block"
          onClick={() => {
            props.clearUsers();
            setText("");
          }}
        >
          Clear
        </button>
      )}
    </>
  );
}

export default Search1;
