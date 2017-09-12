import {Bar} from 'react-chartjs-2';
import React, { Component } from 'react';

class Chart extends Component{
    constructor(){
        super();
        this.state = {
            dataChart: {
                labels: ['Gain', 'Spend'],
                datasets: [{
                    label: 'Gained',
                    data: [0, 0],
                    backgroundColor: [
                        'rgba(7, 146, 0, 0.73)',
                        'rgba(191, 0, 0, 0.65)'
                    ]
                }]
            }
        }
    };
    componentWillReceiveProps(props){
        let itemArr = props.itemArr;
        let gain = itemArr.filter(item=>item.moneyType === 'gain');
        let spend = itemArr.filter(item=>item.moneyType === 'spend');
        let summaryGain = gain.reduce((sum, gain)=> sum + gain.money,0);
        let summarySpend = spend.reduce((sum, gain)=> sum + gain.money,0);
        this.setState({
            dataChart: { ...this.state.dataChart,
                datasets: [{
                    label: 'Gained',
                    data: [summaryGain, summarySpend],
                    backgroundColor: [
                        'rgba(7, 146, 0, 0.73)',
                        'rgba(191, 0, 0, 0.65)'
                    ]
                }]
            }
        })
    }
    render(){
        const { itemArr } = this.props;
        return(
            <Bar
                data = {this.state.dataChart}
                options = {{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }}
                width={100}
                height={50}
            />
        )
    }
}

export default Chart
