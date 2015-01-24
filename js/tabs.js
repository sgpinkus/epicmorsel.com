/*
 * V simple tabs. HTML structure is:
 * <div class="tabs-tabs">...<div class="tabs-tab [tabs-tab-default]">...</div> ...
 * <div class="tabs-tabbed"><child is a tab></div>
 * style of tabs-tabbed childs must be s.t. .tabbed is relative, childs are absolute.
 * Cant have two set on same page ATM - easy to fix but ...
 */

jQuery(document).ready( function()
{
  jQuery( ".tabs-tab" ).click( set_tabs_tab );
  jQuery( ".tabs-tab-default" ).click();
});

function set_tabs_tab()
{
  var index;
  var tabs = jQuery( ".tabs-tab" );
  var tabbed = jQuery( ".tabs-tabbed" ).children();
  
  for( var i = 0; i < tabs.length; i++ )
  {
    if( typeof tabbed[i] != "undefined" )
    {
      if( tabs[i] == this ) 
      {
        jQuery( tabbed[i] ).css( "display", "block" ); 
      }
      else
      {
        jQuery( tabbed[i] ).css( "display", "none" );
      } 
    }
    index = i;
  }
}
