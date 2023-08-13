var mainNode = document.getElementById('main');

// Check if the main node exists
if (mainNode) {
  // Get the parent node of the main node
  var parentNode = mainNode.parentNode;

  // Remove the main node from its parent
  parentNode.removeChild(mainNode);
} else {
  console.log("Main node 'main#main' not found.");
}
var newHeader = document.createElement('h1');

// Set content for the new header
newHeader.textContent = "This is a new header!";
var newHeader = document.createElement('h1');

// Set content for the new header
newHeader.textContent = "This is a new header!";

// Set ID for the new header
newHeader.id = "victory";
var newHeader = document.createElement('h1');

// Set ID for the new header
newHeader.id = 'victory';

// Set text content for the new header
var newText = "YOUR-NAME is the champion";
newText = newText.replace("YOUR-NAME", "Tom");
newHeader.textContent = newText;