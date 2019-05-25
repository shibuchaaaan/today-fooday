//変数宣言
  var startBtn = document.getElementById('start');
  var isStart = false;
  var slot =document.getElementById('slot');
  var todayFood ='';
  var intervalID = -1;
  var foods = [];
  var btn = document.getElementById('btn');

//ごはんを配列に羅列
  foods = ['ラーメン','焼肉','牛丼','パスタ','串カツ',
              '焼きそば','パン','中華料理','焼き魚','ハンバーグ',
              'ハンバーガー','寿司','天ぷら','うどん','蕎麦','サラダ',
              '鍋','すき焼き','豚キムチ','しゃぶしゃぶ'];

//スタートボタンを押した時の処理
function clickedStart(){
  'use strict';
  isStart = true;
  startBtn.disabled = true;
  intervalID = setInterval(function(){
    if(isStart === true){
      todayFood = foods[Math.floor(Math.random() * foods.length)];
      slot.className = 'name';
      document.getElementById("isFood").innerHTML = todayFood;
    }
  },100);
}

//ストップボタンを押した時の処理
function clickedStop(){
  'use strict';
  clearTimeout(intervalID);
  startBtn.disabled = "";
  isStart = false;
  if(todayFood === ""){
    alert("スタートボタンを押してからストップボタンを押してください")
  }else{
    slot.className = 'name';
    document.getElementById("isFood").innerHTML =todayFood;
  }
  }
