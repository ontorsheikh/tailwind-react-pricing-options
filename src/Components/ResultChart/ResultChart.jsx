import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 78,
    "chemistry": 82,
    "math": 90
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 65,
    "chemistry": 70,
    "math": 75
  },
  {
    "id": 3,
    "name": "Sultana",
    "physics": 88,
    "chemistry": 91,
    "math": 95
  },
  {
    "id": 4,
    "name": "Hasan",
    "physics": 55,
    "chemistry": 60,
    "math": 68
  },
  {
    "id": 5,
    "name": "Farhana",
    "physics": 80,
    "chemistry": 77,
    "math": 85
  },
  {
    "id": 6,
    "name": "Nayeem",
    "physics": 92,
    "chemistry": 89,
    "math": 94
  },
  {
    "id": 7,
    "name": "Mitu",
    "physics": 70,
    "chemistry": 74,
    "math": 82
  },
  {
    "id": 8,
    "name": "Tariq",
    "physics": 60,
    "chemistry": 65,
    "math": 58
  },
  {
    "id": 9,
    "name": "Anika",
    "physics": 85,
    "chemistry": 90,
    "math": 87
  },
  {
    "id": 10,
    "name": "Rafiq",
    "physics": 72,
    "chemistry": 68,
    "math": 74
  }
]


const ResultChart = () => {
    return (
        <div className=''>
           <LineChart width={300} height={500} data ={resultData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey="chemistry" stroke='green'></Line>
            <Line dataKey={'physics'} stroke='red'></Line>
            </LineChart> 
        </div>
    );
};

export default ResultChart;