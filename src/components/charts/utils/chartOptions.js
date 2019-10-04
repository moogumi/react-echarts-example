import React, { Component } from 'react';

const compareAge = ( a, b ) => {        
    if (a.age < b.age )
      return -1;        
    if (a.age > b.age )
      return 1;        
    return 0;
}

export const getChartData = (humanChart) => {
    const sorted = humanChart && [...humanChart].sort(compareAge);    
    const ages = sorted && [...new Set(sorted.map( human =>  { return( human.age + " y.o." ) }))];
 
    const humansByAge = sorted && sorted.reduce((p, c) => {        
        if (!p.hasOwnProperty(c.age)) {
            p[c.age] = 0;
        }
        p[c.age]++;
        return p;
      }, {});        
    const counts = humansByAge && Object.keys(humansByAge).map(k => { return humansByAge[k]});  
    return [ages, counts];
}

export const getChartOptions = (xData, yData) =>{
    return {                        
        legend: {
            data:['Humans by Ages']
        },
        xAxis: {
            data: xData,
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
            data: yData
        }],
        color: ['#8bc34a']
    };
    
}