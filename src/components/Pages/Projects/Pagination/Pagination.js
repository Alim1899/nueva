import React from "react";
import classes from "./Pagination.module.css";
import { useSearchParams } from "react-router-dom";
import left from '../../../../assets/icons/leftslide.svg'
import right from '../../../../assets/icons/rightslide.svg'


const PaginationExample = ({ count, numOfItems,setStartIndex,setEndIndex,startIndex,endIndex }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / numOfItems);
  const nextPage = () => {
    setStartIndex(startIndex+10);
    setEndIndex(endIndex+10);
    window.scrollTo(0, 0);
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  };
  const prevPage = () => {
    setStartIndex(startIndex-10);
    setEndIndex(endIndex-10);
    window.scrollTo(0, 0);
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };
if (pageCount<=1) return null
  return (
    <div className={classes.main}>
             <p>
        ჩანს {(currentPage - 1) * numOfItems + 1}-
        {currentPage === pageCount ? count : currentPage * numOfItems}. სულ არის{" "}
        {count} პროექტი
      </p>
      <div className={classes.buttons}>
        <button className={classes.prev} onClick={prevPage} disabled={currentPage === 1}>
        <img className={classes.icon} src={left} alt="left"></img>
          წინა
        </button>
        <button className={classes.next} onClick={nextPage} disabled={currentPage === pageCount}>
        შემდეგი<img className={classes.icon} src={right} alt="right"></img>
        </button>
      </div> 
 

    </div>
  );
};

export default PaginationExample;
