const mario = (n)=>{
    if(1<n && n< 8){
        for ( i = 0; i < n; i++)
        {
            let sharp = ""
            for ( j = 0; j <= n; j++)
            {
                if (n - i <= j)
                {
                   sharp = sharp + "#";
                }else{
                    sharp = sharp + " "
                }
            }
            console.log(sharp+" " +[...sharp].reverse().join(""))
        }
    }else{
       return "n is not valid"
    }

    return ""
}
console.log(mario(12));