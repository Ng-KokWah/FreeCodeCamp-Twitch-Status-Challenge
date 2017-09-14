var returned1, returned2, returned3, returned4, returned5, returned6, returned7, returned8;
var arrofchannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

//ESL_SC2
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[0]+'?callback=?', function(data) {
  returned1 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream1 = returned1.indexOf("stream");
  
  document.getElementById("name1").innerHTML = "<a href = \"https://www.twitch.tv/esl_sc2\" target = \"_blank\">ESL_SC2</a>";
   if(returned1.includes("game")) {
     var posofgame1 = returned1.indexOf("game");
      var temp1 = returned1.substr(posofgame1+7, 20);
  
      var arr1 = temp1.split('\"');
     
     var posofstats1 = returned1.indexOf("status");
      var temp10 = returned1.substr(posofstats1+7, 70);
     var arr10 = temp10.split(',');
     document.getElementById("content1").innerHTML = arr1[0] + arr10[0];
   }
  else {
    document.getElementById("content1").innerHTML = "NIL";
  }
  if(returned1.substr(posofstream1+8, 5).includes("null")) {
    document.getElementById("streaming1").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming1").innerHTML = "Online";
  }
});

//OgamingSC2
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[1]+'?callback=?', function(data) {
  returned2 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream2 = returned2.indexOf("stream");
  
  document.getElementById("name2").innerHTML = "<a href = \"https://www.twitch.tv/ogamingsc2\" target = \"_blank\">OgamingSC2</a>";
  
   if(returned2.includes("game")) {
      var posofgame2 = returned2.indexOf("game");
      var temp2 = returned2.substr(posofgame2+7, 20);
  
      var arr2 = temp2.split('\"');
      var posofstats2 = returned2.indexOf("status");
      var temp20 = returned2.substr(posofstats2+7, 70);
     var arr20 = temp20.split(',');
     document.getElementById("content2").innerHTML = arr2[0] + arr20[0];
   }
  else {
    document.getElementById("content2").innerHTML = "NIL";
  }
  if(returned2.substr(posofstream2+8, 5).includes("null")) {
    document.getElementById("streaming2").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming2").innerHTML = "Online";
  }
});

//cretetion
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[2]+'?callback=?', function(data) {
  returned3 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream3 = returned3.indexOf("stream");
  
  document.getElementById("name3").innerHTML = "<a href = \"https://www.twitch.tv/cretetion\" target = \"_blank\">Cretetion</a>";
  
  if(returned3.includes("game")) {
    var posofgame3 = returned3.indexOf("game");
    var temp3 = returned3.substr(posofgame3+7, 20);
    var arr3 = temp3.split('\"');
    var posofstats3 = returned3.indexOf("status");
      var temp30 = returned3.substr(posofstats3+7, 70);
     var arr30 = temp30.split(',');
     document.getElementById("content3").innerHTML = arr3[0] + arr30[0];
  }
  else {
    document.getElementById("content3").innerHTML = "NIL";
  }
  
  if(returned3.substr(posofstream3+8, 5).includes("null")) {
    document.getElementById("streaming3").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming3").innerHTML = "Online";
  }
});

//freecodecamp
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[3]+'?callback=?', function(data) {
  returned4 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream4 = returned4.indexOf("stream");
  
  document.getElementById("name4").innerHTML = "<a href = \"https://www.twitch.tv/freecodecamp\" target = \"_blank\">Freecodecamp</a>";
  
  if(returned4.includes("game")) {
    var posofgame4 = returned4.indexOf("game");
    var temp4 = returned4.substr(posofgame4+7, 20);
    var arr4 = temp4.split('\"');
    var posofstats4 = returned4.indexOf("status");
      var temp40 = returned4.substr(posofstats4+7, 70);
     var arr40 = temp40.split(',');
     document.getElementById("content4").innerHTML = arr4[0] + arr40[0];
  }
  else {
    document.getElementById("content4").innerHTML = "NIL";
  }
  
  if(returned4.substr(posofstream4+8, 5).includes("null")) {
    document.getElementById("streaming4").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming4").innerHTML = "Online";
  }
});

//storbeck
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[4]+'?callback=?', function(data) {
  returned5 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream5 = returned5.indexOf("stream");
  
  document.getElementById("name5").innerHTML = "<a href = \"https://www.twitch.tv/storbeck\" target = \"_blank\">Storbeck</a>";
  
  if(returned5.includes("game")) {
    var posofgame5 = returned5.indexOf("game");
    var temp5 = returned5.substr(posofgame5+7, 20);
    var arr5 = temp5.split('\"');
    var posofstats5 = returned5.indexOf("status");
      var temp50 = returned5.substr(posofstats5+7, 70);
     var arr50 = temp50.split(',');
     document.getElementById("content5").innerHTML = arr5[0] + arr50[0];
  }
  else {
    document.getElementById("content5").innerHTML = "NIL";
  }
  
  if(returned5.substr(posofstream5+8, 5).includes("null")) {
    document.getElementById("streaming5").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming5").innerHTML = "Online";
  }
});

//habathcx
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[5]+'?callback=?', function(data) {
  returned6 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream6 = returned6.indexOf("stream");
  
  document.getElementById("name6").innerHTML = "<a href = \"https://www.twitch.tv/habathcx\" target = \"_blank\">Habathcx</a>";
  
  if(returned6.includes("game")) {
    var posofgame6 = returned6.indexOf("game");
    var temp6 = returned6.substr(posofgame6+7, 20);
    var arr6 = temp6.split('\"');
    var posofstats6 = returned6.indexOf("status");
      var temp60 = returned6.substr(posofstats6+7, 70);
     var arr60 = temp60.split(',');
     document.getElementById("content6").innerHTML = arr6[0] + arr60[0];
  }
  else {
    document.getElementById("content6").innerHTML = "NIL";
  }
  
  if(returned6.substr(posofstream6+8, 5).includes("null")) {
    document.getElementById("streaming6").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming6").innerHTML = "Online";
  }
});

//RobotCaleb
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[6]+'?callback=?', function(data) {
  returned7 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream7 = returned7.indexOf("stream");
  
  document.getElementById("name7").innerHTML = "<a href = \"https://www.twitch.tv/robotcaleb\" target = \"_blank\">RobotCaleb</a>";
  
  if(returned7.includes("game")) {
    var posofgame7 = returned7.indexOf("game");
    var temp7 = returned7.substr(posofgame7+7, 20);
    var arr7 = temp7.split('\"');
    var posofstats7 = returned7.indexOf("status");
      var temp70 = returned7.substr(posofstats7+7, 70);
     var arr70 = temp70.split(',');
     document.getElementById("content7").innerHTML = arr7[0] + arr70[0];
  }
  else {
    document.getElementById("content7").innerHTML = "NIL";
  }
  
  if(returned7.substr(posofstream7+8, 5).includes("null")) {
    document.getElementById("streaming7").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming7").innerHTML = "Online";
  }
});

//noobs2ninjas
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+arrofchannels[7]+'?callback=?', function(data) {
  returned8 = JSON.stringify(data);
  //var temp = returned1.split('\"');
  //document.getElementById("streaming1").innerHTML = returned1;
  var posofstream8 = returned8.indexOf("stream");
  
  document.getElementById("name8").innerHTML = "<a href = \"https://www.twitch.tv/noobs2ninjas\" target = \"_blank\">Noobs2ninjas</a>";
  
  if(returned8.includes("game")) {
    var posofgame8 = returned8.indexOf("game");
    var temp8 = returned8.substr(posofgame8+7, 20);
    var arr8 = temp8.split('\"');
    var posofstats8 = returned8.indexOf("status");
      var temp80 = returned8.substr(posofstats8+7, 70);
     var arr80 = temp80.split(',');
     document.getElementById("content8").innerHTML = arr8[0] + arr80[0];
  }
  else {
    document.getElementById("content8").innerHTML = "NIL";
  }
  
  if(returned8.substr(posofstream8+8, 5).includes("null")) {
    document.getElementById("streaming8").innerHTML = "Offline";
  }
  else {
    document.getElementById("streaming8").innerHTML = "Online";
  }
});

//use this to hide any one of the rows should the individual not be streaming at the time
//the rows id are first, sec, third, fourth, fifth, sixth, seven, eight
//document.getElementById("first").style.display = "none";

function online() {
  var a = document.getElementById("streaming1").innerHTML;
  var b = document.getElementById("streaming2").innerHTML;
  var c = document.getElementById("streaming3").innerHTML;
  var d = document.getElementById("streaming4").innerHTML;
  var e = document.getElementById("streaming5").innerHTML;
  var f = document.getElementById("streaming6").innerHTML;
  var g = document.getElementById("streaming7").innerHTML;
  var h = document.getElementById("streaming8").innerHTML;
  
   while(a == "Offline" || b == "Offline" || c == "Offline" ||d == "Offline" || e == "Offline" ||f == "Offline" ||g == "Offline" || h == "Offline") {
    if(a == "Offline") {
      document.getElementById("first").style.display = "none";
      a = "null";
    }
    else if(b == "Offline") {
      document.getElementById("sec").style.display = "none";
      b = "null";        
    }
    else if(c == "Offline") {
      document.getElementById("third").style.display = "none";
      c = "null";  
    }
    else if(d == "Offline") {
      document.getElementById("fourth").style.display = "none";
      d = "null";  
    }
    else if(e == "Offline") {
      document.getElementById("fifth").style.display = "none";
      e = "null";  
    }
    else if(f == "Offline") {
      document.getElementById("sixth").style.display = "none";
      f = "null";  
    }
    else if(g == "Offline") {
      document.getElementById("seven").style.display = "none";
      g = "null";  
    }
    else if(h == "Offline") {
      document.getElementById("eight").style.display = "none";
      h = "null";  
    }
  }
}

function offline() {
  document.getElementById("tb").style.marginLeft = "70px";
  var a1 = document.getElementById("streaming1").innerHTML;
  var b1 = document.getElementById("streaming2").innerHTML;
  var c1 = document.getElementById("streaming3").innerHTML;
  var d1 = document.getElementById("streaming4").innerHTML;
  var e1 = document.getElementById("streaming5").innerHTML;
  var f1 = document.getElementById("streaming6").innerHTML;
  var g1 = document.getElementById("streaming7").innerHTML;
  var h1 = document.getElementById("streaming8").innerHTML;
  
 
    while(a1 == "Online" || b1 == "Online" || c1 == "Online" ||d1 == "Online" || e1 == "Online" ||f1 == "Online" ||g1 == "Online" || h1 == "Online") {
    if(a1 == "Online") {
      document.getElementById("first").style.display = "none";
      a1 = "null";
    }
    else if(b1 == "Online") {
      document.getElementById("sec").style.display = "none";
      b1 = "null";        
    }
    else if(c1 == "Online") {
      document.getElementById("third").style.display = "none";
      c1 = "null";  
    }
    else if(d1 == "Online") {
      document.getElementById("fourth").style.display = "none";
      d1 = "null";  
    }
    else if(e1 == "Online") {
      document.getElementById("fifth").style.display = "none";
      e1 = "null";  
    }
    else if(f1 == "Online") {
      document.getElementById("sixth").style.display = "none";
      f1 = "null";  
    }
    else if(g1 == "Online") {
      document.getElementById("seven").style.display = "none";
      g1 = "null";  
    }
    else if(h1 == "Online") {
      document.getElementById("eight").style.display = "none";
      h1 = "null";  
    }
    
  }
}