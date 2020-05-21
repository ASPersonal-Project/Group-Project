const intialSatate = {
    ownerProfile:[]
}


export default (state=intialSatate,action) => {
    const {type,payload} = action;
    
    switch(type){
        default:
            return state;
    }
}