import React, { useEffect, useState } from 'react';
import { getAccountsByWeek } from '../Service/AccountService';

const WeeklyAccountComponent = () => {

    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // 取得當前年份和週數
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        const currentWeek = getWeekNumber(currentDate)

        setYear(currentYear)
        setWeek(currentWeek)
        console.log('year:'+year+' week:'+week)
        getWeeklyAccount(currentYear,currentWeek)
    },[year,week]);

    function getWeeklyAccount(year,week){
        getAccountsByWeek(year,week).then((response)=>{
            console.log(response.data)
            setAccounts(response.data)
        }).catch(error=>{
            console.error(error)
        })
    }

    // 取得張前週數
    const getWeekNumber = (date) => {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    };


  return (
    <div className='container'>
    <h2 className='text-center'>Weekly Account List for Year {year}, Week {week}</h2>

    <div className='mt-4'>
        {accounts.length > 0 ? (
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Category</th>
                        <th>Account Amount</th>
                        <th>Account Expense</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account.id}>
                            <td>{account.name}</td>
                            <td>{account.category}</td>
                            <td>{account.amount}</td>
                            <td>{account.expensed ? '支出' : '收入'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <div className='text-center'>
                <p>No accounts found for this week.</p>
            </div>
        )}
    </div>
</div>
  )

}

export default WeeklyAccountComponent