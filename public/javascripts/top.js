
var realTimeDatetimeDisplay = function() {
	var dateObj        = new Date(),
	    dateYear       = dateObj.getFullYear(),
	    dateMonth      = dateObj.getMonth() + 1,
	    dateDay        = dateObj.getDate(),
	    dateWeek       = dateObj.getDay(),
	    timeHour       = dateObj.getHours(),
	    timeMinutes    = dateObj.getMinutes(),
	    timeSeconds    = dateObj.getSeconds(),
	    weekNames      = ['日', '月', '火', '水', '木', '金', '土'],
	    displayElement = document.getElementById('real-clockbox'),
	    str            = '';

	// 一桁の場合は0を追加
	if (timeHour < 10)    timeHour    = '0' + timeHour;
	if (timeMinutes < 10) timeMinutes = '0' + timeMinutes;
	if (timeSeconds < 10) timeSeconds = '0' + timeSeconds;

	// 文字列の結合
	str  = dateYear + '年' + dateMonth + '月' + dateDay + '日' + '（' + weekNames[dateWeek] + '）';
	str += timeHour + '時' + timeMinutes + '分' + timeSeconds + '秒';

	// 出力
	if (displayElement) displayElement.innerHTML = str;

	// 繰り返し実行
	setTimeout(realTimeDatetimeDisplay, 1000);
};

realTimeDatetimeDisplay();


function check1() {
  var res1 = confirm("出勤しますか？");
  if (res1 == true) {
    alert('出勤登録しました！\n今日も頑張りましょう！！');
  }
}

function check2() {
  var res2 = confirm("退勤しますか？");
  if (res2 == true) {
    alert('退勤登録しました！\n今日もお疲れ様でした！！');
  }
}

function check3() {
  var res3 = confirm("休憩に入りますか？");
  if (res3 == true) {
    alert('休憩開始しました！\nゆっくり休んできてくださいね！！');
  }
}

function check4() {
  var res = confirm("休憩から戻りましたか？");
  if (res == true) {
    alert('休憩終了しました！\nこの後の勤務も頑張りましょう！！');
  }
}