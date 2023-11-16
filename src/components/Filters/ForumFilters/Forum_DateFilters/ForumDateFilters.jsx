import { Styles } from "./forum_DateFilters.module.css";
//
import ForumDateInput from "./Forum_DateInput/ForumDateInput";
//
import { parse } from 'date-fns'


export default function ForumDateFilters({
  fromDate,
  untilDate,
  handleFromDate,
  handleUntilDate,
}) {
  return (
    <div className={Styles.Filters__date}>
      <p>Desde:</p>
      <ForumDateInput
        fromDate={
          fromDate !== "" ? parse(fromDate, "yyyy-MM-dd", new Date()) : null
        }
        handleFromDate={handleFromDate}
      />

      <p>Hasta:</p>
      <ForumDateInput
        untilDate={
          untilDate !== "" ? parse(untilDate, "yyyy-MM-dd", new Date()) : null
        }
        handleUntilDate={handleUntilDate}
      />
    </div>
  );
}
