import React from "react";
import { users } from "../testData/database";

type Props = {};

const Form = (props: Props) => {
  return (
    <div>
      <h1>Form!~</h1>
      <form action="/send-data-here" method="post">
        <label htmlFor="roll">Roll Number</label>
        <input
          type="text"
          id="roll"
          name="roll"
          required
          minLength={10}
          maxLength={20}
        />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
