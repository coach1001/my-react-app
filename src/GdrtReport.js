import React, { Component } from 'react';
import { fetchSelects } from './actions/cascadeSelect';
import { fetchAllSampleVariables } from './actions/sampleVariables';
import { fetchSample } from './actions/samples';
import { connect } from 'react-redux';
import { methods } from './components/common/constants/gridFormConstants';
import GridForm from './components/common/GridFormV3';
import { setLoader } from './actions/loader';

class GdrtReport extends Component {

    constructor(props) {
        super(props);
        this.onPrint = this.onPrint.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllSampleVariables(this.props.params.sampleId);
        this.props.fetchSample(this.props.params.sampleId);
    }
    
    onPrint() {
        window.print();
    }

    render() {
        return (
            <div className="container">
                <button className="btn btn-lg btn-block btn-primary hidden-print" onClick={this.onPrint.bind(this)}>
                    Print Report
                </button>
                <div id="printDiv">
                    <div className="page">
                        <div className="subpage">
                            {
                                this.props.sampleVariables.length > 0 && Object.keys(this.props.sample).length > 0 ?
                                <GridForm hideTopControls={true} methods={methods} empty={true} sampleMethod={{}} scopeData={this.props.sampleVariables} sampleId={parseInt(this.props.params.sampleId, 10)} methodCode={'REPORT-1-THM1'} />
                                : null
                            }
                        </div>
                    </div>
                    <div className="page">
                        <div className="subpage">
                            <div className="landscape">
                               <div>
                                   Hi
                               </div>
                               <br></br>
                               <div>
                                   My name is francois weber
                                   </div>
                            </div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="subpage">Page 3/7</div>
                    </div>
                    <div className="page">
                        <div className="subpage">Page 4/7</div>
                    </div>
                    <div className="page">
                        <div className="subpage">Page 5/7</div>
                    </div>
                    <div className="page">
                        <div className="subpage">Page 6/7</div>
                    </div>
                    <div className="page">
                        <div className="subpage">Page 7/7</div>
                    </div>
                </div>
            </div>
        );
    }
}

GdrtReport.propTypes = {
    fetchSelects: React.PropTypes.func.isRequired,
    fetchAllSampleVariables: React.PropTypes.func.isRequired,
    setLoader: React.PropTypes.func.isRequired,
    fetchSample: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
      isFetching: state.sampleVariables.isFetching,
      sampleVariables: state.sampleVariables.sampleVariables,
      sample: state.samples.sample,
    }
  }
export default connect(mapStateToProps, { fetchSample, setLoader, fetchSelects, fetchAllSampleVariables })(GdrtReport);