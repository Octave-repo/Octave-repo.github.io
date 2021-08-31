function getStars(nbStars = 0){
    let str = '<a>\n';
    let isDecimal = nbStars % 1
    for (let i = 0 ; i < nbStars - isDecimal ; i++)
      str += '<i class="fas fa-star"></i>\n';
    if (isDecimal)
      str += '<i class="fas fa-star-half"></i>\n';
    str += '</a>';
      document.write(str);
}
function getAge(naissance = '2001/04/26'){
  var years = new Date(new Date() - new Date(naissance)).getFullYear()- 1970;
  document.write(years);
}