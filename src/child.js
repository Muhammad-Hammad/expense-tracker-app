import { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

function Child() {
  let { transactions, addTransaction } = useContext(TransactionContext);
  let { deleteTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(newAmount) === 0) {
      alert("Please Enter Correct Value");
      e.target.reset();
      return false;
    }

    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    e.target.reset();
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>
        <h3>
          Your Balance <br /> <span className="balance"> Rs.{getIncome() + getExpense()}.00 </span>
        </h3>

        <div className="expense-container">
          <h3 className="income">
            INCOME <br /> Rs.{getIncome()}
          </h3>
          <h3 className="expense">
            EXPENSE <br /> Rs.{getExpense()}
          </h3>
        </div>
        <h3>
          History <hr />
        </h3>
        <ul className="transaction-list">
          {transactions.map((transObj, ind) => {
            return (
              <li
                key={ind}
                className={transactions[ind].amount > 0 ? "plus" : "minus"}
              >
                <span>
                  <button
                    className="btn"
                    onClick={() => deleteTransaction(ind)}
                  >
                    {" "}
                    <i className="fas fa-trash-alt icon trash-icon"></i>
                  </button>
                   {transObj.desc}
                </span>
                <span>Rs.{transObj.amount}</span>
              </li>
            );
          })}
        </ul>
        <h3>Add new Transaction</h3>
        <hr />

        <form className="transaction-form" onSubmit={handleSubmit}>
          <label>
            Enter Description <br />
            <input
              type="text"
              onChange={(ev) => setDesc(ev.target.value)}
              required
              placeholder="For e.g: Freelancing"
            />
          </label>
          <br />
          <label>
            Enter Amount <br />
            <input
              type="number"
              onChange={(ev) => setAmount(ev.target.value)}
              required
              placeholder="For e.g: 300"
            />
          </label>
          <br />
          <input type="submit" value="Add transaction" className="submit" />
        </form>
      </div>
      <div className="empty">.</div>
    </>
  );
}
export default Child;
