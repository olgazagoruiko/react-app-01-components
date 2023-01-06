import React from "react";
import PropTypes from "prop-types";
import styles from "./Transactions.module.css";

function Transactions({items}) {
  return (
    <>
      <div className={styles.transaction}>
        <table className={styles.transaction_history}>
          <thead className={styles.head_table}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.type} </td>
                <td>{elem.amount}</td>
                <td>{elem.currency} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency:PropTypes.string.isRequired
  
};
export default Transactions;