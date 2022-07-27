import styled from "styled-components";

export const UploadContainer = styled.main`
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  border-radius: 20px;
  height: 50vh;
  width: 50vh;
  margin: 0 20px;
  padding: 15px;
`;

export const Button = styled.button`
  background: #4b65ff;
  padding: 15px;
  border-radius: 40px;
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity .5s;

  :hover {
    opacity: .8;
  }

`
