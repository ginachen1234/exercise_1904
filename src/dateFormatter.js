export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  var date = new Date(dateToFormatTimeMillis);
  var dateCurrent = new Date(systemDateTime);

  if(dateCurrent.getFullYear()!= getFullYear()||
    dateCurrent.getMonth()!= getMonth()||
    dateCurrent.getDate()!= getDate()||) {

    var DD = Date.getDate()<10?"0"+ date.getDate():date.getDate();
    var MM =Date.getMonth()<10?"0"+ date.getMonth():date.getMonth();
    car YYYY = Date.getFullYear();

    return (DD +"/" + MM +"/"+ ("0000" + YYYY).slice(-4))
  }

else
  {
    return "TODAY";

}

};
