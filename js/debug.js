
/**
 * Write to self.
 * Every time you write to the window it only clears the content.
 * it resets the attributes including functions.
 */
function printInner( window, target )
{
  for( var i in target )
	{
		//attWindow.document.write( i + ": " + target[i] + "<br/>\n" );
		if( typeof target[i] == "object" )
		  window.document.write( "<a style='color:blue' onclick='window.printInner( window, window.att[\"" + i + "\"] );'>" + i + ": " + target[i] + "</a><br/>\n" );
		else
		  window.document.write( i + ": " + target[i] + "<br/>\n" );
	}
	window.att = target;
	window.printInner = printInner;
	window.document.close();
}


/**
 * Print the attributes of an object in a new window
 * @todo implement replace window option.
 */
function printAttributes( target )
{
	var attWinH = 500;
	var attWinW = 400;
	
	//if the window DNE or does but has been closed (re)open it.
	if( ( ! window.attWindow ) || ( window.attWindow.closed ) )
	{
		var features = "dependent=yes,scrollbars=yes"
		//add other features
		features += ",height=" + attWinH;
		features += ",width=" + attWinW;
		features += ",left=" + ( window.outerWidth - attWinW ); //position new window in bottom right corner.
		features += ",top=" + ( window.outerHeight - attWinH );
		attWindow = window.open( '', 'attwindow', features , false );
	}
	
	//writing to the window will clear it 1st as if open had been called.
	//iterate and write attributes.
	for( var i in target )
	{
		//attWindow.document.write( i + ": " + target[i] + "<br/>\n" );
		if( typeof target[i] == "object" )
		  attWindow.document.write( "<a style='color:blue' onclick='window.printInner( window, window.att[\"" + i + "\"] );'>" + i + ": " + target[i] + "</a><br/>\n" );
		else
		  attWindow.document.write( i + ": " + target[i] + "<br/>\n" );  
	}
	attWindow.printInner = window.printInner;
	attWindow.att = target;
	attWindow.focus();
	attWindow.document.close();	
	
	//returning false cancel default behaviors.
	return false;
}



