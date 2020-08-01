import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const EditHeader = () => {
  const name = useSelector((state) => state.name);
  const designation = useSelector((state) => state.designation);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header">
        <div
          className="info"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            className="name"
            style={{ padding: 0, margin: "24.9px", boxShadow: "none" }}
            value={name}
            onChange={({ target }) =>
              dispatch({
                type: "UPDATE_RESUME",
                payload: { name: target.value },
              })
            }
          />
          {/* <p className="title"> */}
          <input
            className="title"
            style={{ display: "block" }}
            value={designation}
            onChange={({ target }) =>
              dispatch({
                type: "UPDATE_RESUME",
                payload: { designation: target.value },
              })
            }
          />

          {/* </p> */}
        </div>
      </div>
    </div>
  );
};
export default EditHeader;

// Tejas Bhosale
