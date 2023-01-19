import logo from "./logo.svg";
import qr from "./qrcode.png";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./page/Calculator";
import Logout from "./page/Logout";
import Draggable from "./component/Dragable";
import ImageDragable from "./component/Dragable";
import samplePDF from "./sample.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "./canvas.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    const annotationLayer = document.querySelectorAll(
      ".react-pdf__Page__annotations"
    );

    textLayers.forEach((layer) => {
      const { style } = layer;
      style.display = "none";
    });
    annotationLayer.forEach((layer) => {
      const { style } = layer;
      style.display = "none";
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "relative",
          zIndex: "3",
        }}
      >
        <ImageDragable />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
        }}
      >
        <Document file={samplePDF}>
          <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
        </Document>
      </div>
    </div>
  );
}

export default App;
