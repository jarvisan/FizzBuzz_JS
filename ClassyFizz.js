function Fizz(max, format){
  this.max = max;
  this.format = format;
  this.result = this.calc();
  
}
Fizz.prototype.calc= function () {
  result = [];
  for(var i =1; i <= this.max; i++){
    if(i % 15 === 0)
      result.push( "FizzBuzz");
    else if(i % 3 === 0)
      result.push( "Fizz" );
    else if(i % 5 === 0)
      result.push( "Buzz" );
    else result.push( i );
  }
  return result;
}

Fizz.prototype.out= function () {
  if (this.format === "plain")
    return this.result.join(",");
  
  if (this.format === "json")
    return JSON.stringify(this.result);

  if (this.format === "html"){
    this.result[0] = "<li>"+this.result[0]
    this.result[this.result.length-1] = this.result[this.result.length-1] + "</li>"
    return this.result.join("</li>\n<li>")
  }
}

var max = process.argv[2];
var format = process.argv[3];
var fizzbuzz = new Fizz(max, format);
console.log(fizzbuzz.out());
