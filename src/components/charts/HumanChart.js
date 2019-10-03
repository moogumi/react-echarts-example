import React from 'react'
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';

const HumanChart = ({ humans }) =>{

    const compareAge = ( a, b ) => {        
        if (a.age < b.age )
          return -1;        
        if (a.age > b.age )
          return 1;        
        return 0;
      }

    const sorted = humans && [...humans].sort(compareAge);    
    const ages = [...new Set(sorted.map( human =>  { return( human.age + " y.o." ) }))];
 
    var humansByAge = sorted.reduce((p, c) => {        
        if (!p.hasOwnProperty(c.age)) {
          p[c.age] = 0;
        }
        p[c.age]++;
        return p;
      }, {});        

    var counts = Object.keys(humansByAge).map(k => { return humansByAge[k]});        

    const getOption = () =>{
        return {                        
            legend: {
                data:['Humans by Ages']
            },
            xAxis: {
                data: ages
            },
            yAxis: {
                interval: 1,
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
        <div className="row">
            <div className="col s12">
                <h4 className="light-green-text">Population chart</h4>                            
            </div>
        </div>
        <ReactEcharts
            option={getOption()}
            notMerge={true}
            lazyUpdate={true}                            
            />
        </div>            
    )
}
const mapStateToProps = (state) => {        
    console.log(state);
    return {                
        humans: state.humans.list
    }
}

export default  connect(mapStateToProps)(HumanChart);