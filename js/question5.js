function abc(prod){//function to check palindrome
    var r=0;//variable that contains remainder
    var z=0;//variable that contains reverse number
    while(x>=0)
    {
        var c = prod;
        r = prod%10;
        z=z*10+r;
        prod=prod/10;
    }
    if(z==c)
    {  
        return 1;
    }
    else
        return 0;
}
function def(){//function to find the largest palindrome made from the product of two 3-digit numbers.  
    var prod;
    for (var j=11;j>=10;j--)
    {
        for (var i=11;i>=10;i--)
        {
            prod=i*j;
            if(abc(prod)==1)
            {
                return prod;
                document.write(prod);
            }
            else 
                return 0;
        }
    }
}
def();