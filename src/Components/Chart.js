import React, {useState, useEffect} from 'react'
import DailyData from '../api'
import {Line, Bar} from 'react-chartjs-2'

function Chart() {  

    const [dailyData, setDailyData] = useState({})

    useEffect( async () =>{
        setDailyData(await DailyData())
    },[])

    const lineChart = (
        <Line 
            data={{
                labels:'',
                datsets: [{},{}]
            }}
        />
    )

    return (
        <div>
            
        </div>
    )
}

export default Chart
