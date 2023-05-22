import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className="css.thead__tr">
          <th className="css.table__th">Type</th>
          <th className="css.table__th">Amount</th>
          <th className="css.table__th">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, type, id, currency }) => {
          return (
            <tr key={id} className={css.thead__tr}>
              <td className={css.table__td}>{type}</td>
              <td className={css.table__td}>{amount}</td>
              <td className={css.table__td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TransactionHistory };

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
