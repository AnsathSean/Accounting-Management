import React, { useEffect, useState } from 'react'
import { deleteAccount, getAllAccounts } from '../Service/AccountService'
import {useNavigate} from 'react-router-dom'

function ListAccountCompinent() {

    const [accounts,setAccounts] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        listAccounts();
    },[])

    function listAccounts(){
        getAllAccounts().then((response)=>{
            setAccounts(response.data);
        }).catch(error =>{
            console.error(error)
        })
    }

    function addNewAccount(){
     navigate('/add-account')
    }

    function updateAccount(id){
        // 更新Account
        console.log(id)
        navigate(`/update-account/${id}`)
    }

    function deletedAccount(id){
        //刪除Account
        deleteAccount(id).then(()=>{
            listAccounts()
        }).catch(error =>{
            console.log(error)
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewAccount}>Add Account</button>
        <div>
          <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Category</th>
                        <th>Account amount</th>
                        <th>Account expense</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(account => 
                            <tr key={account.id}>
                                <td>{account.name}</td>
                                <td>{account.category}</td>
                                <td>{account.amount}</td>
                                <td>{account.expesned ? '收入':'支出'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=> updateAccount(account.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={()=> deletedAccount(account.id)} style={{marginLeft:"10px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListAccountCompinent