import React from 'react'
import { useState, useEffect } from 'react';
import { getAllCategories, getAccountsByCategory } from '../Service/AccountService';

const SortAccountComponent = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredAccounts, setFilteredAccounts] = useState([]);

    // 取得所有的 Category
    useEffect(() => {
        getAllCategories().then((response) => {
            setCategories(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    // 當選擇的 Category 改變時，取得對應的帳戶清單
    useEffect(() => {
        if (selectedCategory) {
            getAccountsByCategory(selectedCategory).then((response) => {
                setFilteredAccounts(response.data);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [selectedCategory]);

  return (
    <div className='container'>
    <br></br>
    <div className='card col-md-6 offest-md-3 offset-md-3'>
        <br></br>
        <h2 className='text-center'>Sort Accounts by Category</h2>
        <div className='card-body'>
            <div className='form-group mb-2 text-center'>
                <label className='form-label'>Select Category:</label>
                <select
                    className='form-control'
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value=''>Select a Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <br></br>
            {selectedCategory && (
                <div>
                    <h3 className='text-center'>Accounts in {selectedCategory}</h3>
                    <ul className='list-group'>
                        {filteredAccounts.map((account) => (
                            <li key={account.id} className='list-group-item'>
                                <strong>{account.name}</strong> - ${account.amount} ({account.expensed ? 'Expense' : 'Income'})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
</div>
  )
}

export default SortAccountComponent