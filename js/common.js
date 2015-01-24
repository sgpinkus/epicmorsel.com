
/*
* Timer related general stuff
*/

/**
 * Set a timeout with a callback with object context, and with minimal/no mess.
 * Requires you provide the object context.
 * Very suprised there is no such function in JS built in lib!
 */
function objectSetTimeout( targetThis, fn, time )
{
	var timerId;
	var arguments = sanifyArguments( arguments );
	var args = arguments.slice( 3 );
	timerId = window.setTimeout( timeoutForwarder, time, targetThis, fn, args );

	function timeoutForwarder( targetThis, fn, args )
	{
		fn.apply( targetThis, args );
	}
	return timerId;
}




/**
 * set a recurring timeout with object context, and with minimal/no mess.
 * Same as objectSetTimeout().
 * @see objectSetTimout().
 * @todo Maybe provide timer id as last argument to callback.
 */
function objectSetInterval( targetThis, fn, time )
{
	var timerId;
	var arguments = sanifyArguments( arguments );
	var args = arguments.slice( 3 );
	timerId = window.setInterval( timeoutForwarder, time, targetThis, fn, args );

	function timeoutForwarder( targetThis, fn, args )
	{
		fn.apply( targetThis, args );
	}
	return timerId;
}




/**
 * Converts arguments or Function.arguments to an actual Array type.
 * arguments is not actually an Array type despite what manual says.
 */
function sanifyArguments( args )
{	
	var newArgs = new Array();

	for( var i = 0; i < args.length; i++ )
	{	
		newArgs[i] = args[i];
	}
	return newArgs;
}




/**
 * Simulate the functionality of a stop watch.
 * The client is updated with the time at the specified interval.
 * @param target the target object. If a function can set to window or global scope.
 * @param 
 */
function StopWatch( target, fn, tic )
{
	this.timerId = null;
	this.currentTime = 0;
	this.tic = tic;
	this.target = target;
	this.fn = fn;
			
	this.start = function()
	{
		if( this.timerId == null )
		{
			this.timerId = objectSetTimeout( this, this.callback, this.tic );
		}
		else
		{
			//tried to start started stopwatch.
		}
	}

	this.stop = function()
	{
		if( this.timerId != null )
		{
			clearTimeout( this.timerId );
		}
		this.timerId = null;
	}
	
	this.reset = function()
	{
		this.stop();
		this.currentTime = 0;
	}
	
	//If timer was running reset it and start running again. Otherwise just reset.
	this.restate = function()
	{
		if( this.timerId != null )
		{
			this.reset();
			this.start();
		}
		else
		{
			this.reset();
		}
	}
	
	this.toggle = function()
	{
		if( this.timerId != null )
		{
			this.stop();
		}
		else
		{	
			this.start();
		}
	}
	
	this.isStarted = function()
	{
		return this.timerId != null;
	}				
		
	
	this.callback = function()
	{
		this.currentTime += this.tic;
		this.timerId = objectSetTimeout( this, this.callback, this.tic );
		this.fn.call( this.target, this.currentTime );
		//printAttributes( this );
	} 
}	


/*
* general general stuff
*/


/**
 * Annoyingly no function_exists() like function.
 * Every simple way I try to do this its like AHHH.
 * This works.
 * @param assumed a string.
 */
function functionExists( functionName )
{
	var exists = false;
	try
	{
		if( typeof eval( functionName ) == "function" )
		{
			exists = true;
		}
	}
	catch( e )
	{
		exists = false;
	}
	return exists;
}


/* 
 * Copyright http://www.perlscriptsjavascripts.com 
 * Free and commercial Perl and JavaScripts 
 */
 
function setCookie(name, value, expires, path, domain, secure)
{
	document.cookie = name + "=" + escape(value) + "; ";
	
	if(expires)
	{
		expires = setExpiration(expires);
		document.cookie += "expires=" + expires + "; ";
	}
	if(path)
	{
		document.cookie += "path=" + path + "; ";
	}
	if(domain)
	{
		document.cookie += "domain=" + domain + "; ";
	}
	if(secure)
	{
		document.cookie += "secure; ";
	}
}
 
  
function getCookie(w)
{
	var cName = "";
	var cookies = new Array();
	cookies = document.cookie.split('; ');
	for(bb = 0; bb < cookies.length; bb++)
	{
		NmeVal = new Array();
		NmeVal = cookies[bb].split('=');
		if(NmeVal[0] == w)
		{
			cName = unescape(NmeVal[1]);
		}
	}
	return cName;
}


function getCookies()
{
	var cookies = new Array();
	var cookiesOut = new Object();
	cookies = document.cookie.split('; ');
	for(bb = 0; bb < cookies.length; bb++)
	{
		NmeVal  = new Array();
		NmeVal  = cookies[bb].split('=');
		if(NmeVal[0])
		{
			cookiesOut[NmeVal[0]] = unescape(NmeVal[1]);
		}
	}
	return cookiesOut;
}

function printCookies(w)
{
	var cStr = "";
	var cookies = getCookies();
	for( i in cookies )
	{
	  cStr += i + '=' + cookies[i] + "\n";
  }
  return cStr;  
}


function setExpiration(secs)
{
  var today = new Date();
  var expr = new Date(today.getTime() + secs);
  return expr.toGMTString();
}


// -->
