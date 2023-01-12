import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({data}) => {
    return(
        <Card className='expenses'>
            {data.map(({id, title, amount, date}) =>
                <ExpenseItem
                    key={id}
                    title={title}
                    amount={amount}
                    date={date} />
            )}
        </Card>
    )
}

export default Expenses;