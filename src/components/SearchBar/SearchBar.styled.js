import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
`;

export const Label = styled.label`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  padding: 8px 16px;
  background-color: #ff9e59;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  width: 500px;
  font-size: 16px;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  border: none;
  background-color: transparent;
  transform: translateX(-50%) translateY(-40%);
  scale: 1.2;
  cursor: pointer;
`;
