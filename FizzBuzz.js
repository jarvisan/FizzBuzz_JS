exports.fizzbuzz = function(max, format) {

  var result = []

  for(var i = 1; i <= max; i++){
    
    if( i% 15 === 0 )
      result[i-1] = "FizzBuzz" 
    else if( i% 3 === 0 )
      result[i-1] = "Fizz"
    else if( i% 5 === 0 )
      result[i-1] = "Buzz"
    else result[i-1] = i;

  }
  
  if (format === "plain")
    return result.join(",");
  
  if (format === "json")
    return JSON.stringify(result);

  if (format === "html"){
    result[0] = "<li>"+result[0]
    result[result.length-1] = result[result.length-1] + "</li>"
    return result.join("</li>\n<li>")
  }
}
