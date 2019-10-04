const baseUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:44322/api/v1' : 'https://localhost:44322/api/v1';

export const getHumanListUrl = () => {           
    return (        
        baseUrl + '/humans/'
    )    
}

export const getHumanChartUrl = () => {           
    return (        
        baseUrl + '/chartData/'
    )    
}

export const getHumanByIdUrl = (id) => {           
    return (        
        baseUrl + "/humans/" + id
    )    
}

export const createHumanUrl = () => {           
    return (        
        baseUrl + "/humans/"
    )    
}
