// @flow
import * as React from "react";
import { Title } from "../../App.style";
import * as C from "./Resume.style";

type Props = {
  title: string;
  value: number;
  color?: string;
};

export const Resume = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>R$ {value}</C.Info>
    </C.Container>
  );
};
