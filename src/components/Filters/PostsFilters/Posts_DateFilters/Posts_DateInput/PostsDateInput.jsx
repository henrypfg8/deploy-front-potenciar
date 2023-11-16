import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
//
import DatePicker from "react-datepicker";
import CleanDateIcon from "../../../../../assets/CleanDateIcon";
//
import "react-datepicker/dist/react-datepicker.css";
import { Styles } from "./postsDateInput.module.css";
//
import { useDispatch, useSelector } from "react-redux";
import {
  setPostsFilters,
  getPostsFiltered,
  setLoading,
  hideLoading,
} from "../../../../../Redux/actions/postsActions";

const PostsDateInput = ({
  handleFromDate,
  handleUntilDate,
  fromDate,
  untilDate,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  const filters = useSelector((state) => state.posts.postsFilters);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    if (handleFromDate) handleFromDate(e);
    else handleUntilDate(e);

    setIsOpen(!isOpen);
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (fromDate) {
      dispatch(setLoading());
      dispatch(setPostsFilters({ ...filters, fromDate: "" }));
      dispatch(getPostsFiltered({ ...filters, fromDate: "" }));

      setTimeout(() => {
        dispatch(hideLoading());
      }, 400);
    }
    if (untilDate) {
      dispatch(setLoading());
      dispatch(setPostsFilters({ ...filters, untilDate: "" }));
      dispatch(getPostsFiltered({ ...filters, untilDate: "" }));

      setTimeout(() => {
        dispatch(hideLoading());
      }, 400);
    }
  };


  /////////////////////////////////////////

  return (
    <div className={Styles.DateInput}>
      <button
        className={Styles.DateInput__button}
        onClick={handleClick}
        id={isOpen ? Styles.active : ""}
      >
        {fromDate
          ? format(fromDate, "dd-MM-yyyy")
          : untilDate
            ? format(untilDate, "dd-MM-yyyy")
            : "Seleccione una fecha"}
      </button>

      <div className={Styles.DateInput__datePicker} ref={datePickerRef}>
        {isOpen && (
          <div>
            <DatePicker
              selected={fromDate || untilDate}
              onChange={handleChange}
              inline
            />
          </div>
        )}
      </div>

      <div className={Styles.DateInput__Icon}>
        <CleanDateIcon className={Styles.icon} onClick={handleReset} />
      </div>
    </div>
  );
};

export default PostsDateInput;
