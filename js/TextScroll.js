/*
Scroll Object:
	Description:
		Implements the basic functionality of a 'scrolling display' in which text coninuously flows across the display left or right.
		Makes transition from left to right scrolling coherent.
	Bugs:
		if scroll has not completed one cycle accross screen switching dir is broken.
		initPos not implemented.
	Internals:
		display: array; holds what a scrolling display would hold.
		msg: string; the nsg including padding to be scrolled.
		pos: the current position of the next char to eb pushed onto the left or right side of the display depending on lastDir.
		lastDir: the last direction thatthe display scrolled.	
	Constructors:
		...	
	Methods:
		...
*/
	function Scroll( size, msgin, initPos )
	{
		with( this )
		{
			if( ( ! size ) || ( size == 0 ) || ( ! msgin ) || ( msgin.length == 0 ) )
			{
				return null;
			}
			
			msg = ( msgin ).split("");
			display= new Array();
			pos = 0;
			lastDir = 'left';
			
			//create " " filled array
			for( var i = 0; i < size; i++ )
			{
				display.push( " " );
			}
		}	
	}
	
	Scroll.prototype.shiftLeft = 
	function() 
	{
		with( this )
		{
			if( msg.length > 0 )
			{
				if( lastDir != 'left' )
				{
					lastDir = 'left';
					pos = ( pos  + display.length + 1 )%msg.length;
				}
				display.shift();
				display.push( msg[pos] );	//inti to 0.
				pos++;
				if( pos >= msg.length )
				{
					pos = 0;	
				}
			}
			return display.join("");
		}
	}
	
	Scroll.prototype.shiftRight = 
	function() 
	{
		with( this )
		{
			if( msg.length > 0 )
			{
				//chech the direction last travelled. Change up pos if just changed.
				if( lastDir == 'left' )
				{
					lastDir = 'right';
					
					//adjust pos to point to 1 to left of msg cahr at left of display right now.
					//'back' is how far back from current positino we watn to go.
					var back = pos - display.length - 1;
					if( ( back ) >= 0 )
					{
						pos -= back;
					}
					else
					{	
						pos = ( msg.length + ( back%msg.length ) );
					}
				}
				display.pop();
				display.unshift( msg[pos] );	//inti to 0.
				pos--;
				if( pos < 0 )
				{
					pos = msg.length - 1;	
				}
			}
			return display.join("");
		}
	}
