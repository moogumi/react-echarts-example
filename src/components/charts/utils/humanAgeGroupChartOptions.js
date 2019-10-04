const compareAge = (a, b) => {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}

export const getHumanAgeGroupChartData = (humanChart) => {
    const sorted = humanChart && [...humanChart].sort(compareAge);
    const ages = sorted && sorted.map((human) => (human.age + " y.o."));
    const counts = sorted && sorted.map((human) => (human.count));
    return [ages, counts];
}

export const getHumanAgeGroupChartOptions = (xData, yData) => {
    return {
        legend: {
            data: ['Humans by Ages']
        },
        xAxis: {
            data: xData,
            name: "age",
            axisLine: {
                lineStyle: {
                    color: "#616161",
                    width: 2
                }
            },
            axisLabel: {
                color: "#616161",
                fontWeight: "bold",
            }
        },
        yAxis: {
            interval: 1,
            name: "population",
            axisLine: {
                lineStyle: {
                    color: "#616161",
                    width: 2
                }
            },
            axisLabel: {
                color: "#616161",
                fontWeight: "bold",
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