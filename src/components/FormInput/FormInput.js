import React from "react";

import { Content } from "./styles";

export default function FormInput({ register, errors, name, ...otherProps }) {
  return (
    <Content>
      <input
        name={name}
        {...otherProps}
        style={{
          border: errors ? "1px solid pink" : "1px solid #444"
        }}
        ref={register}
      />
      {errors && <span>{errors.message}</span>}
    </Content>
  );
}
