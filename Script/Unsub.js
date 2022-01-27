import COMMAND_STRING from "./secrets.js";

function load(email) {
 $.ajax({
    url: "https://app.bluefolder.com/api/2.0/customers/list.aspx",
   headers: {
        'Authorization':'Basic '+COMMAND_STRING,
        'Content-Type':'text/xml'
    },
    type: "GET",
    data: "<request>" +
              "<customerList>" +
                "<listType>basic</listType>" +
              "</customerList>" +
          "</request>",
    success: function (result) {
      console.log(result); 
    },
    error: function (error) {
      console.log(result);
    }  
 })
  
}




/*
$.ajax({
    url: 'YourRestEndPoint',
    headers: {
        'Authorization':'Basic xxxxxxxxxxxxx',
        'X-CSRF-TOKEN':'xxxxxxxxxxxxxxxxxxxx',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: YourData,
    success: function(data){
      console.log('succes: '+data);
    }
  });
  */
