import styled from "styled-components";

export const UploadContainer = styled.main`
  position: relative;
  text-align: center;
  display: flex;
  flex-flow: column;
  background: white;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  border-radius: 20px;
  height: 50vh;
  width: 50vh;
  margin: 0 20px;
  padding: 15px;
`;

export const PanelTitle = styled.h1`
  margin-top: 10px;
`;


export const LabelFileUpload = styled.label`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  border-color: #cbd5e1;
  background-color: ${({dragActive}) => dragActive ? '#fff' : '#f8fafc'};

  :hover {
    #browse-files-anchor {
      border-bottom: 1px solid #4b65ff;
    }
  }
`;

export const DragAndDropSpace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const BrowseFilesButton = styled.a`
  cursor: pointer;
  color: #4b65ff;

`

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
