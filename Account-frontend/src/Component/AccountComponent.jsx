import React, { useState } from 'react'

const AccountComponent = () => {

    const [name, setName] = useState('')
    const [category,SetCategory] = useState('')
    const [amount,setAmount] = useState('')
    const [expensed,setExpensed] = useState(false)

    function saveAccount(e){
        e.preventDefault()
        const account = {name,category,amount,expensed}
        console.log(account)
        //將資料傳給後端


    }

  return (
    <div className='container'>
        <br></br>
        <div className='card col-md-6 offest-md-3 offset-md-3'>
        <br></br>
        <h2 className='text-center'>Add Account</h2>
        <div className='card-body'>
              <form>

                <div className='form-group mb-2 text-center'>
                     <label className='form-label'>Account Title</label>
                     <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Account Name'
                            value={(name)}
                           onChange={(e)=>setName(e.target.value)}  
                       ></input>
                </div>
                <div className='form-group mb-2 text-center'>
                       <label className='form-label'>Account Category:</label>
                       <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Account Category'
                            value={(category)}
                           onChange={(e)=>SetCategory(e.target.value)}  
                       ></input>
                </div>
                <div className='form-group mb-2 text-center'>
                       <label className='form-label'>Account Amount:</label>
                       <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Account Amount'
                            value={(amount)}
                           onChange={(e)=>setAmount(e.target.value)}  
                       ></input>
                </div>
                <div className='form-group mb-2 text-center'>
                      <label className='form-label'>Account expense:</label>
                      <select
                      className='form-control'
                      value={expensed}
                      onChange={(e)=> setExpensed(e.target.value)}
                         >
                      <option value='false'>支出</option>
                      <option value='true'>收入</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={(e)=>saveAccount(e)}>Submit</button>
              </form>
            </div>
        </div>

    </div>
  )
}

export default AccountComponent