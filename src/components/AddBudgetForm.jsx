import { CurrencyRupeeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import {Form} from 'react-router-dom'
const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
        <h2 className='h3'>
          Create Budget  
        </h2>
        <Form
        method='post'
        className='grid-sm'
        >
            <div className='grid-xs'>
                <label htmlFor='NewBudget'>Budget Name</label>
                <input type = "text" name = "NewBudget" id = "NewBudget" placeholder = "e.g. Takeout" required/>
             </div>   
                <div className='grid-xs'>
                    <label htmlFor='newBudgetAmount'> Amount</label>
                    <input type = "number" step="0.01" name='newBudgetAmount' id= "newBudgetAmount" placeholder='e.g. $200' required inputMode="decimal" />
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button type = "submit" className='btn btn--dark'>Create Budget
                <CurrencyRupeeIcon width={20} />
                </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm