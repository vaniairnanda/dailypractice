function humanReadable(seconds) {
    var hH = '';
    var mM = '';
    var sS = '';
    var timeDisplay = '';
    if (seconds < 0) {
    'Invalid time';
  } else if (seconds < 60) {
      sS= sS + ':' + seconds;}
    else if (seconds = 60) {
      mM = mM + ':' + 1;}
    else if ((seconds % 60 >= 0) && (seconds/60) <= 59) {
      mM == mM + ':' + (seconds / 60);}
    else if (seconds > 3600) {
      hH == hH + (seconds / 3600) + ':';}
      timeDisplay = hH.toString + mM.toString + sS.toString;
  return timeDisplay;
} 
    
    // https://www.codewars.com/kata/human-readable-time/train/javascript  