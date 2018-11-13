/*global Dynamsoft*/
/*global EnumDWT_ImageType*/
/*global EnumDWT_ConvertMode*/
/*global EnumDWT_CapSupportedSizes*/
import React, {Component} from 'react';
import Iframe from 'react-iframe';
import './WebTwain.css';
import dwt from 'dwt';

let DWObject = null;

export class WebTwain extends Component {

    state = {sourceList: [], pixelType: 0, loaded: false, imagesIndex: [], pdf: ""};

    setPixelType = pixelType => {
        this.setState({pixelType})
    }

    transferEnd = (index) => {
        DWObject.SetImageWidth(index, 515);
    }

    captureClick = () => {
        const selected = DWObject.SelectSourceByIndex(0);
        if (selected) {
            DWObject.CloseSource();
            DWObject.OpenSource();
            DWObject.PageSize = EnumDWT_CapSupportedSizes.TWSS_A4LETTER;
            DWObject.IfShowUI = false;
            DWObject.PixelType = this.state.pixelType;
            DWObject.Resolution = 300;
            DWObject.IfDisableSourceAfterAcquire = true;
            DWObject.AcquireImage();
        }
    }

    add = () => {
        const indices = [...this.state.imagesIndex];
        DWObject.ConvertToBase64(indices, EnumDWT_ImageType.IT_PDF, (info) => {
            let base64 = "data:application/pdf;base64," + info.getData(0, info.getLength());
            this.setState({pdf: base64})
        }, () => {
            alert("Convert failure");
        });
    }

    saveClick = () => {
        DWObject.SaveSelectedImagesAsMultiPagePDF("Test.pdf", () => {
        }, () => {
            alert("Failure")
        });
    }

    loadClick = () => {
        DWObject.Addon.PDF.SetResolution(300);
        // DWObject.Addon.PDF.SetConvertMode(EnumDWT_ConvertMode.CM_RENDERALL);
        DWObject.LoadImageEx("", EnumDWT_ImageType.IT_PDF, () => {
            this.getImageIndex();
        }, (errorCode, errorString) => {
            alert(errorCode + " - " + errorString);
        });
    }

    onWebTwainReady = () => {
        DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        DWObject.IfShowUI = false;
        DWObject.Width = 515;  // Set the width
        DWObject.Height = 511; // Set the height
        const opened = DWObject.OpenSourceManager();
        if (opened) {
            let sourceList = [];
            let count = DWObject.SourceCount;
            for (let i = 0; i < count; i++) {
                let name = DWObject.GetSourceNameItems(i);
                sourceList.push({name, id: i})
            }
            this.setState({sourceList});
        }
        /**
         * EVENTS
         */
        DWObject.RegisterEvent('OnPostTransfer', (index) => {
            if (index)
                this.transferEnd(index);

        });
        DWObject.RegisterEvent('OnPostAllTransfers', () => {
            this.getImageIndex();
        });
        DWObject.RegisterEvent('OnGetFilePath', function (bSave, filesCount, index, path, filename) {
            alert("bSave:" + bSave + " fileCount: " + filesCount + " index: " + index + " path: " + path + "\\" + filename);
        });
    }

    getImageIndex = () => {
        const count = DWObject.HowManyImagesInBuffer;
        let imagesIndex = [];
        DWObject.SelectedImagesCount = count
        for (let i = 0; i < count; i++) {
            const index = DWObject.SetSelectedImageIndex(i);
            if (index)
                imagesIndex.push(i);
        }
        this.setState({loaded: imagesIndex.length > 0, imagesIndex})
    }


    setSource = event => {
        let index = event.target.value;
        DWObject.SelectSourceByIndex(index);
    }


    setViewMode = event => {
        let d = event.target.value;
        DWObject.SetViewMode(d, d);
    }

    removeAllImages = (selected = false) => {
        if (selected)
            DWObject.RemoveAllSelectedImages();
        else
            DWObject.RemoveAllImages();
        this.getImageIndex();
    }

    initWebTwain = () => {
        Dynamsoft.WebTwainEnv.ProductKey = "t0068MgAAAIuJJitzURXpJJgiuyJ2WI5k+caWNR74oyWBs6UVElf0sS2LJwQOc4r3vS1+q5fbmfVKqwGUDRfxePc2zpFtCOo=";
        Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', this.onWebTwainReady);
    }

    componentWillMount() {
        console.log(Dynamsoft)
        this.initWebTwain();

    }

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4">

                        <div id="dwtcontrolContainer"></div>
                        <hr/>
                        <label style={{marginRight: 15}}>
                            <input type='radio' id='BW' name='PixelType' value={this.state.pixelType === 0}
                                   onClick={() => this.setPixelType(0)}/>B&amp;W
                        </label>
                        <label style={{marginRight: 15}}>
                            <input type='radio' id='Gray' name='PixelType' value={this.state.pixelType === 1}
                                   onClick={() => this.setPixelType(1)}/>Gray
                        </label>
                        <label style={{marginRight: 15}}>
                            <input type='radio' id='RGB' name='PixelType' value={this.state.pixelType === 2}
                                   onClick={() => this.setPixelType(2)}/>Color
                        </label>
                        <br/>
                        <div style={{display: 'inline-flex'}}>
                            <button className="btn btn-primary" onClick={this.captureClick}
                                    style={{marginRight: 10}}>Scan
                            </button>

                            <button className="btn btn-success" disabled={!this.state.loaded} onClick={this.add}
                                    style={{marginRight: 10}}>Add
                            </button>
                            <button className="btn btn-primary" onClick={this.saveClick} style={{marginRight: 10}}>
                                Save
                            </button>
                            <button className="btn btn-primary" onClick={this.loadClick}>Load</button>
                        </div>
                        <hr/>
                        <div style={{display: 'inline-flex', marginLeft: 10}}>

                            <div>
                                View Mode
                                <select onChange={this.setViewMode} style={{marginRight: 10}}>
                                    <option value={1}>1x1</option>
                                    <option value={2}>2x2</option>
                                    <option value={3}>3x3</option>
                                    <option value={4}>4x4</option>
                                    <option value={5}>5x5</option>
                                </select>
                            </div>
                            <div>
                                Sources
                                <select onChange={this.setSource} style={{marginRight: 10}}>
                                    {this.state.sourceList.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <hr/>
                        <div style={{display: 'inline-flex', marginLeft: 10}}>

                            <button className="btn btn-danger" disabled={!this.state.loaded}
                                    onClick={this.removeAllImages} style={{marginRight: 10}}>
                                Remove All
                            </button>
                            <button className="btn btn-danger" disabled={!this.state.loaded}
                                    onClick={() => this.removeAllImages(true)} style={{marginRight: 10}}>
                                Remove Selected
                            </button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Iframe url={this.state.pdf} width="100%" height="750px" display="initial"
                                position="relative" allowFullScreen/>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
