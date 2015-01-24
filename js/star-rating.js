/**
Sample style:
 
   <style type="tesxt/css">
	   #star-rating-input td.star-rating-set { background: #fff url( /images/heart-set.png ) no-repeat center !important; }
	   #star-rating-input td { 
	      border:solid 1px #000;
	      text-align:center;
	      background: #000 url( /images/heart-unset.png ) no-repeat center;
      }
      
      input.star-rating-star {
         z-index: 2 !important;
         cursor: pointer !important;
         -moz-opacity:0;
         filter:alpha(opacity: 0);
         opacity: 0;
      }
   </style
*/

function starRatingInit()
{
   jQuery(".star-rating-star").click( heartChange );
   jQuery(".star-rating-star:checked").click();
}

function heartChange( e )
{
   $("#current-rating").text( e.target.value );
   jQuery( "#star-rating-input td" ).removeClass( "star-rating-set" ); 
   switch( e.target.value )
   {
      case "1":
      {
         jQuery( "#star-rating-1" ).addClass( "star-rating-set" );
         break;
      }
      case "2":
      {
         jQuery( "#star-rating-1" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-2" ).addClass( "star-rating-set" );
         break;
      }
      case "3":
      {
         jQuery( "#star-rating-1" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-2" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-3" ).addClass( "star-rating-set" );
         break;
      }
      case "4":
      {
         jQuery( "#star-rating-1" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-2" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-3" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-4" ).addClass( "star-rating-set" );
         break;
      }
      case "5":
      {
         jQuery( "#star-rating-1" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-2" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-3" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-4" ).addClass( "star-rating-set" );
         jQuery( "#star-rating-5" ).addClass( "star-rating-set" );
         break;
      }
   }
}


$(document).ready(function(){ starRatingInit (); });
