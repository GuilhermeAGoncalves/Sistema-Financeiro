import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const LabelInput = styled.label`
  flex: 1;
  margin: 10px;
`;

export const LabelName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #888;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 2px solid #5e1a63;
  border-radius: 5px;
  outline: none;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 2px solid #5e1a63;
  border-radius: 5px;
  outline: none;
  background: none;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: #5e1a63;
  border: 1px solid #5e1a63;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
