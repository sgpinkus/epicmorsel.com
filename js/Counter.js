	/**
	 *	Ouputs string integer to a node.
 	 *	To use this you just go:
	 *		new Counter( node, start, end, time )
	 *	I.e. create an anonynous object. You cant start stop destroy the timer ATM (simple).
	 *	@param node the text node you want the counter in  e.g. <h1 id='counter'></h1>. The first text node in there is overidden.
	 *	@param start:	starting integer value.
	 *	@param end: ending integer value (maybe bigger or smaller).
	 *	@param time: time in milliseconds between increments.
	 */ 
	function Counter( node, start, end, time )
	{
		this.start = parseInt( start );
		this.end = parseInt( end );
		this.time = parseInt( time );
		this.textNode = node.getFirstTextNode();
		this.textNode.data = start;
		if( isFinite( start ) && isFinite( end ) && isFinite( time ) )
		{
			var node2 = this; //for some reason cant use this. Ref deleted or something.
			setTimeout( function(){ CountMe( node2 ); }, time );
		}
	}
	
	
	
	function CountMe( node )
	{
		//alert( node.start );
		if( node.start != node.end )
		{
			if( node.start < node.end )
			{
				node.start++;
			}
			else
			{
				node.start--;
			}
		node.textNode.data = node.start;
		setTimeout( function(){ CountMe( node ); }, node.time );
		}
	}
