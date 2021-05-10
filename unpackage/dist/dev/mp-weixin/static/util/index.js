function dateDiff(newDate,oldDate){
	var diffNum = Math.abs(newDate-oldDate);
	var day = Math.floor(diffNum/(1000*3600*24));
	var millisecond = diffNum - (day*(24*3600*1000));
	var hours=Math.floor(millisecond/(3600*1000));
	var newSecond = millisecond - (hours*(3600*1000));
	var minutes=Math.floor(newSecond/(60*1000));
	return {day,hours,minutes};
}
export default{
	dateDiff
}