walk(document.body);

function walk(node){

	// DOM traversal inspired from: T.J. Crowder on
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType ){
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )	{
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

function handleText(textNode){
	var v = textNode.nodeValue;
	v = v.replace(/\bpresident trump\b/gi, "Big Cheeto");
	v = v.replace(/\bpresident donald j. trump\b/gi, "Big Cheeto");
	v = v.replace(/\bpresident donald trump\b/gi, "Big Cheeto");
	v = v.replace(/\bpresident donald j trump\b/gi, "Big Cheeto");
	v = v.replace(/\btrump\b/gi, "Cheeto");
	v = v.replace(/\bthe donald\b/gi, "The Cheeto");
	v = v.replace(/\bdonald trump\b/gi, "Big Cheeto");
	v = v.replace(/\bdonald j trump\b/gi, "Big Cheeto");
	v = v.replace(/\bdonald j. trump\b/gi, "Big Cheeto");

//	v = v.replace(/\Obama\b/gi, "Obummer");
//	v = v.replace(/\Barack Obama\b/gi, "Barack Hussein Obama");
//	v = v.replace(/\President Obama\b/gi, "President Obummer");
//	v = v.replace(/\President Barack Obama\b/gi, "President Barack Hussein Obama");
	
	textNode.nodeValue = v;
}
