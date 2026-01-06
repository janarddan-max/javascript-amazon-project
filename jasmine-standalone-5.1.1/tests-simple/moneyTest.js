import { formatCurrency } from "../../scripts/utils/money.js";

console.log('converts cents into dollars');

if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
}else{
    console.log('failed');
}