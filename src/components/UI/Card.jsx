import { CARD } from '../lib/classNames';
import './Card.css';

const Card = ({children, className}) => {
    const classes = [CARD, className].join(' ')
    return(
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card;