import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getAccountsByWeek } from '../Service/AccountService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
    });


    useEffect(() => {
        // 取得當前年份和週數
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentWeek = getWeekNumber(currentDate);

        setYear(currentYear);
        setWeek(currentWeek);

        // 取得該週的帳戶資料並計算每天的金額加總
        getAccountsByWeek(currentYear, currentWeek).then((response) => {
            const dailyTotals = calculateDailyTotals(response.data);
            setChartData({
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: 'Daily Expenses',
                        data: dailyTotals,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            });
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    // 計算每天的金額加總
    const calculateDailyTotals = (accounts) => {
        const totals = Array(7).fill(0); // 初始化每週 7 天的金額加總為 0
        accounts.forEach((account) => {
            const dayOfWeek = new Date(account.createDate).getDay(); // 取得當前日期是星期幾 (0 是 Sunday)
            const index = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 將 Sunday 對應到 index 6
            totals[index] += account.amount;
        });
        return totals;
    };

    // Helper function to get the week number
    const getWeekNumber = (date) => {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    };

    return (
        <div className='container'>
            <h2 className='text-center'>Weekly Expense Chart</h2>
            <div className='d-flex justify-content-center'>
                <div className='chart-container' style={{ height: '400px', width: '600px' }}>
                    <Bar data={chartData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
