import { IPrintValues } from "../../interface/IModel";



export function formatValues(values:IPrintValues){
    // console.log(values)
    // console.log(values.value-values.count);
}


export function InitValues(values:IPrintValues){
    console.log(values)
    return values
}

export function handleIncrement(values:IPrintValues){
    if(values.total-values.value<values.count){
        let count=values.total-values.value;
        if(count===1){

            return {...values,count:4,value:values.value+count,start_at:values.value}
        }
        else{

            return {...values,count,value:values.value+count,start_at:values.value}
        }
    }
    else{
        let count=values.count;
        return {...values,count,value:values.value+count,start_at:values.value}
    }
}

export function handleDecrement(values:IPrintValues){
    let rem=values.value-values.count
    console.log(values)
    if(rem>0){
        if(rem>values.count){
            return {...values,value:values.value-values.count,start_at:values.start_at-values.count}
        }else{
            let count=values.value-values.count;
            return {...values,value:count,count:4,start_at:0}
          
        }
    }
   
}