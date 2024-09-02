import { useState , useEffect } from 'react'
import { addAccount, getAccount, updateAccount } from '../Service/AccountService'
import { useNavigate,useParams } from 'react-router-dom'

const AccountComponent = () => {

    const [name, setName] = useState('')
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState('')
    const [expensed,setExpensed] = useState(false)

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
      
      if(id){
        getAccount(id).then((res)=>{
          //console.log("This is the res"+res.data)
          setName(res.data.name)
          setCategory(res.data.category)
          setAmount(res.data.amount)
          setExpensed(res.data.expensed)
        }).catch(error =>{
          console.error(error)
        })
      }
    },[id])


    function saveAccount(e){
        e.preventDefault()

        if(id){
          const account = {id,name,category,amount,expensed}
          updateAccount(id,account).then((res)=>
            navigate('/')
          ).catch(error =>{
           console.log(error)
          })

        }else{
          const account = {name,category,amount,expensed}
          console.log(account)
          //將資料傳給後端
          navigate('/')
          addAccount(account).then((response)=>{
            console.log(response.data)
            }).catch(error =>{
            console.log(error)
          })
        }
      }

      function pageTitle(){
        if(id){
          return <h2 className='text-center' >Update Account</h2>
        }else{
          return <h2 className='text-center'>Add Todo</h2>
        }
      }


    

  return (
    <div className='container'>
        <br></br>
        <div className='card col-md-6 offest-md-3 offset-md-3'>
        <br></br>
        {pageTitle()}
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
                           onChange={(e)=>setCategory(e.target.value)}  
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