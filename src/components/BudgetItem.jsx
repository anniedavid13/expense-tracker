import React from 'react'
import { formatCurrency, calculateSpentByBudget, formatPercent } from '../helpers';

const BudgetItem = ({budget}) => {
    const {id,name,amount,color} = budget;
    const spent = calculateSpentByBudget(id)
  return (
    <div 
    style = {{
        "--accent": color
    }}
    className='budget'>
        <div className='progress-text'>
            <h3>
                {name}
            </h3>
            <p> {formatCurrency(amount)} Budgeted </p>
            </div>
            <progress max = {amount} value={spent} >
               {formatPercent(spent/amount)}
            </progress>
            <div className='progress-text'>
                <small>
                    {formatCurrency(spent)} Spent
                </small>
                <small>
                    {formatCurrency(amount - spent)} Remaining
                </small>
            
        </div>
    </div>
  )
}

export default BudgetItem