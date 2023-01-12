import './Price.css';

const Price = ({amount}) => {
    return(
        <div className="expense-item__price">
            ${amount}
        </div>
    )
}

export default Price;