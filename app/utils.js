/**
 * @returns {string} A random string of characters
 */
export const generateId = function() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const bgColor = function(){
  let bg = (Math.floor(Math.random() * 5));
  let result = "";
  switch(bg){
    case 0 : result = "bg-purp";
    break;
    case 1 : result = "bg-blue";
    break;
    case 2 : result = "bg-green";
    break;;
    case 3 : result = "bg-pink";
    break;
    case 4 : result = "bg-lav";
    break;
  }
  return result;
}
