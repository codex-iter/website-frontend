import { pdfjs } from "react-pdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Document, Page } from "react-pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { API_URL } from "../lib/constants"; 

import "../styles/newsletter.css";
import Newsletter from "../components/Newsletter";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const maxWidth = 800;
const resizeObserverOptions = {};

const NewsletterPage = () => {
  const [file, setFile] = useState();
  const [editions, setEditions] = useState([]);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [loading, setLoading] = useState(true);

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

  const getNewsletters = async () => {
    try {
      const response = await fetch(`${API_URL}/newsletter`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if(data.success){
        setEditions(data.newsletter);
        if(data.newsletter.length>0) getNewsletter(data.newsletter[0].id)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getNewsletter = async (id) => {
    try {
      const response = await fetch(`${API_URL}/newsletter/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if(data.success){
        const pdfResponse = await fetch(data.newsletter.link);
        const blob = await pdfResponse.blob();
        const fileUrl = URL.createObjectURL(blob);
        setFile(fileUrl);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getNewsletters();
  },[])

  const forward = () => {
    if (pageNumber + 1 <= numPages) setPageNumber(pageNumber + 1);
  };

  const backward = () => {
    if (pageNumber - 1 >= 1) setPageNumber(pageNumber - 1);
  };

  const [selectedValue, setSelectedValue] = useState('Option 1');

  // Handle change event
  const handleChange = (event) => {
    setLoading(true);
    setSelectedValue(event.target.value);
    getNewsletter(event.target.value);
  };

  return (
    <div className="text-white flex flex-col justify-center">
      <h1 className="text-4xl tracking-tight my-2 font-extrabold text-pastel text-center sm:text-5xl md:text-6xl">
          Newsletters
      </h1>
      <div className="flex justify-center mt-4 mb-8">
      <div className="mx-auto">
      <label htmlFor="dropdown" className="mb-2 text-lg font-medium text-gray-300 text-center">
        Select an edition:
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        className="block w-64 px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {
          editions.map((item, index)=>{
            return <option key={index} value={item.id}>{item.edition}</option>
          })
        }
      </select>
      </div>
      </div>
      {
        loading&&
        <div className="h-24 w-4/6 rounded-xl bg-white/30 text-transparent mx-auto animate-pulse">
          asda
        </div>
      }
      {!loading&&file&&
      <div>
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
            file={file}
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
      </div>}
      <div className="my-6">
        <Newsletter />
      </div>
    </div>
  );
};

export default NewsletterPage;
