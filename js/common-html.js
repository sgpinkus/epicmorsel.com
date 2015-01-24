/*
 * General additional Helpers functions and definitions for HTML DOM.
 * HTML DOM does not itself provide anything but properties.
 * This is like mini really povo jQuery.
 */
 

	/**
	 * Get the first text Node within an element.
	 * Often you just want the first textNode to write something to.
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
	 */
	Element.prototype.getFirstTextNode = 
	function() 
	{ 
		var node = null;
		//So annoying: for( ... in ... ) differs from for(;;). Implicit toString conversion. Stupid.
		for( var i = 0; i < this.childNodes.length; i++ )
		{
			if( this.childNodes[i].nodeType == 3 ) 
			{
				node = this.childNodes[i];
				break;
			}
		}
		if( ! node )
		{
			//this is more correct than just appending I suppose.
			//the first child of this node. If there is no such node, this returns null.
			node = this.insertBefore( document.createTextNode( "" ),  this.firstChild );		
		}
		return node;
	}
	
	
	

	/**
	 * Get the first text Node within an element.
	 * Often you just want the last textNode to write something to.
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
	 */
	Element.prototype.getLastTextNode = 
	function() 
	{ 
		var node = null;
		//So annoying: for( ... in ... ) differs from for(;;). Implicit toString conversion. Stupid.
		for( var i = this.childNodes.length - 1; i >= 0; i-- )
		{
			if( this.childNodes[i].nodeType == 3 ) 
			{
				node = this.childNodes[i];
				break;
			}
		}
		if( ! node )
		{
			node = this.appendChild( document.createTextNode( "" ) );
		}
		return node;
	}	
	
	
	
	
	/**
	 * Simple helpr to test whether a given ele is in a class.
	 * Convenient since classes are stored as a WS separated string.
	 */
	Element.prototype.inClass = 
	function( inClass )
	{
		var classes = this.className.split( " " );
		for( var i = 0; i < classes.length; i++ )
		{
			if( classes[i] == inClass )
			{
				return true;
			}
		}
		return false;
	}
	
	
	
	
	/**
	 * Convenient since classes are stored as a WS separated string.
	 */
	Element.prototype.setClass = 
	function( newClass )
	{
		//if ! class instance of HTMLElement throw exception.
		newClass = newClass.replace( / +/, "" ); //strip.
		var classes = this.className.split( / +/ );
		for( var i = 0; i < classes.length; i++ )
		{
			if( classes[i] == newClass )
			{
				return false;
			}
		}
		this.className += " " + newClass;
		return true; 
	}
	
	
	
	
	/**
	 * Convenient since classes are stored as a WS separated string.
	 */
	Element.prototype.unsetClass = 
	function( newClass )
	{
		//if ! class instance of HTMLElement throw exception.
		newClass = newClass.replace( / +/, "" );
		var classes = this.className.split( / +/ );
		for( var i = 0; i < classes.length; i++ )
		{
			if( classes[i] == newClass )
			{
				classes.splice( i, 1 );
				this.className = classes.join( " " );
			}
		}
		return false; 
	}
