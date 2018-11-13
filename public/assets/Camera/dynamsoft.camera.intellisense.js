/*!
 * Dynamsoft Webcam SDK JavaScript Intellisense
 * Product: Dynamsoft Webcam SDK
 * Web Site: https://www.dynamsoft.com
 *
 * Copyright 2018, Dynamsoft Corporation 
 * Author: Dynamsoft R&D Team
 * Version: 6.2.0.0720
 */


//**--------------------------------------------------------------------------------------------------------------------------------**//

/// <var type="namespace"></var>
var dynamsoft = dynamsoft || {};

/// <field name="dcsEnv" type="namespace"></field>
dynamsoft.dcsEnv = {

	/// <field name="ondcsnotfound" type="function">
	/// Triggered when dcs is not initialized or service could not be connect. <br />
	/// @template <br />
	/// - ondcsnotfound(){ <br />
	///	- - // show user customize dialog <br />
	///	- - return true;  // if return false, show dynamsoft dialog <br />
	/// - }
	/// </field>
	ondcsnotfound: null,

	/// <field name="ondcsneedupgrade" type="function">
	/// Triggered when connect success but need to upgrade. <br />
	/// @template <br />
	/// - ondcsneedupgrade(){ <br />
	///	- - // show user customize dialog <br />
	///	- - return true;  // if return false, show dynamsoft dialog <br />
	/// - }
	/// </field>
	ondcsneedupgrade: null
};

/// <field name="lib" type="namespace"></field>
dynamsoft.lib = dynamsoft.lib || {};

/// <field name="sdk" type="namespace"></field>
dynamsoft.lib.sdk = dynamsoft.lib.sdk || {};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.dcsEnv.init = function(videoViewerContainerId, imageViewerContainerId, onSuccess, onFailure){
	/// <summary>
	/// Initializes a DcsObject with a videoViewerContainer and an imageViewerContainer.
	/// </summary>
	/// <param name="videoViewerContainerId" type="string"></param>
	/// <param name="imageViewerContainerId" type="string"></param>
	/// <param name="onSuccess" type="function">@template onSuccess(string videoViewerContainer, string imageViewerContainer)</param>
	/// <param name="onFailure" type="function">@template onFailure(int errorCode, string errorString)</param>
	/// <returns type="void"></returns>
};

dynamsoft.dcsEnv.removeAllCameraAuthorizations = function(){
	/// <summary>
	/// Deletes all camera authorizations. 
	/// </summary>
	/// <returns type="void"></returns>
};

dynamsoft.dcsEnv.getObject = function(videoContainerId){
	/// <summary>
	/// Gets DCS Object initiated with videoContainerId.
	/// </summary>
	/// <param name="videoContainerId" type="string"></param>
	/// <returns type="dynamsoft.lib.sdk.DcsObject"></returns>
};

dynamsoft.dcsEnv.getLogLevel = function(){
	/// <summary>
	/// @returns the log level for debugging. 
	/// The default value for LogLevel is 0 which means the extra information for debugging won’t be logged. 
	/// To log the information for debugging, you can set it to 1. 
	/// The default value of the property is 0. 
	/// </summary>
	/// <returns type="short"></returns>
};

dynamsoft.dcsEnv.setLogLevel = function(logLevel){
	/// <summary>
	/// Sets the log level for debugging. 
	/// The default value for LogLevel is 0 which means the extra information for debugging won’t be logged. 
	/// To log the information for debugging, you can set it to 1. 
	/// The default value of the property is 0. 
	/// </summary>
	/// <param name="logLevel" type="short"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.dcsEnv.setLanguage = function (dcsLanguage) {
    /// <summary>
    /// Sets the language displayed in the camera authorization dialog.
    /// </summary>
    /// <param name="dcsLanguage" type="EnumDCS_Language"></param>
    /// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.extend = function(ParentClass, childAddConstructor){
	/// <summary>
	/// Parents constructor shouldn't has deference performances when given params more than it need. 
	/// Child add constructor must has params that parent constructor need. 
	/// Child add constructor could be add more params at back of parent's. <br />
	/// @returns a child constructor or called a child class. 
	/// </summary>
	/// <param name="ParentClass" type="function">parent constructor</param>
	/// <param name="childAddConstructor" type="function" optional="true">
	/// child add constructor, the extend has inited parent's, so only care the child.<br />
	/// @template: function( parent's params ...  [, child's params ... ]){ child operation ... }
	/// </param>
	/// <returns type="function"></returns>
    var ChildClass = function(){
        ParentClass.apply(this, arguments);
        if(childAddConstructor){
            childAddConstructor.apply(this, arguments);
        }
    };
    for(var i in ParentClass.prototype){
        ChildClass.prototype[i] = ParentClass.prototype[i];
    }
    return ChildClass;
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.DcsObject = function(){
	/// <summary>
	/// @class DcsObject
	/// </summary>

	this.camera = new dynamsoft.lib.sdk.Camera();
	this.videoviewer = new dynamsoft.lib.sdk.Videoviewer();
};

dynamsoft.lib.sdk.DcsObject.prototype.addImageViewer = function(imageContainerId){
	/// <summary>
	/// Adds a new imageView to this DcsObject. 
	/// </summary>
	/// <param name="imageContainerId" type="string">A div id</param>
	/// <returns type="dynamsoft.lib.sdk.ImageViewer"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.removeImageViewer = function(imageContainerId){
	/// <summary>
	/// Deletes an imageViewer with the id. 
	/// </summary>
	/// <param name="imageContainerId" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.getImageViewer = function(imageContainerId){
	/// <summary>
	/// @returns an imageViewer with the id, null if doesn't exist. 
	/// </summary>
	/// <param name="imageContainerId" type="string"></param>
	/// <returns type="dynamsoft.lib.sdk.ImageViewer"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.getAllImageViewers = function(){
	/// <summary>
	/// @returns all imageViewers of this DcsObject. 
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.ArrayImageViewer"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.addDocumentEditor = function(documentEditorContainerId){
	/// <summary>
	/// Add a new document editor.
	/// </summary>
	/// <param name="documentEditorContainerId" type="string">A div id</param>
	/// <returns type="dynamsoft.lib.sdk.DocumentEditor"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.removeDocumentEditor = function(documentEditorContainerId){
	/// <summary>
	/// Deletes a specified document editor.
	/// </summary>
	/// <param name="documentEditorContainerId" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.getDocumentEditor = function(documentEditorContainerId){
	/// <summary>
	/// Gets a specific document editor.
	/// </summary>
	/// <param name="documentEditorContainerId" type="string"></param>
	/// <returns type="dynamsoft.lib.sdk.DocumentEditor"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.getAllDocumentEditors = function(){
	/// <summary>
	/// Gets all document editors.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.ArrayDocumentEditor"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.getErrorCode = function(){
	/// <returns type="EnumDCS_ErrorCode"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.getErrorString = function(){
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.DcsObject.prototype.destroy = function(){
	/// <summary>
	/// Releases current DCS Object. 
	/// </summary>
	/// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.DcsObject._CameraProp = function(parent, strProp){};

dynamsoft.lib.sdk.DcsObject._CameraProp.prototype.getCurrent = function(){
	/// <returns type="long"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraProp.prototype.setCurrent = function(iValue){
	/// <param name="iValue" type="long"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraResolution = dynamsoft.lib.extend(dynamsoft.lib.sdk.DcsObject._CameraProp);

dynamsoft.lib.sdk.DcsObject._CameraResolution.prototype.getCurrent = function(){
	/// <summary>
	/// - Resolution{ <br />
	/// - - int width; <br />
	/// - - int height; <br />
	/// - }
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Camera.Resolution"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraResolution.prototype.setCurrent = function(resolution){
	/// <summary>
	/// - Resolution{ <br />
	/// - - int width; <br />
	/// - - int height; <br />
	/// - }
	/// </summary>
	/// <param name="resolution" type="Resolution"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraResolution.prototype.getAllowedValues = function(){
	/// <summary>
	/// - Resolution{ <br />
	/// - - int width; <br />
	/// - - int height; <br />
	/// - }
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Camera.ArrayResolution"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraUnautoProp = dynamsoft.lib.extend(dynamsoft.lib.sdk.DcsObject._CameraProp);

dynamsoft.lib.sdk.DcsObject._CameraUnautoProp.prototype.getDefault = function(){
	/// <returns type="long"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraUnautoProp.prototype.getMin = function(){
	/// <returns type="long"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraUnautoProp.prototype.getMax = function(){
	/// <returns type="long"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraAutoProp = dynamsoft.lib.extend(dynamsoft.lib.sdk.DcsObject._CameraUnautoProp);

dynamsoft.lib.sdk.DcsObject._CameraAutoProp.prototype.getIfAuto = function(){
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraAutoProp.prototype.setIfAuto = function(auto){
	/// <param name="auto" type="bool"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.DcsObject._CameraAutoProp.prototype.getIfDefaultAuto = function(){
	/// <summary>
	/// Gets default setting of auto, depending on camera.
	/// </summary>
	/// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.Camera = function(){
	/// <summary>
	/// @class Camera
	/// </summary>
	var _this = this;
	this.resolution = new dynamsoft.lib.sdk.DcsObject._CameraResolution(_this, 'resolution');
	this.exposure = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'exposureTime');
	this.iris = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'iris');
	this.focus = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'focus');
	this.zoom = new dynamsoft.lib.sdk.DcsObject._CameraUnautoProp(_this, 'zoom');
	this.pan = new dynamsoft.lib.sdk.DcsObject._CameraUnautoProp(_this, 'pan');
	this.tilt = new dynamsoft.lib.sdk.DcsObject._CameraUnautoProp(_this, 'tilt');
	this.roll = new dynamsoft.lib.sdk.DcsObject._CameraUnautoProp(_this, 'roll');
	this.backlightCompensation = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'backlightCompensation');
	this.brightness = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'brightness');
	this.gain = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'gain');
	this.saturation = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'saturation');
	this.sharpness = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'saturation');
	this.gamma = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'gamma');
	this.whiteBalanceTemperature = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'whiteBalanceTemperature');
	this.contrast = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'contrast');
	this.hue = new dynamsoft.lib.sdk.DcsObject._CameraAutoProp(_this, 'hue');
};

dynamsoft.lib.sdk.Camera.prototype.Resolution = function(width, height){
	/// <summary>
	/// @struct Resolution
	/// </summary>

	/// <field name="width" type="int">
	/// Resolution width.
	/// </field>
	/// <field name="height" type="int">
	/// Resolution height.
	/// </field>

	this.width = null;
	this.height = null;
};

dynamsoft.lib.sdk.Camera.ArrayResolution = function(){
	/// <summary>
	/// @array ArrayImageViewer <br />
	/// Please use at(index) to call element to make intellisense to work ok.
	/// </summary>
};

dynamsoft.lib.sdk.Camera.ArrayResolution.prototype.at = function(index){
	/// <summary>
	/// Calls element by index.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="dynamsoft.lib.sdk.ImageViewer"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.getCameraList = function(){
	/// <summary>
    /// Gets a list of available camera Data Sources.
	/// </summary>
	/// <returns type="string[]"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.selectCamera = function(cameraName){
	/// <summary>
    /// Selects a camera Data Source by its name.
	/// </summary>
	/// <param name="cameraName" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.takeCameraOwnership = function(cameraName){
	/// <summary>
    /// Takes ownership of a camera Data Source by its name.
	/// </summary>
	/// <param name="cameraName" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.playVideo = function(){
	/// <summary>
	/// Starts the video stream.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.stopVideo = function(){
	/// <summary>
	/// Stops the video stream.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.pauseVideo = function(){
	/// <summary>
	/// Pauses the video stream. Save last frame which could be get by captureImage.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.captureImage = function(imageViewerId){
	/// <summary>
	/// Captures image to specific imageViewer. 
	/// In the imageViewer, the new captured image would be selected while the other be unselected. 
	/// @return false if the imageViewer with the id doesn't exist.    
	/// </summary>
	/// <param name="imageViewerId" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Camera.prototype.captureDocument = function(imageViewerContainerId){
	/// <summary>
	/// Captures a document from the camera to a specified image viewer.
	/// @return false if the documentEditor with the id doesn't exist. 
	/// </summary>
	/// <param name="imageViewerContainerId" type="string"></param>
	/// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.Videoviewer = function(){
	/// <summary>
	/// @class Videoviewer
	/// </summary>

	/// <field name="onmouseclick" type="function">
	/// @template onmouseclick(event){}
	/// </field>
	/// <field name="onmouserightclick" type="function">
	/// @template onmouserightclick(event){}
	/// </field>
	/// <field name="onmousedoubleclick" type="function">
	/// @template onmousedoubleclick(event){}
	///</field>
	/// <field name="ondocumentboundarydetected" type="function">
	/// @template ondocumentboundarydetected(event){}
	/// </field>

	this.onmouseclick = null;
	this.onmouserightclick = null;
	this.onmousedoubleclick = null;
	this.ondocumentboundarydetected = null;
};

dynamsoft.lib.sdk.Videoviewer.prototype.show = function(){
	/// <summary>
	/// showes the videoViewer
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.hide = function(){
	/// <summary>
	/// Hides the videoViewer
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getVideoQuality = function(){
	/// <summary>
	/// Gets camera video preview image quality, default is 85.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setVideoQuality = function(quality){
	/// <summary>
	/// Sets camera video preview image quality, default is 85.
	/// Range is 1-100. If out of range, return false.
	/// </summary>
	/// <param name="quality" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getWidth = function(){
	/// <summary>
	/// Gets the video viewer width.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setWidth = function(width){
	/// <summary>
	/// Sets the video viewer width.
	/// </summary>
	/// <param name="width" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getHeight = function(){
	/// <summary>
	/// Gets the video viewer height.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setHeight = function(height){
	/// <summary>
	/// Sets the video viewer height.
	/// </summary>
	/// <param name="height" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getBackgroundColor = function(){
	/// <summary>
	/// Gets the background color of the video viewer. It is a value specifying the 32-bit RGBA value. 
	/// The default value is 0x00000000.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setBackgroundColor = function(backgroundColor){
	/// <summary>
	/// Sets the background color of the video viewer. It is a value specifying the 32-bit RGBA value. 
	/// The default value is 0x00000000. Return -1 for decoding failed. 
	/// </summary>
	/// <param name="backgroundColor" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.EnumMode = {Image:0, Document:1};
	
dynamsoft.lib.sdk.Videoviewer.prototype.setMode  = function(EnumMode){
	/// <summary>
	/// Sets the capture mode of the video viewer.
	/// </summary>
	/// <param name="EnumMode" type="Enum"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getMode  = function(){
	/// <summary>
	/// Gets the capture mode of the video viewer.
	/// </summary>
	/// <returns type="Enum"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getAllowCaptureUndetectedDocument  = function(){
	/// <summary>
	/// Gets whether to allow document capture function when no document is detected. The default value is false.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setAllowCaptureUndetectedDocument  = function(bAllow){
	/// <summary>
	/// Sets whether to allow document capture function when no document is detected. The default value is false.
	/// </summary>
	/// <param name="bAllow" type="bool"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getDocumentBoundaryThickness = function(){
	/// <summary>
	/// Gets the width of the detected document boundary (in px).
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setDocumentBoundaryThickness = function(thickness){
	/// <summary>
	/// Sets the width of the detected document boundary.
	/// </summary>
	/// <param name="thickness" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getDocumentBoundaryColor = function(){
	/// <summary>
	/// Gets the color of the detected document boundary.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setDocumentBoundaryColor = function(color){
	/// <summary>
	/// Sets the color of the detected document boundary. It is a value specifying the 32-bit RGBA. The default value is 0x5EB7E4FF.
	/// </summary>
	/// <param name="color" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.setFPS = function(fps){
	/// <summary>
	/// Set the Frames Per Second.
	/// </summary>
	/// <param name="fps" type="number"></param>
	/// <returns type="void"></returns>
};

dynamsoft.lib.sdk.Videoviewer.prototype.getFPS = function(){
	/// <summary>
	/// Get the Frames Per Second.
	/// </summary>
	/// <returns type="number"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.ImageViewer = function(){
	/// <summary>
	/// @class ImageViewer
	/// </summary>

	/// <field name="io" type="namespace">Some function of input or output.</field>
	/// <field name="image" type="namespace">Some function of image.</field>
	/// <field name="ui" type="namespace">Some function of ui.</field>

	this.io = new dynamsoft.lib.sdk.Io();
	this.image = new dynamsoft.lib.sdk.Image();
	this.ui = new dynamsoft.lib.sdk.Ui();
};

dynamsoft.lib.sdk.ArrayImageViewer = function(){
	/// <summary>
	/// @array ArrayImageViewer <br />
	/// Please use at(index) to call element to make intellisense to work ok.
	/// </summary>
};

dynamsoft.lib.sdk.ArrayImageViewer.prototype.at = function(index){
	/// <summary>
	/// Calls element by index.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="dynamsoft.lib.sdk.ImageViewer"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.Io = function(){
	/// <summary>
	/// @class Io
	/// </summary>

	/// <field name="pdfinfo" type="namespace">Some function of pdf information.</field>
	this.pdfinfo = new dynamsoft.lib.sdk.Pdfinfo();
};

dynamsoft.lib.sdk.Io.prototype.httpDownload = function(url){
	/// <summary>
	/// Synchronously downloads files to ImageViewer. 
	/// only support bmp/jpeg/png/tiff/pdf. 
	/// The new downloaded image will be selected while the other be unselected. 
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Io.prototype.httpDownloadAsync = function(url, onHttpDownloadSuccess, onHttpDownloadFailure, onHttpDownloading){
	/// <summary>
	/// Asynchronous download a file to ImageViewer. 
	/// only support bmp/jpeg/png/tiff/pdf. 
	/// The new downloaded image will be selected while the other be unselected. 
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="onHttpDownloadSuccess" type="function">@Template onHttpDownloadSuccess(string httpResponse)</param>
	/// <param name="onHttpDownloadFailure" type="function">@Template 
	/// onHttpDownloadFailure(int errorCode, string errorString, string httpResponse)
	/// </param>
	/// <param name="onHttpDownloading" type="function" optional="true">
	/// @Template bool onHttpDownloading(short percentage)<br />
	/// The event will be triggered each time the download state change.<br />
	/// If returns true, the downloading will be cancelled.
	/// </param>
	/// <returns type="void"></returns>
};

dynamsoft.lib.sdk.Io.prototype.httpDownloadDocument = function(url){
	/// <summary>
	/// Downloads a document from the HTTP server into an image viewer synchronously.
	/// This method only supports downloading BMP, JPEG, PNG, TIFF and PDF files.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Io.prototype.httpDownloadDocumentAsync = function(url, onHttpDownloadSuccess, onHttpDownloadFailure, onHttpDownloading){
	/// <summary>
	/// Downloads a document from the HTTP server into an image viewer asynchronously.
	/// </summary>
	/// <param name="url" type="string">@specifies the URL to download the file.</param>
	/// <param name="onHttpDownloadSuccess" type="function">@callback function triggered when the file is downloaded successfully. </param>
	/// <param name="onHttpDownloadFailure" type="function">@callback function triggered when the file failed to be downloaded.
	/// </param>
	/// <param name="onHttpDownloading" type="function" optional="true">
	/// @callback function triggered during downloading the document.
	/// </param>
	/// <returns type="void"></returns>
};

dynamsoft.lib.sdk.Io.prototype.loadFromClipboard = function(){
	/// <summary>
    /// Loads an DIB(windows version) image or NSImage(Mac version) from system clipboard into Dynamsoft Camera. 
	/// The new loaded image will be selected while the other be unselected.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Io.prototype.copyToClipboard = function(index, left, top, right, bottom){
	/// <signature>
	/// <summary>
	/// Copies a specified area of an image with the specified index in buffer 
	/// to clipboard in DIB format(Windows version) or NSImage format(Mac version).
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="bool"></returns>
	/// </signature>
	/// <signature>
	/// <summary>
	/// Copies a specified area of an image with the specified index in buffer 
	/// to clipboard in DIB format(Windows version) or NSImage format(Mac version). 
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <param name="left" type="int"></param>
	/// <param name="top" type="int"></param>
	/// <param name="right" type="int"></param>
	/// <param name="bottom" type="int"></param>
	/// <returns type="bool"></returns>
	/// </signature>
};

dynamsoft.lib.sdk.Io.prototype.EnumHttpMethod = {POST:0, PUT:1};

dynamsoft.lib.sdk.Io.prototype.EnumImageType = {BMP:0, JPEG:1, TIFF:2, PNG:3, PDF:4};

dynamsoft.lib.sdk.Io.prototype.EnumUploadDataFormat = {BINARY:0, BASE64:1};

dynamsoft.lib.sdk.Io.prototype.httpUpload = function(url, indices, imageType, httpMethod, dataFormat){
	/// <signature>
	/// <summary>
    /// Synchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server. 
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <returns type="bool"></returns>
	/// </signature>
	/// <signature>
	/// <summary>
    /// Synchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server. 
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <param name="httpMethod" type="EnumHttpMethod">@default EnumHttpMethod.POST</param>
	/// <returns type="bool"></returns>
	/// </signature>
	/// <signature>
	/// <summary>
    /// Synchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server. 
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1. 
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <param name="httpMethod" type="EnumHttpMethod">@default EnumHttpMethod.POST</param>
	/// <param name="dataFormat" type="EnumUploadDataFormat">@default EnumUploadDataFormat.Binary</param>
	/// <returns type="bool"></returns>
	/// </signature>
};

dynamsoft.lib.sdk.Io.prototype.getHttpResponse = function(){
	/// <summary>
	/// Gets the information returned from the server 
	/// when httpUpload(Async)(upload with EnumHttpMethod.POST method) or httpDownload(Async) finishes.
	/// </summary>
	/// <returns type="var"></returns>
};

dynamsoft.lib.sdk.Io.prototype.httpUploadAsync = function(
	url, indices, imageType, onHttpUploadSuccess, onHttpUploadFailure, onHttpUploading, httpMethod, dataFormat){
	/// <signature>
	/// <summary>
    /// Asynchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server.
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">Specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <param name="onHttpUploadSuccess" type="function">@Template onHttpUploadSuccess(string httpResponse)</param>
	/// <param name="onHttpUploadFailure" type="function">@Template 
	/// onHttpUploadFailure(int errorCode, string errorString, string httpResponse)
	/// </param>
	/// <returns type="void"></returns>
	/// </signature>
	/// <signature>
	/// <summary>
    /// Asynchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server. 
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">Specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <param name="onHttpUploadSuccess" type="function">@Template onHttpUploadSuccess(string httpResponse)</param>
	/// <param name="onHttpUploadFailure" type="function">@Template 
	/// onHttpUploadFailure(int errorCode, string errorString,string httpResponse)
	/// </param>
	/// <param name="onHttpUploading" type="function">
	/// @Template bool onHttpUploading(short percentage)<br />
	/// The event will be triggered each time the upload state change.<br />
	/// If returns true, the uploading will be cancelled.
	/// </param>
	/// <returns type="void"></returns>
	/// </signature>
	/// <signature>
	/// <summary>
    /// Asynchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server. 
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">Specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <param name="onHttpUploadSuccess" type="function">@Template onHttpUploadSuccess(string httpResponse)</param>
	/// <param name="onHttpUploadFailure" type="function">@Template 
	/// onHttpUploadFailure(int errorCode, string errorString, string httpResponse)
	/// </param>
	/// <param name="onHttpUploading" type="function">
	/// @Template bool onHttpUploading(short percentage)<br />
	/// The event will be triggered each time the upload state change.<br />
	/// If returns true, the uploading will be cancelled.
	/// </param>
	/// <param name="httpMethod" type="EnumHttpMethod ">@default EnumHttpMethod.POST</param>
	/// <returns type="void"></returns>
	/// </signature>
	/// <signature>
	/// <summary>
    /// Asynchronously uploads images of specified indices in Dynamsoft Camera viewer to the HTTP server. 
	/// If imageType is EnumImageType.BMP/JPEG/PNG, the length of indices must be 1.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <param name="indices" type="int[]">Specifies the indices of images in buffer. The index is 0-based.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <param name="onHttpUploadSuccess" type="function">@Template onHttpUploadSuccess(string httpResponse)</param>
	/// <param name="onHttpUploadFailure" type="function">@Template 
	/// onHttpUploadFailure(int errorCode, string errorString, string httpResponse)
	/// </param>
	/// <param name="onHttpUploading" type="function">
	/// @Template bool onHttpUploading(short percentage)<br />
	/// The event will be triggered each time the upload state change.<br />
	/// If returns true, the uploading will be cancelled.
	/// </param>
	/// <param name="httpMethod" type="EnumHttpMethod ">@default EnumHttpMethod.POST</param>
	/// <param name="dataFormat" type="EnumUploadDataFormat">@default EnumUploadDataFormat.Binary</param>
	/// <returns type="void"></returns>
	/// </signature>
};

dynamsoft.lib.sdk.Io.prototype.getHTTPFormField = function(){
	/// <summary>
	/// Gets text fields in the web form which will be sent to the server with the images. 
	/// Json format:{"fieldName": "fieldValue", "fieldName": "fieldValue"...}
	/// </summary>
	/// <returns type="JSON"></returns>
};

dynamsoft.lib.sdk.Io.prototype.setHTTPFormField = function(iValue){
	/// <summary>
	/// Sets text fields in the web form which will be sent to the server with the images. 
	/// Json format:{"fieldName": "fieldValue", "fieldName": "fieldValue"...}
	/// </summary>
	/// <param name="iValue" type="JSON"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Io.prototype.convertToBase64 = function(indices, imageType){
	/// <summary>
	/// Converts the images of specified indices in buffer to a base64 string. 
	/// The result string is the pure base64 string with no extra info. For example, 
	/// "/9j/4AAQSkZJRgABA...". 
	/// To use the string in most circumstances, you need to add extra info like
	/// data:image/png;base64,"/9j/4AAQSkZJRgABA...".
	/// </summary>
	/// <param name="indices" type="int[]">Specifies the indices of images to be saved.</param>
	/// <param name="imageType" type="EnumImageType"></param>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Io.prototype.getJPEGQuality = function(){
	/// <summary>
	/// Gets the quality of JPEG files or JPEG-encoded PDF files. 
	/// The default value of JPEGQuality property is 80. 
	/// </summary>
	/// <returns type="short"></returns>
};

dynamsoft.lib.sdk.Io.prototype.setJPEGQuality = function(iValue){
	/// <summary>
	/// Sets the quality of JPEG files or JPEG-encoded PDF files. 
	/// The default value of JPEGQuality property is 80. The valid range is 0-100. 
	/// The higher the JPEGQuality property, the better the quality and the bigger the size of the file.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Io.prototype.getTIFFCompressionType = function(){
	/// <summary>
	/// Gets the compression type for TIFF files. 
	/// The default value of the property is EnumTIFFCompressionType.AUTO.
	/// </summary>
	/// <param name="url" type="string"></param>
	/// <returns type="dynamsoft.lib.sdk.Io.EnumTIFFCompressionType"></returns>
};

dynamsoft.lib.sdk.Io.prototype.setTIFFCompressionType = function(iValue){
	/// <summary>
	/// Gets the compression type for TIFF files. 
	/// </summary>
	/// <param name="iValue" type="EnumTIFFCompressionType "></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Io.prototype.setHTTPHeader = function(headers){
	/// <summary>
	/// Set http headers. e.g. '{user:"aaa",password:"bbb"}'
	/// </summary>
	/// <param name="header" type="PlainObject"></param>
	/// <returns type="void"></returns>
};

dynamsoft.lib.sdk.Io.prototype.EnumTIFFCompressionType = { 
	AUTO: 0, /*NONE: 1, */RLE: 2, FAX3: 3, T4: 3, FAX4: 4, T6: 4, LZW: 5, JPEG: 7, PACKBITS: 32773
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.Pdfinfo = function(){
	/// <summary>
	/// @class Pdfinfo
	/// </summary>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFAuthor = function(){
	/// <summary>
	/// Gets the name of the author that creates the PDF document.
	/// </summary>
	/// <returns type="string"></returns>
};


dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFAuthor = function(iValue){
	/// <summary>
	/// Sets the name of the author that creates the PDF document.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFCompressionType = function(){
	/// <summary>
	/// Gets the compression type for PDF files.
	/// </summary>
	/// <returns type="EnumPDFCompressionType"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFCompressionType = function(iValue){
	/// <summary>
	/// Sets the compression type for PDF files.
	/// </summary>
	/// <param name="iValue" type="EnumPDFCompressionType"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.EnumPDFCompressionType = {

	/// <field name="AUTO">
	/// Auto mode. 1, 4, 8, 24 bit.
	/// </field>
	AUTO: 0, 

	/// <field name="FAX3">
	/// CCITT Group 3 fax encoding.	1 bit.
	/// </field>
	FAX3: 1, 

	/// <field name="FAX4">
	/// CCITT Group 4 fax encoding.	1 bit.
	/// </field>
	FAX4: 2, 

	/// <field name="LZW">
	/// Lempel-Ziv & Welch. 1, 4, 8, 24 bit.
	/// </field>
	LZW: 3, 

	/// <field name="JPEG">
	/// JPEG encoding. 4, 8, 24 bit.
	/// </field>
	JPEG: 4
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFCreationDate = function(){
	/// <summary>
	/// Gets the date when the PDF document is created. 
	/// The default value is current date.
	/// </summary>
	/// <returns type="Date"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFCreationDate = function(iValue){
	/// <summary>
	/// Sets the date when the PDF document is created. 
	/// The default value is current date.
	/// </summary>
	/// <param name="iValue" type="Date"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFModifiedDate = function(){
	/// <summary>
	/// Gets the date when the PDF document is last modified. 
	/// </summary>
	/// <returns type="Date"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFModifiedDate = function(iValue){
	/// <summary>
	/// Sets the date when the PDF document is last modified.
	/// </summary>
	/// <param name="iValue" type="Date"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFCreator = function(){
	/// <summary>
	/// Gets the name of the application that created the original document 
	/// (used when the PDF document is converted from another form).
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFCreator = function(iValue){
	/// <summary>
	/// Sets the name of the application that created the original document 
	/// (used when the PDF document is converted from another form).
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFProducer = function(){
	/// <summary>
	/// Gets the name of the application that generated the PDF document.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFProducer = function(iValue){
	/// <summary>
	/// Sets the name of the application that generated the PDF document.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFSubject = function(){
	/// <summary>
	/// Gets the subject of the PDF document.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFSubject = function(iValue){
	/// <summary>
	/// Sets the subject of the PDF document.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFKeywords = function(){
	/// <summary>
	/// Gets the keywords associated with the PDF document.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFKeywords = function(iValue){
	/// <summary>
	/// Sets the keywords associated with the PDF document.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFTitle = function(){
	/// <summary>
	/// Gets the title of the PDF document.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFTitle = function(iValue){
	/// <summary>
	/// Sets the title of the PDF document.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.getPDFVersion = function(){
	/// <summary>
	/// Gets the version number for PDF files.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Pdfinfo.prototype.setPDFVersion = function(iValue){
	/// <summary>
	/// Sets the version number for PDF files.
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.Image = function(){
	/// <summary>
	/// @class Image
	/// </summary>
};

dynamsoft.lib.sdk.Image.prototype.getCapacity = function(){
	/// <summary>
	/// Gets how many images are allowed to be captured into image buffer under image mode. 
	/// The default value of this property is 1023.  
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Image.prototype.setCapacity = function(iValue){
	/// <summary>
	/// Sets how many images are allowed to be captured into image buffer under image mode. 
	/// </summary>
	/// <param name="iValue" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.getCount = function(){
	/// <summary>
	/// Gets how many images are currently loaded in buffer under image mode. This is a read-only property.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Image.prototype.getIndex = function(){
	/// <summary>
    /// Gets the index of the current image selected by Dynamsoft Camera. 
	/// The index is 0-based. 
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Image.prototype.setIndex = function(iValue){
	/// <summary>
	/// Sets the image with the specified index as the current image under image mode.
	/// The index is 0-based. 
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.getSelectedIndices = function(){
	/// <summary>
    /// Gets the indices of all current images selected by Dynamsoft Camera under image mode. 
	/// Presses "Ctrl" key to enable multiple selection. 
	/// The index is 0-based.
	/// </summary>
	/// <returns type="int[]"></returns>
};

dynamsoft.lib.sdk.Image.prototype.setSelectedIndices = function(iValue){
	/// <summary>
    /// Sets the indices of all current images selected by Dynamsoft Camera under image mode. 
	/// Presses "Ctrl" key to enable multiple selection. 
	/// The index is 0-based.
	/// </summary>
	/// <param name="iValue" type="int[]"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.getImageInfo = function(index){
	/// <summary>
	/// Gets information (e.g. width, height) about the image specified by index in buffer.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="dynamsoft.lib.sdk.ImageInfo"></returns>
};

dynamsoft.lib.sdk.Image.prototype.editDocument = function(documentEditorContainerId,index){
	/// <summary>
	/// Opens a document of the specified index in a document editor with the specified container id for editing.
	/// </summary>
	/// <param name="documentEditorContainerId" type="string"></param>
	/// <param name="index" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.ImageInfo = function(){
	/// <summary>
	/// @class ImageInfo
	/// </summary>

	this._width = null;
	this._height = null;
};

dynamsoft.lib.sdk.ImageInfo.getWidth = function(){
	/// <summary>
	/// Returns the width (in pixels) of the image.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.ImageInfo.getHeight = function(){
	/// <summary>
	/// Returns the height (in pixels) of the image.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Image.prototype.getImagePartUrl = function (index) {
    /// <summary>
    /// Gets the URL of a specified image in the image viewer for other Dynamsoft modules to use.
    /// </summary>
    /// <param name="index" type="int"></param>
    /// <returns type="getImagePartUrl"></returns>
};

dynamsoft.lib.sdk.Image.prototype.rotateLeft = function(index){
	/// <summary>
	/// Rotates the image of a specified index in buffer by 90 degrees counter-clockwise.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.rotateRight = function(index){
	/// <summary>
	/// Rotates the image of a specified index in buffer by 90 degrees clockwise.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.crop = function(index, left, top, right, bottom){
	/// <summary>
	/// Crops an image of the specified index in buffer. 
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <param name="left" type="int"></param>
	/// <param name="top" type="int"></param>
	/// <param name="right" type="int"></param>
	/// <param name="bottom" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.cut = function(index, left, top, right, bottom){
	/// <summary>
	/// Cuts an area of image with the specified index in buffer. 
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <param name="left" type="int"></param>
	/// <param name="top" type="int"></param>
	/// <param name="right" type="int"></param>
	/// <param name="bottom" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.flip = function(index){
	/// <summary>
	/// Flips the image of a specified index in buffer.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.mirror = function(index){
	/// <summary>
	/// Mirrors the image of a specified index in buffer.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.changeSize = function(index, width, height, interpolationMethod){
	/// <summary>
	/// Changes the size of an image specified by index. 
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <param name="width" type="int"></param>
	/// <param name="height" type="int"></param>
	/// <param name="interpolationMethod" type="EnumInterpolationMethod"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.EnumInterpolationMethod = {
	NEARESTNEIGHBOUR: 1, BILINEAR: 2, BICUBIC: 3
};

dynamsoft.lib.sdk.Image.prototype.remove = function(indices){
	/// <summary>
	/// Removes multiple images with specified indices in buffer.
	/// </summary>
	/// <param name="indices" type="int[]"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.swap = function(firstIndex, secondIndex){
	/// <summary>
	/// Swaps two images of specified indices in the buffer.
	/// </summary>
	/// <param name="firstIndex" type="int"></param>
	/// <param name="secondIndex" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Image.prototype.copyToImageViewer = function(index, targetImageViewer){
	/// <summary>
	/// Copies the image with the index to the targetImageViewer, target can be this ImageViewer self.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <param name="targetImageViewer" type="ImageViewer"></param>
	/// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.Ui = function(){
	/// <summary>
	/// @class Ui
	/// </summary>

	/// <field name="onmouseclick" type="function">
	/// This event is triggered when the mouse clicks on an image container in image viewer.<br />
	/// @template onmouseclick(int imageIndex, int mouseX, int mouseY)<br />
	/// Base point is left-top of the image.
	/// </field>
	/// <field name="onmouserightclick" type="function">
	/// This event is triggered when releasing right mouse button on an image container in image viewer.<br />
	/// @template onmouserightclick(int imageIndex, int mouseX, int mouseY)<br />
	/// Base point is left-top of the image.
	/// </field>
	/// <field name="onmousedoubleclick" type="function">
	/// This event is triggered when the mouse double clicks on an image container in image viewer.<br />
	/// @template onmousedoubleclick(int imageIndex, int mouseX, int mouseY)<br />
	/// Base point is left-top of the image.
	/// </field>
	/// <field name="onmousemove" type="function">
	/// This event is triggered when the mouse hovers over on an image container in image viewer.<br />
	/// @template onmousemove(int imageIndex, int mouseX, int mouseY)<br />
	/// Base point is left-top of the image.
	/// </field>

	this.onmouseclick = null;

	this.onmouserightclick = null;

	this.onmousedoubleclick = null;

	this.onmousemove = null;
};

dynamsoft.lib.sdk.Ui.prototype.getContainerId = function(){
	/// <summary>
	/// Gets the id of the ImageContainer.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.show = function(){
	/// <summary>
	/// Showes the ImageViewer. 
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.hide = function(){
	/// <summary>
	/// Hides the ImageViewer. 
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setImageViewMode = function(column, row){
	/// <summary>
	/// Sets how the images are displayed in image viewer. The default thumbnail mode is 1 X 1. 
	/// </summary>
	/// <param name="column" type="short"></param>
	/// <param name="row" type="short"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getSelectedImageBorderColor = function(){
	/// <summary>
	/// Gets the border color of the selected image. It is a value specifying the 32-bit RGBA value. 
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setSelectedImageBorderColor = function(iValue){
	/// <summary>
	/// Sets the border color of the selected image. It is a value specifying the 32-bit RGBA value. 
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getSelectedImageBorderWidth = function(){
	/// <summary>
	/// Gets the border width of the selected image. 
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setSelectedImageBorderWidth = function(iValue){
	/// <summary>
	/// Sets the border width of the selected image. 
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getImageSelectedAreaInfo = function(){
	/// <summary>
	/// Gets the infomation of the selected Area. 
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.ImageSelectedAreaInfo"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getSelectionRectAspectRatio = function(){
	/// <summary>
	/// Gets the aspect ratio to be used when you use the mouse to draw a rectangle on an image to select an area. The ratio is width to height.
	/// </summary>
	/// <returns type="float"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setSelectionRectAspectRatio = function(value){
	/// <summary>
	/// Sets the aspect ratio to be used when you use the mouse to draw a rectangle on an image to select an area. The ratio is width to height.
	/// </summary>
	/// <param name="value" type="float"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.ImageSelectedAreaInfo = function(){
	/// <summary>
	/// @class ImageSelectedAreaInfo 
	/// </summary>

	this.index = null;
	this.left = null;
	this.top = null;
	this.right = null;
	this.bottom = null;
};

dynamsoft.lib.sdk.Ui.prototype.getMargin = function(){
	/// <summary>
	/// Gets the margin between images when multiple images are displayed in image viewer. 
	/// The default value will auto judge.
	/// </summary>
	/// <returns type="short"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setMargin = function(iValue){
	/// <summary>
	/// Sets the margin between images when multiple images are displayed in image viewer. 
	/// The default value will auto judge.
	/// </summary>
	/// <param name="iValue" type="short"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getBackgroundColor = function(){
	/// <summary>
	/// Gets the background color of the image viewer. It is a value specifying the 32-bit RGBA value. 
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setBackgroundColor = function(iValue){
	/// <summary>
	/// Sets the background color of the image viewer. It is a value specifying the 32-bit RGBA value. 
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getFitToWindowType = function(){
	/// <summary>
	/// Gets how the image is/should be resized to fit to the width or height of the viewer.  
	/// To use the property under image mode, the page mode should be set to -1 by -1. 
	/// Default is EnumFitWindowType.None.
	/// </summary>
	/// <returns type="EnumFitWindowType"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setFitToWindowType = function(iValue){
	/// <summary>
	/// Sets how the image is/should be resized to fit to the width or height of the viewer. 
	/// </summary>
	/// <param name="iValue" type="EnumFitWindowType"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.EnumFitToWindowType = {

	/// <field name="None">Don't fit to viewer, zoomable.</field>
	None: 4, 

	/// <field name="None">Fit the image to both the width and height of the viewer.</field>
	FitToWindow: 0 
};

dynamsoft.lib.sdk.Ui.prototype.getZoom = function(){
	/// <summary>
	/// Gets zoom factor for the image. 
	/// Only valid under view mode -1 by -1 and the fit to window type is set to EnumFitToWindowType.None. 
	/// </summary>
	/// <returns type="float"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setZoom = function(iValue){
	/// <summary>
	/// Sets zoom factor for the image. 
	/// Only valid under view mode -1 by -1 and the fit to window type is set to EnumFitToWindowType.None. 
	/// </summary>
	/// <param name="iValue" type="float"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getMouseShape = function(){
	/// <summary>
	/// Gets the shape of the mouse (cursor) hover over image container. 
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setMouseShape = function(iValue){
	/// <summary>
	/// Sets the shape of the mouse (cursor) hover over image container. <br />
	/// </summary>
	/// <param name="iValue" type="bool"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getWidth = function(){
	/// <summary>
	/// Gets the image viewer width.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setWidth = function(iValue){
	/// <summary>
	/// Sets the image viewer width.
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.getHeight = function(){
	/// <summary>
	/// Gets the image viewer height.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.Ui.prototype.setHeight = function(iValue){
	/// <summary>
	/// Sets the image viewer height.
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//

dynamsoft.lib.sdk.defAsDcsObject = function(){
	/// <summary>
	/// Define type is DcsObject.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.DcsObject"></returns>
};

dynamsoft.lib.sdk.defAsImageViewer = function(){
	/// <summary>
	/// Define type is ImageViewer.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.ImageViewer"></returns>
};

dynamsoft.lib.sdk.defAsCamera = function(){
	/// <summary>
	/// Define type is Camera.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Camera"></returns>
};

dynamsoft.lib.sdk.defAsVideoviewer = function(){
	/// <summary>
	/// Define type is Videoviewer.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Videoviewer"></returns>
};

dynamsoft.lib.sdk.defAsResolution = function(){
	/// <summary>
	/// Define type is Resolution.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Resolution"></returns>
};

dynamsoft.lib.sdk.defAsIo = function(){
	/// <summary>
	/// Define type is Io.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Io"></returns>
};

dynamsoft.lib.sdk.defAsPdfinfo = function(){
	/// <summary>
	/// Define type is Pdfinfo.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Pdfinfo"></returns>
};

dynamsoft.lib.sdk.defAsImage = function(){
	/// <summary>
	/// Define type is Image.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Image"></returns>
};

dynamsoft.lib.sdk.defAsUi = function(){
	/// <summary>
	/// Define type is Ui.
	/// </summary>
	/// <returns type="dynamsoft.lib.sdk.Ui"></returns>
};

//**--------------------------------------------------------------------------------------------------------------------------------**//
dynamsoft.lib.sdk.DocumentEditor = function(){
	/// <summary>
	/// @class DocumentEditor
	/// </summary>

	/// <field name="document" type="namespace">Some function of document.</field>
	/// <field name="ui" type="namespace">Some function of ui.</field>

	this.document = new dynamsoft.lib.sdk.Document();
	this.ui = new dynamsoft.lib.sdk.documentUI();	
};

dynamsoft.lib.sdk.ArrayDocumentEditor = function(){
	/// <summary>
	/// @array ArrayDocumentEditor <br />
	/// Please use at(index) to call element to make intellisense to work ok.
	/// </summary>
};

dynamsoft.lib.sdk.ArrayDocumentEditor.prototype.at = function(index){
	/// <summary>
	/// Calls element by index.
	/// </summary>
	/// <param name="index" type="int"></param>
	/// <returns type="dynamsoft.lib.sdk.DocumentEditor"></returns>
};

dynamsoft.lib.sdk.Document = function(){
    /// <summary>
	/// @class Document
	/// </summary>
	///</field>
	/// <field name="ondiscardmodified" type="function">
	/// @template ondiscardmodified(event){}
	/// </field>
	
	this.ondiscardmodified = null;
};

dynamsoft.lib.sdk.Document.prototype.adjustContrast = function(contrast){
	/// <summary>
	/// Adjusts the contrast of a document in the editor.
	/// </summary>
	/// <param name="contrast" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.adjustBrightness = function(brightness){
	/// <summary>
	/// Adjusts the brightness of a document in the editor.
	/// </summary>
	/// <param name="brightness" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.rotateLeft = function(){
	/// <summary>
	/// Rotates the document in the editor by 90 degrees counter-clockwise.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.rotateRight = function(){
	/// <summary>
	/// Rotates the document in the editor by 90 degrees clockwise.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.toColor = function(){
	/// <summary>
	/// Converts the document in the editor to a colored document.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.toGrey = function(){
	/// <summary>
	/// Converts the document in the editor to grey scale.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.toBlackWhite = function(){
	/// <summary>
	/// Converts the document in the editor to black and white document.
	/// </summary>
	/// <returns type="bool"></returns>
};


dynamsoft.lib.sdk.Document.prototype.save = function(){
	/// <summary>
	/// Does the document processing like boundary detection, perspective correction and noise removal, etc. and then replace the original document in the image viewer with the processed copy. The processed document will be removed from the editor after the save action.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.saveAs = function(imageViewerContainerId){
	/// <summary>
	/// Does the document processing like boundary detection, perspective correction and noise removal, etc. and then save the processed document as a new copy to a specified image viewer. The processed document will be removed from the editor after the save action.
	/// </summary>
	/// <param name="imageViewerContainerId" type="string"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.Document.prototype.discard = function(){
	/// <summary>
	/// Discards the document that is being editing and remove it from the document editor.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.documentUI = function(){
    /// <summary>
	/// @class documentUI
	/// </summary>
};

dynamsoft.lib.sdk.documentUI.prototype.getContainerId = function(){
	/// <summary>
	/// Gets the container id of a specific document editor.
	/// </summary>
	/// <returns type="string"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.show = function(){
	/// <summary>
	/// Shows the specified document editor.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.hide = function(){
	/// <summary>
	/// Hides the specified document editor.
	/// </summary>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.getZoom = function(){
	/// <summary>
	/// Gets zoom factor for the current document editor.
	/// </summary>
	/// <returns type="float"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.setZoom = function(iValue){
	/// <summary>
	/// Sets zoom factor for the current document editor.
	/// </summary>
	/// <param name="iValue" type="float"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.getDocumentBoundaryThickness = function(){
	/// <summary>
	/// Gets the width of the document boundary (in px).
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.setDocumentBoundaryThickness = function(thickness){
	/// <summary>
	/// Sets the width of the document boundary (in px). The default value is 2px.
	/// </summary>
	/// <param name="thickness" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.getDocumentBoundaryColor = function(){
	/// <summary>
	/// Gets the color of the document boundary.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.setDocumentBoundaryColor = function(iValue){
	/// <summary>
	/// Sets the color of the document boundary. It is a value specifying the 32-bit RGBA. The default value is 0x5EB7E4FF.
	/// </summary>
	/// <param name="iValue" type="int"></param>
	/// <returns type="bool"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.getBackgroundColor = function(){
	/// <summary>
	/// Gets the background color of the document editor. It is a value specifying the 32-bit RGBA value.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.lib.sdk.documentUI.prototype.setBackgroundColor = function(color){
	/// <summary>
	/// Sets the background color of the document editor. It is a value specifying the 32-bit RGBA value.
	/// </summary>
	/// <param name="color" type="int"></param>
	/// <returns type="bool"></returns>
};