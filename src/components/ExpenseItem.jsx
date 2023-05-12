import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>May 12th 2023</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <p className="expense-item__price">$294.67</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
