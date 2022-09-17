export const diffTime = date =>{
    const seconds = Math.floor((new Date() - new Date(date))/1000); // Convert ms to s
    
    let res = Math.floor(seconds / 31536000); //1 year = 31536000 s
    if(res > 1) return `${res} years`;
    
    res = Math.floor(seconds/2592000); // 1 month = 30 days = 2592000 s
    if(res > 1) return `${res} months`;
    
    res = Math.floor(seconds / 86400); // 1 day = 86400 s
    if(res > 1) return `${res} days`;
    
    res = Math.floor(seconds / 3600); // 1 hour = 3600 s
    if(res > 1) return `${res} hours`;
    
    res = Math.floor(seconds / 60); // 1 hour = 3600 s
    if(res > 1) return `${res} minutes`; // 1 minute = 60 s
    
    return `${Math.floor(seconds)} seconds`


}