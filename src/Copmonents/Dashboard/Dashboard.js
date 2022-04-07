import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className="dashboard">
            <h2>Report</h2>
            <div className='chart'>
            <div className='sell-chart'>
                <LineChart width={400} height={500} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="sell"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
                <h4>Sells Report</h4>
            </div>
            <div className='revenue-chart'>
                <BarChart width={600} height={500} data={data}>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"revenue"}></YAxis>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
                </BarChart>
                <h4>Revenue Report</h4>
            </div>
        </div>
        </div>

    );
};

export default Dashboard;