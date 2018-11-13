/*global dynamsoft*/
import React, {Component} from 'react';

require("dwt");
let dcsObject = null;
let imageViewer = null;

export class WebScan extends Component {
    timer = null;
    state = {dcsObject: null, imageViewer: null, images: [], allowedResolutions: []}

    onInitSuccess = (videoViewerId, imageViewerId) => {
        dcsObject = dynamsoft.dcsEnv.getObject(videoViewerId);
        imageViewer = dcsObject.getImageViewer(imageViewerId);
        // Sets the capture mode to document mode.
        dcsObject.videoviewer.setMode(dcsObject.videoviewer.EnumMode.Image)
        const cameraList = dcsObject.camera.getCameraList();
        if (cameraList.length > 0) {
            dcsObject.camera.takeCameraOwnership(cameraList[0]);

            let allowedResolutions = dcsObject.camera.resolution.getAllowedValues();
            if (allowedResolutions && allowedResolutions.length > 0) {
                this.setState({allowedResolutions});
            }
            if (dcsObject.getErrorCode() !== 0)
                alert(dcsObject.getErrorCode() + " - " + dcsObject.getErrorString());
            else {
                dcsObject.camera.playVideo();
            }
        } else {

            alert('No camera is connected.');
        }

    }

    loadImages = () => {

        imageViewer = dcsObject.getImageViewer("dcsImageContainer")
        const totalImgCount = imageViewer.image.getCount();
        if (totalImgCount !== this.state.images.length) {
            const images = [];
            for (let i = 0; i < totalImgCount; i++) {
                const imagedata = "data:image/png;base64," + imageViewer.io.convertToBase64([i], imageViewer.io.EnumImageType.PNG);
                images.push(imagedata);
            }
            this.setState({images});
        }
    }


    onClickCapture = () => {
        dcsObject.camera.captureImage('dcsImageContainer');
        this.loadImages();
    }

    onChangeResolution = (resolutionObject) => {
        resolutionObject = JSON.parse(resolutionObject.target.value);
        dcsObject.camera.resolution.setCurrent({width: resolutionObject.width, height: resolutionObject.height});
    }

    onInitFailure = (errorCode, errorString) => {
        alert('Init failed: ' + errorString);
    }

    componentWillMount() {
        // dynamsoft.dcsEnv.productKey = "t0111CQIAALcj+X72maXFkrCPx7/YTEAITGcM2SdKp/7a/LduCJHdQPxnRwj/6dta03o9LDiAUFcQo1Rq+EOceKEdvmLLpNNuRYOx9OGFUcOs+GESDxP4GTbtEwQ3Whs1mLg2tNxHMfu7nOLrm17lEWpt";
        dynamsoft.dcsEnv.productKey = "t0068MgAAALC8wkjdEnNeDH9PgVTLxjgnq3xYEEvV1kOjW7JrCdBbw1mvgCEnVjWlyeWUKiNYTyv+uatI2QgDpLeYibl8c84=";
        console.log(dynamsoft.dcsEnv);
        dynamsoft.dcsEnv.init('dcsVideoContainer', 'dcsImageContainer', this.onInitSuccess, this.onInitFailure);
        window.onbeforeunload = function () {
            if (dcsObject) dcsObject.destroy();
        };
    }

    componentUnmount() {
        if (dcsObject) dcsObject.destroy();
    }

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-primary" onClick={this.onClickCapture}>Capture</button>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        ALLOWED RESOLUTIONS - {this.state.allowedResolutions.length}
                        <hr/>
                        <select onChange={this.onChangeResolution}>
                            {this.state.allowedResolutions.map((item, i) => {
                                return (<option key={i} value={JSON.stringify(item)}>Width: {item.width} -
                                    Height: {item.height}</option>)
                            })}
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div id="dcsVideoContainer"
                             style={{
                                 position: 'absolute', top: 47.875, left: 0, width: 468, height: 263.25
                             }}></div>
                        <div id="dcsImageContainer" style={{display: 'none'}}></div>

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                this.state.images.map((image, key) => {
                                    return (
                                        <div key={key} className="col-md-3" style={{margin: 20}}>
                                            <img src={image} alt={key} style={{width: '100%', height: 250}}/>
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );

    }
}

