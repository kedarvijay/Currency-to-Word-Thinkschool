function convert(){
var n = document.getElementById("fnum").value;
if(n==0 || n>999999999){
    alert("Enter greater than '0' and less  than 999999999")

}
units=["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    tens=[" ", " ", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    high=["Lakh Crores", "Lakh Crore", "Hundred Crores", "Hundred Crore", "Crores", "Crore", "Lakh", "Thousands", "Thousand", "Hundred", "Hundred And "]
    var lakhCrores=(~~(n/100000000000)%100)
    var hundredCrores=(~~(n/1000000000)%100)
    var crore=(~~(n/10000000)%100)
    var lakh = (~~(n/100000)%100)
    var thousand = (~~(n/1000)%100)
    var hundred=(~~(n/100)%10)
    var rest=(n%100)
    var finalword=""
    if(crore>0){
        if(crore>9 && crore<=19){
            finalword=finalword+" "+units[crore]+" "+high[4]
            
        }
        else if(crore>19){
            finalword=finalword+" "+tens[~~(crore/10)]+" "+units[crore%10]+" "+high[4]
    
        }
        else{
            finalword=finalword+" "+units[crore%10]+" "+high[5]
    
    
        }
    }
    if(lakh>0){
        if(lakh>9 && lakh<=19){
            finalword=finalword+" "+units[lakh]+" "+high[6]
            
        }
        else if(lakh>19){
            finalword=finalword+" "+tens[~~(lakh/10)]+" "+units[lakh%10]+" "+high[6]
    
        }
        else{
            finalword=finalword+" "+units[lakh%10]+" "+high[6]
    
    
        }
    }
    if(thousand>0){
        if(thousand>9 && thousand<=19){
            finalword=finalword+" "+units[thousand]+" "+high[8]
        }
        else if(thousand>19){
            finalword=finalword+" "+tens[~~(thousand/10)]+" "+units[thousand%10]+" "+high[8]
    
        }
        else{
            finalword=finalword+" "+units[thousand%10]+" "+high[8]
    
        }
    }
    if(hundred>0){
        if(~~(hundred/100)){
            finalword=finalword+" "+units[hundred%10]+" "+high[9]
        }
        else{
            finalword=finalword+" "+units[hundred%10]+" "+high[9]
    
        }
    }
    if(rest>19){
        finalword=finalword+" "+tens[~~(rest/10)]+" "+units[rest%10]
    
    }
    else{
        finalword=finalword+units[rest]
    }
    output="Rs. "+finalword+" Only"

document.getElementById("outputa").innerHTML=output;
}