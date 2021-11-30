import React, { Fragment } from "react";

const Checkbox = (props) => {

  return (
    <Fragment>
      <label className="todo new-item">
        {/*(B) (C)*/}
        <input
          className="todo__state"
          name={props.data.id}
          type="checkbox"
          defaultChecked={props.data.done}
          onChange={props.onChange}
        />
        <div className="todo__text">{props.data.description}</div>
      </label>
    </Fragment>
  );
};

export default Checkbox;
