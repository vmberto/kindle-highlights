import {useRef, useState} from "react";
import download from "../utils/download-file";
import {
    BrowseFilesButton,
    Button,
    DragAndDropSpace,
    LabelFileUpload,
    PanelTitle,
    UploadContainer
} from "../styles/upload";
import {Container} from "../styles/globals";
import useDragAndDrop from "../hooks/UseDragAndDrop";

export default function Upload() {
    const inputRef = useRef();
    const [filename, setFilename] = useState();
    const [mountedFile, setMountedFile] = useState();
    const [invalidFile, setInvalidFile] = useState(false);
    const [generatingFile, setGeneratingFile] = useState(false);
    const {dragActive, handleDragFile, handleDropFile} = useDragAndDrop();

    const onUpload = async (draggedFile = null) => {
        const reader = new FileReader();
        if ('File' in window && draggedFile instanceof File) {
            reader.readAsText(draggedFile);
            setFilename(draggedFile.name)
        } else {
            const {files: [file]} = inputRef?.current;
            reader.readAsText(file);
            setFilename(file.name)
        }
        setMountedFile(null);
        setInvalidFile(false);

        reader.onloadend = async ({target: {result: csv}}) => {
            setGeneratingFile(true);
            const response = await fetch("/api/highlight", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({csv}),
            });
            setGeneratingFile(false);
            const file = await response.blob();
            setMountedFile(file);
        };
    }


    return (
        <Container>

            <UploadContainer onDragEnter={handleDragFile}>

                <PanelTitle>Kindle Highlights</PanelTitle>

                <LabelFileUpload onClick={() => inputRef.current.click()} dragActive={dragActive}>
                    <div>
                        <p>Drag and drop your file here or <BrowseFilesButton
                            id="browse-files-anchor">browse</BrowseFilesButton></p>
                    </div>
                </LabelFileUpload>

                <h3>{filename}</h3>

                {generatingFile && <h6>Gerando arquivo...</h6>}
                {invalidFile && <h6>Arquivo Inválido</h6>}

                {mountedFile && <Button onClick={() => download(mountedFile, filename)}>Download</Button>}

                {dragActive && <DragAndDropSpace onDragEnter={handleDragFile} onDragLeave={handleDragFile}
                                                 onDragOver={handleDragFile}
                                                 onDrop={handleDropFile(onUpload)}></DragAndDropSpace>}

            </UploadContainer>

            <input style={{display: 'none'}} ref={inputRef} type="file" name="file" onChange={onUpload}/>
        </Container>
    );
}
