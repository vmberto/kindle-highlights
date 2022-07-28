import {useState} from "react";

const useDragAndDrop = () => {
    const [dragActive, setDragActive] = useState(false);

    const handleDragFile = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDropFile = onDropAction => e => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onDropAction(e.dataTransfer.files[0]);
        }
    };

    return {dragActive, handleDragFile, handleDropFile};
}

export default useDragAndDrop;
