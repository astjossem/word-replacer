walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.toLowerCase();
	v = v.replace(/\bpresident trump\b/g, "Big Cheeto");
	v = v.replace(/\Trump\b/g, "Cheeto");
	v = v.replace(/\The Donald\b/g, "The Cheeto");
	v = v.replace(/\Donald Trump\b/g, "Big Cheeto");
	v = v.replace(/\Donald J Trump\b/g, "Big Fat Cheeto");
	v = v.replace(/\Donald J. Trump\b/g, "Big Fat Cheeto");
	
	textNode.nodeValue = v;
}


