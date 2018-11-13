/** addon for intellisense **/
// You can include this file to your program after including "dynamsoft.camera.initiate.js".
// Please note that it isn't like normal intellisense, you need to include it rather than just reference it.
/* e.g.
<script type="text/javascript" src="DCSResources/dynamsoft.camera.initiate.js"> </script>
<script type="text/javascript" src="DCSResources/dynamsoft.camera.addOnForIntellisense.js"> </script>
*/

/** We add the function "at(index)" to ImageViewer Array and Resolution Array. **/  
// By using the function like "arrayImageViewer.at(index)",
// instead of "arrayImageViewer[index]",
// intellisense could work normally in array elements.
/* e.g.
var arrayImageViewer = dcsObject.getAllImageViewers();
var myImageViewer = arrayImageViewer.at(0);
*/ 

/** strongly-typed declaration **/ 
// If you want to use the relative intellisense before IDE detects the type of a variable, 
// you can use strongly-typed declaration.
/* e.g.
var mysdk = dynamsoft.lib.sdk;
var mydcs = mysdk.defAsDcsObject();
var myCamera = mysdk.defAsCamera();
*/ 

dynamsoft.lib.sdk.defAsDcsObject = function () { };

dynamsoft.lib.sdk.defAsImageViewer = function(){};

dynamsoft.lib.sdk.defAsCamera = function(){};

dynamsoft.lib.sdk.defAsVideoviewer = function(){};

dynamsoft.lib.sdk.defAsResolution = function(){};

dynamsoft.lib.sdk.defAsIo = function(){};

dynamsoft.lib.sdk.defAsPdfinfo = function(){};

dynamsoft.lib.sdk.defAsImage = function(){};

dynamsoft.lib.sdk.defAsUi = function(){};
