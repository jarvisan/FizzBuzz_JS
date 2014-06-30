exports.format = function(result, format) {

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