import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import PageTitle from '../layout/PageTitle';
import { getHumanListUrl } from '../../api/apiHuman';
import axios from 'axios';


const PopulationChart = () =>{

    const [humans, setHumans] = useState([]);
    
    useEffect(() => {        
        const fetchData = async () => {            
            const result = await axios.get(getHumanListUrl());       
            setHumans(result.data.data);            
        }
        fetchData();
    }, []);

    const compareAge = ( a, b ) => {        
        if (a.age < b.age )
          return -1;        
        if (a.age > b.age )
          return 1;        
        return 0;
      }

    const sorted = humans && [...humans].sort(compareAge);    
    const ages = sorted && [...new Set(sorted.map( human =>  { return( human.age + " y.o." ) }))];
 
    const humansByAge = sorted && sorted.reduce((p, c) => {        
        if (!p.hasOwnProperty(c.age)) {
          p[c.age] = 0;
        }
        p[c.age]++;
        return p;
      }, {});        

      const counts = humansByAge && Object.keys(humansByAge).map(k => { return humansByAge[k]});        

    const getOption = () =>{
        return {                        
            legend: {
                data:['Humans by Ages']
            },
            xAxis: {
                data: ages,
                name: "age",
                axisLine :{
                    lineStyle :{
                        color: "#616161",
                        width: 2
                    }
                  },
                  axisLabel :{           
                    color: "#616161",         
                    fontWeight : "bold",                        
                  }                  
            },
            yAxis: {
                interval: 1,
                name: "population",
                axisLine :{
                  lineStyle :{
                      color: "#616161",
                      width: 2
                  }
                },
                axisLabel :{         
                    color: "#616161",           
                    fontWeight : "bold",                        
                }              
            },
            series: [{
                name: 'Humans',
                type: 'bar',
                data: counts
            }],
            color: ['#8bc34a']
        };
        
    }
    
    return (
        <div className="container"> 
          <PageTitle pageTitle={"Population Chart"} />
          <ReactEcharts option={ getOption() } />
        </div>            
    )
}

export default PopulationChart;