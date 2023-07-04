import React, { useEffect } from "react";
import add_file from "../../../../assets/add-file.svg";
import { useDropzone } from "react-dropzone";

export default function DropZone({ onSelected, fileData }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      onSelected(acceptedFiles[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  return (
    <section>
      <div {...getRootProps({ class: "dropzone" })}>
        <input {...getInputProps()} />
        <img src={add_file} alt="" className="icon" />
        <small>PDF, DOCX,DOC,RTF,TXT The size limit is 1MB</small>
        <small>{fileData}</small>
      </div>
    </section>
  );
}
