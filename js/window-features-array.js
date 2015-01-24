/**
 * From javascrupt 1.2 spec at http://download.oracle.com/docs/cd/E19957-01/816-6408-10/window.htm#1202731
 */
/*
var windowFeatures = new Array( 
"alwaysLowered=",		//(JavaScript 1.2) If yes, creates a new window that floats below other windows, whether it is active or not. This is a secure feature and must be set in signed scripts.
"alwaysRaised=",	//(JavaScript 1.2) If yes, creates a new window that floats on top of other windows, whether it is active or not. This is a secure feature and must be set in signed scripts.
"dependent=",		//(JavaScript 1.2) If yes, creates a new window as a child of the current window. A dependent window closes when its parent window closes. On Windows platforms, a dependent window does not show on the task bar.
"directories=",		//If yes, creates the standard browser directory buttons, such as What's New and What's Cool.
"height=",		//(JavaScript 1.0 and 1.1) Specifies the height of the window in pixels.
"hotkeys=",		//(JavaScript 1.2) If no (or 0), disables most hotkeys in a new window that has no menu bar. The security and quit hotkeys remain enabled.
"innerHeight=",		//(JavaScript 1.2) Specifies the height, in pixels, of the window's content area. To create a window smaller than 100 x 100 pixels, set this feature in a signed script. This feature replaces height, which remains for backwards compatibility.
"innerWidth=",		//(JavaScript 1.2) Specifies the width, in pixels, of the window's content area. To create a window smaller than 100 x 100 pixels, set this feature in a signed script. This feature replaces width, which remains for backwards compatibility.
"location=",		//If yes, creates a Location entry field.
"menubar=",		//If yes, creates the menu at the top of the window.
"outerHeight=",		//(JavaScript 1.2) Specifies the vertical dimension, in pixels, of the outside boundary of the window. To create a window smaller than 100 x 100 pixels, set this feature in a signed script.
"outerWidth=",		//Undocumented.
"personalbar=",		//(JavaScript 1.2) If yes, creates the Personal Toolbar, which displays buttons from the user's Personal Toolbar bookmark folder.
"resizable=",		//If yes, allows a user to resize the window.
"screenX=",		//(JavaScript 1.2) Specifies the distance the new window is placed from the left side of the screen. To place a window offscreen, set this feature in a signed scripts.
"screenY=",		//(JavaScript 1.2) Specifies the distance the new window is placed from the top of the screen. To place a window offscreen, set this feature in a signed scripts.
"scrollbars=",	//If yes, creates horizontal and vertical scrollbars when the Document grows larger than the window dimensions.
"status=",		//If yes, creates the status bar at the bottom of the window.
"titlebar=",		//(JavaScript 1.2) If yes, creates a window with a title bar. To set the titlebar to no, set this feature in a signed script.
"toolbar=",		//If yes, creates the standard browser toolbar, with buttons such as Back and Forward.
"width=",		//(JavaScript 1.0 and 1.1) Specifies the width of the window in pixels.
"z-lock-",		//(JavaScript 1.2) If yes, creates a new window that does not rise above other windows when activated. This is a secure feature and must be set in signed scripts.
);
*/

var windowFeatures = new Array( 
"alwaysLowered=",
"alwaysRaised=",
"dependent=",
"directories=",
"height=",
"hotkeys=",
"innerHeight=",
"innerWidth=",
"location=",
"menubar=",
"outerHeight=",
"outerWidth=",
"personalbar=",
"resizable=",
"screenX=",
"screenY=",
"scrollbars=",
"status=",
"titlebar=",
"toolbar=",
"top=",
"width=",
"z-lock="
);




function FeaturesList()
{
	this.toString = function()
	{
		var sep = "";
		var str = "";
		for( i in this )
		{
			if( typeof this[i]  != "function" )
			{
				str += sep + i + "=" + this[i];
				sep = ",";
			}
		}
		return str;
	}
}

/*
x = new FeaturesList();
x.x = "x";
x.y = "y";
print("2");
print( x );
print("2");
*/
