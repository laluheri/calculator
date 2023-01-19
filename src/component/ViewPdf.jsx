import React from "react";
import { Document, Page } from "react-pdf";

const MyPdfViewer = ({ file }) => {
  return (
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default MyPdfViewer;
