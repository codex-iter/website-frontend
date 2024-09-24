import { pdfjs } from "react-pdf";
import { useCallback, useMemo, useState } from "react";
import { Document, Page } from "react-pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "../styles/newsletter.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const maxWidth = 800;
const resizeObserverOptions = {};

const NewsletterPage = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  // Memoize the options object to prevent unnecessary reloads
  const options = useMemo(
    () => ({
      cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    }),
    []
  );

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onResize = useCallback((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  const forward = () => {
    if (pageNumber + 1 <= numPages) setPageNumber(pageNumber + 1);
  };

  const backward = () => {
    if (pageNumber - 1 >= 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div className="text-white flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex justify-center gap-12">
          <button onClick={backward}><IoChevronBack size={25} /></button>
          {pageNumber} of {numPages}
          <button onClick={forward}><IoChevronForward size={25} /></button>
        </div>
      </div>
      <div>
        <div className="Example__container__document mx-auto" ref={setContainerRef}>
          <Document
            file={"Newsletter.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page
              pageNumber={pageNumber}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          </Document>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-12">
          <button onClick={backward}><IoChevronBack size={25} /></button>
          {pageNumber} of {numPages}
          <button onClick={forward}><IoChevronForward size={25} /></button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
