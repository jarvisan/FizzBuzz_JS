function Fizz(max, format){
  this.max = max;
  this.format = format;
  this.result = [];
}
Fizz.prototype.calc= function () {
  for(var i =1; i <= this.max; i++){
    if(i % 15 === 0)
      this.result.push( "FizzBuzz");
    else if(i % 3 === 0)
      this.result.push( "Fizz" );
    else if(i % 5 === 0)
      this.result.push( "Buzz" );
    else this.result.push( i );
  }
}

Fizz.prototype.formats= function () {
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
var holds = new Fizz(max, format);
holds.calc();
console.log(holds.formats());
