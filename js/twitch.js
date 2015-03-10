jQuery(document).ready(function()
{
  reset();
  tweak(1);
});

function tweak(what) {
  switch(what) {
    case 0,1,2,3,4: jQuery('.left-eye').text('-'); break;
    case 5,6: jQuery('.right-eye').text('-');  break;
    case 7: jQuery('.eye *').text('-'); break;
    default:
  }
  next = Math.round(Math.random() * 500) + 100;
  what = next%8;
  setTimeout(function(){tweak(what)}, next);
  setTimeout(reset,100);
}

function reset() {
  jQuery('.eye *').text('0');
  jQuery('.mo *').text('~');
}
