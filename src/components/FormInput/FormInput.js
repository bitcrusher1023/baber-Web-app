import React from "react";

import { Content } from "./styles";

export default function FormInput({
  register,
  errors,
  name,
  defaultValue,
  ...otherProps
}) {
  return (
    <Content>
      <input
        defaultValue={defaultValue}
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
