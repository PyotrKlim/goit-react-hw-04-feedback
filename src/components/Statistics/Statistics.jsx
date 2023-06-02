import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css.statistics}>
      <li>
        <span>good: </span>
        <span>{good}</span>
      </li>
      <li>
        <span>neutral: </span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>bad: </span>
        <span>{bad}</span>
      </li>
      <li>
        <span>total: </span>
        <span>{total}</span>
      </li>
      <li>
        <span>positive: </span>
        <span>{positive}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
