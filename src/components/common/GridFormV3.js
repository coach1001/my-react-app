import React from 'react';
import { methods } from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRows } from '../../actions/tablesData';
import { setLoader } from '../../actions/loader';
import Confirm from 'react-confirm-bootstrap';
import Datetime from 'react-datetime';
import sortBy from 'lodash/sortBy';
import cloneDeep from 'lodash/cloneDeep';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';
import PolynomialRegression from './regression/PolynomialRegression';
import regression from './cubicRegression/cubicRegression';
import * as STYLES from './constants/styleConstants';

function cbr_regression(dataIn, cbr) {
    let rData = [];

    dataIn.forEach((d, index) => {
        if (!(d.y == null) && (index === 0 || d.y > 0)) {
            rData.push({
                x: d.x,
                y: d.y
            });
        }
    });
    let terms = regression.regress(rData);
    const a = terms[0];
    const b = terms[1];
    const c = terms[2];
    const d = terms[3];
    const x1 = -(2 * b) / (6 * a);
    const slopeAtX1 = 3 * a * Math.pow(x1, 2) + 2 * b * x1 + c;
    const y1 = a * Math.pow(x1, 3) + b * Math.pow(x1, 2) + c * x1 + d;

    let x0 = x1 - (y1 / slopeAtX1);
    if (x0 <= 0) {
        x0 = 0;
    }
    const cDepth = x0 + cbr;
    const cLoad = x0 === 0 ? rData[4].y : a * Math.pow(cDepth, 3) + b * Math.pow(cDepth, 2) + c * cDepth + d;
    const val = {
        a: a,
        b: b,
        c: c,
        d: d,
        slope: slopeAtX1,
        correctedDepth: cDepth,
        correctedLoad: cLoad,
        x0: x0,
        y0: 0,
        x1: x1,
        y1: y1
    };
    return val;
}

function _regression(data) {
    let rData = [];
    let result = {};
    data.forEach((d) => {
        if (!(d.x == null) && !(d.y == null))
            rData.push({
                x: d.x,
                y: d.y
            });
    });
    const dlength = rData.length;
    const model = PolynomialRegression.read(rData, dlength);
    const terms = model.getTerms();
    result.equation = terms.reverse();
    return result;
}

class GridForm extends React.Component {
    constructor(props) {
        super(props);
        this.dataAddCallBack = this.dataAddCallBack.bind(this);
    }
    componentDidMount() {
        this.props.setLoader(false);
    }
    componentWillMount() {
        let index = 0;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i].code === this.props.methodCode) {
                index = i;
            }
        }
        let method = cloneDeep(methods[index]);
        let oScopeData = cloneDeep(this.props.scopeData);
        let scopeData = cloneDeep(this.props.scopeData);
        let sampleMethod = cloneDeep(this.props.sampleMethod);
        this.setState({
            dataAdded: true,
            oScopeData: oScopeData,
            scopeData: scopeData,
            method: method,
            sampleMethod: sampleMethod,
            isEmpty: this.props.empty,
            maxY: [],
            redrawGraph: true,
        })
    }
    onChangeComplete(e) {
        let sampleMethod = cloneDeep(this.state.sampleMethod);
        sampleMethod.completed = !sampleMethod.completed;
        this.setState({ sampleMethod: sampleMethod });
    }
    drawTable() {
        let method = cloneDeep(this.state.method);
        let scopeData = cloneDeep(this.state.scopeData);
        const redrawGraph = this.state.redrawGraph;
        let tempMax = 0;
        let maxY = [];
        if (redrawGraph && method.hasGraph && !this.props.empty) {
            method.graph.map((g) => {
                tempMax = 0;
                g.dataSets.map((ds) => {
                    ds.data.map((dt) => {
                        if (dt.isFormula) {
                            var scope = {};
                            scopeData.map((sd) => {
                                dt.scopeVariables.map((sv) => {
                                    if (sv === sd.symbol) {
                                        scope[sd.symbol] = sd.value;
                                    }
                                    return sv;
                                })
                                return sd;
                            })
                            try {
                                dt.x = math.eval(dt.sx, scope);
                                dt.y = math.eval(dt.sy, scope);
                            } catch (ex) {
                            }
                        } else {
                            scopeData.map((sd) => {
                                if (sd.symbol === dt.sx) {
                                    if (sd.value) {
                                        if (dt.toggleLine) {
                                            ds.showLine = true;
                                        }
                                        if (dt.x !== sd.value) {
                                            dt.x = sd.value;
                                        }
                                    }
                                }
                                if (sd.symbol === dt.sy) {
                                    if (sd.value) {
                                        if (dt.y !== sd.value) {
                                            dt.y = sd.value;
                                        }
                                        if (sd.value > tempMax) {
                                            tempMax = sd.value;
                                        }
                                    }
                                }
                                return sd;
                            })
                        }
                        if (dt.y > tempMax) {
                            tempMax = dt.y;
                        }
                        return dt;
                    });
                    return ds;
                });
                // tempMax = Number(tempMax)
                tempMax += g.addMaxY;
                tempMax = Math.round(tempMax / g.roundOff) * g.roundOff;

                maxY.push(tempMax);
                return g;
            })
            method.graph[0].options.dataAddCallBack = this.dataAddCallBack;
        }
        if (redrawGraph && method.hasGraph) {
            method.graph.map((g, gi) => {
                g.options.scales.yAxes[0].ticks.max = maxY[gi];
                return g;
            });
        }
        if (redrawGraph && method.hasGraph) {
            method.graph.map((g) => {
                g.dataSets.map((ds, dsi) => {
                    if (ds.isFormula) {
                        var eq = _regression(ds.data, ds.regression, ds.order);
                        eq.equation.reverse();
                        ds.data = [];
                        ds.xInputs.map((xi, index) => {
                            var y = 0;
                            eq.equation.map((coff, ci) => {
                                if (ci) y += Math.pow(xi.x, ci) * coff;
                                else y += coff;
                                return coff;
                            });
                            xi.y = y;
                            if (y > 0) {
                                ds.data.push({ x: xi.x, y: xi.y });
                            }
                            return xi;
                        })
                    }
                    return ds;
                })
                return g;
            })
        }
        if (redrawGraph && method.hasGraph) {
            scopeData.map((sd) => {
                method.graph.map((g) => {
                    g.dataSets.map((ds, dsi) => {
                        if (ds.isFormula) {
                            ds.xInputs.map((xi) => {
                                if (xi.scopeVal === sd.symbol) {
                                    sd.value = Math.round(xi.y);
                                }
                                return xi;
                            })
                        }
                        return ds;
                    })
                    return g;
                })
                return sd;
            });
        }
        if (redrawGraph && method.hasGraph) {
            method.graph.map((g, gi) => {
                g.dataSets.map((ds, dsi) => {
                    ds.data = sortBy(ds.data, 'x');
                    return ds;
                })
                return g;
            });
        }
        var arrayIndex = 0;
        method.grid.map((row, rI) => {
            if (row.isArray) arrayIndex = rI;
            return row;
        })
        var valArray = [];
        var rowObj = {};
        var tdArray = [];
        var newRows = [];
        var sum = 0;
        if (arrayIndex) {
            rowObj = cloneDeep(method.grid[arrayIndex]);
            tdArray = cloneDeep(method.grid[arrayIndex].td);
            scopeData.map((d) => {
                if (d.symbol === rowObj.scopeVariable) {
                    if (d.value_string) {
                        valArray = d.value_string.split(',');
                        valArray = valArray.map((val) => {
                            return parseFloat(val);
                        })
                    } else {
                        valArray = [0];
                    }

                }
                return d;
            })
            valArray.map((val, vI) => {
                sum += val;
                var temp = cloneDeep(tdArray);
                var temptd = [];
                temp.map((c, cI) => {
                    c.isArrayVal = true;
                    c.arrayIndex = vI;
                    if (c.arrayVal === 'index') c.value = vI + 1;
                    if (c.arrayVal === 'value') c.value = val;
                    if (c.arrayVal === 'average') c.value = +(sum / (vI + 1)).toFixed(1);
                    return c;
                })
                temptd.push(temp);
                newRows.push({ td: temp, scopeVar: rowObj.scopeVariable, index: vI });
                return val;
            });
            method.grid.splice(arrayIndex, 1);
            newRows.map((row, rI) => {
                method.grid.splice(arrayIndex + rI, 0, row);
                return row;
            })
        }
        method.grid.map((row, rI) => {
            row.td.map((col, cI) => {
                scopeData.map((d, dI) => {
                    if (d.symbol === col.scopeVariable) {
                        if (d.unit === 'string') {
                            col.value_string = d.value_string ? d.value_string : (d.default_value ? d.default_value : '');
                        } else {
                            if (d.input_type === 'in') {
                                col.value = d.value ? d.value : (d.default_value ? d.default_value : undefined);
                            } else {
                                col.value = d.value ? this.formatValue(d.value, d.step, d.to_fixed, d.unit) : (d.default_value ? d.default_value : undefined);
                            }
                        }
                        col.unit = d.unit ? d.unit : undefined;
                        col.min = d.minimum ? d.minimum : undefined;
                        col.max = d.maximum ? d.maximum : undefined;
                        col.step = d.step ? d.step : 0.01;
                        col.to_fixed = d.to_fixed ? d.to_fixed : null;
                        col.type = d.input_type ? d.input_type : undefined;
                    }
                    return d;
                })
                return col;
            })
            return row;
        })
        return <div>
            {
                this.props.hideTopControls === true ? null :
                    <div className="contatiner row">
                        <div className="col-xs-4">
                            <div className="input-group">
                                <span className="input-group-addon">Tested On</span>
                                <Datetime utc={true} timeFormat="HH:mm:ss" dateFormat="DD-MM-YYYY" onChange={this.onChangeSample.bind(this)} name="tested_on" value={moment.utc(this.state.sampleMethod.tested_on)} />
                            </div>
                        </div>

                        <div className="col-xs-4">
                            <div className="input-group">
                                <span className="input-group-addon">Tested By</span>
                                <input onChange={this.onChangeSample.bind(this)} value={this.state.sampleMethod.tested_by || ''} name="tested_by" type="text" className="form-control" placeholder="Name of Tester" />
                            </div>
                        </div>

                    </div>
            }
            {
                this.props.empty ? null :
                    <div className="input-group checkbox">
                        <label style={{ fontSize: '1.3em', fontWeight: 'normal' }}><input name="completed" type="checkbox" onChange={this.onChangeComplete.bind(this)} checked={this.state.sampleMethod.completed} />&nbsp;Completed</label>
                    </div>

            }
            {
                this.props.hideTopControls === true ? null :
                    <div>
                        <Confirm onConfirm={this.clearValues.bind(this)} body="Are you sure you want to Clear Data?" confirmBSStyle='danger' confirmText="Confirm Clear" title="Clear Data">
                            <button className="btn btn-default hidden-print">Clear Values</button>
                        </Confirm>&nbsp;
                        <Confirm onConfirm={this.resetValues.bind(this)} body="Are you sure you want to Reset Data?" confirmBSStyle='warning' confirmText="Confirm Reset" title="Reset Data">
                            <button className="btn btn-warning hidden-print">Reset Values</button>
                        </Confirm>
                        <br className="hidden-print" /><br className="hidden-print" />
                    </div>
            }
            <table className="table-bordered fixed" width="100%" >
                <colgroup>
                    {
                        method.colLayout.map((c, i) => { return <col key={i} span={c.span} style={{ width: c.width }}></col> })
                    }
                </colgroup>
                <tbody>
                    {
                        method.grid.map((tr, trIndex) =>
                            <tr key={trIndex} style={tr.style}>
                                {
                                    tr.td.map((td, tdIndex) => {
                                        if (td.isGraph && method.hasGraph) {
                                            return (
                                                <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                    <div style={{ width: '310px', paddingTop: '15px' }}>
                                                        <Line height={230} width={310} id={`tableChart_${tdIndex}`} ref={`chart_${trIndex}`} data={STYLES.testData} options={STYLES.testData.options} />
                                                    </div>
                                                </td>
                                            )
                                        } else if (!td.isVal) {
                                            // JUST A LABEL
                                            return (
                                                <td className={td.isLogo ? 'logo' : ''} key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.label}</td>
                                            )
                                        } else {
                                            // VALUE OR ICONS
                                            if (td.isIcon) {
                                                // ICONS
                                                if (td.icon === 'minus') {
                                                    // MINUS
                                                    return (
                                                        <td key={tdIndex} style={{ padding: '4px' }}>
                                                            <input type="button" value="Delete" onClick={this.onDeleteFromArray.bind(this, { scopeVariable: tr.scopeVar, index: tr.index })} className='btn btn-danger btn-block hidden-print' />
                                                        </td>
                                                    )
                                                } else {
                                                    // ADD
                                                    return (
                                                        <td key={tdIndex} style={{ padding: '4px' }}>
                                                            <input type="button" value="Add" onClick={this.onAddToArray.bind(this, { scopeVariable: tr.scopeVar, index: tr.index })} className='btn btn-info btn-block hidden-print' />
                                                        </td>
                                                    )
                                                }
                                            } else {
                                                // VALUE
                                                if (td.type === 'cbr_regression_tmh1' || td.type === 'cbr_regression_sans' || td.type === 'calc' || td.type === 'calc_avg_array' || td.type === 'graph' || td.arrayVal === 'index' || td.arrayVal === 'average') {
                                                    //IS CALC
                                                    if (td.unit === 'datetime') {
                                                        // DATETIME
                                                        return (
                                                            <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                                <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} inputProps={{ disabled: true }} timeFormat="HH:mm:ss" dateFormat={false} value={this.props.empty ? '' : Math.floor(td.value)} />
                                                            </td>
                                                        )
                                                    } else {
                                                        // NOT DATETIME
                                                        return (
                                                            <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                                <div className="input-group">
                                                                    <input tabIndex={-1} ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)} step={td.step} type='number' value={td.value != null ? (Math.floor(td.value) === 100 ? 100 : td.value) : ''} readOnly className='form-control' style={td.style} />
                                                                    <span className="input-group-addon">
                                                                        {
                                                                            td.isArrayVal ? <div style={{ fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: td.arrUnit }} /> : <div style={{ fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: td.unit }} />
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                } else {
                                                    //NOT CALC
                                                    if (td.unit === 'string') {
                                                        // STRING
                                                        return (
                                                            <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                                <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChangeString.bind(this)} value={this.props.empty ? '' : td.value_string} type='text' className='form-control' style={td.style} />
                                                            </td>
                                                        )
                                                    } else {
                                                        // NOT STRING
                                                        if (td.unit === 'datetime') {

                                                            // DATETIME
                                                            return (
                                                                <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                                    <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} timeFormat="HH:mm:ss" dateFormat="DD/MM/YYYY" onChange={this.onChangeTime.bind(this, td.scopeVariable)} value={this.props.empty ? '' : Math.floor(td.value)} />
                                                                </td>
                                                            )
                                                        } else {
                                                            // NOT DATETIME
                                                            if (td.type === 'in_array') {
                                                                // IN ARRAY
                                                                return (
                                                                    <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                                        <div className="input-group"><input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChangeArray.bind(this, { scopeVariable: tr.scopeVar, index: tr.index })} min={td.min} max={td.max} step={td.step} value={this.props.empty ? '' : td.value} type='number' className='form-control' style={td.style} /><span className="input-group-addon"><div style={{ fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: td.arrUnit }} /></span></div>
                                                                    </td>
                                                                )
                                                            } else {
                                                                // NOT IN ARRAY
                                                                return (
                                                                    <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                                                                        <div className="input-group"><input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)} min={td.min} max={td.max} step={td.step} value={td.value != null ? td.value : ''} type='number' className='form-control' style={td.style} /><span className="input-group-addon"><div style={{ fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: td.unit }} /></span></div>
                                                                    </td>
                                                                )
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <br />
            {
                this.props.empty ? null :
                    <Confirm onConfirm={this.CalculateAndSave.bind(this)} body="Are you sure you want to Save Data?" confirmBSStyle='primary' confirmText="Confirm Save" title="Save Method Data">
                        <button className="hidden-print btn-block btn btn-lg btn-success">Calculate and Save</button>
                    </Confirm>
            }

            {
                method.hasGraph && !this.props.empty && !this.props.hideTopControls ? method.graph.map((g, i) => {
                    return <Line key={i} height={200} ref={`chart_${i}`} data={{ datasets: g.dataSets }} options={g.options} />
                })
                    : null
            }
        </div>
    }
    onChangeSample(e) {
        let sampleMethod = cloneDeep(this.state.sampleMethod);
        if (e._isAMomentObject) {
            sampleMethod.tested_on = e._d;
        } else {
            sampleMethod[e.target.name] = e.target.value;
        }

        this.setState({ sampleMethod: sampleMethod });
    }
    onDeleteFromArray(data, e) {
        let scopeData = cloneDeep(this.state.scopeData);
        let index = data.index;
        var valArray = [];

        scopeData.map((d) => {
            if (d.symbol === data.scopeVariable) {
                if (d.value_string) {
                    valArray = d.value_string.split(',');
                    valArray = valArray.map((val) => {
                        return parseFloat(val);
                    })
                } else {
                    valArray = [];
                }
            }
            return d;
        })

        valArray.splice(index, 1);

        scopeData.map((d) => {
            if (d.symbol === data.scopeVariable) {
                d.value_string = valArray.toString();
            }
            return d;
        })
        this.setState({ scopeData: scopeData, redrawGraph: true });
    }
    onAddToArray(data, e) {
        let scopeData = cloneDeep(this.state.scopeData);
        let index = data.index;
        var valArray = [];

        scopeData.map((d) => {
            if (d.symbol === data.scopeVariable) {
                if (d.value_string) {
                    valArray = d.value_string.split(',');
                    valArray = valArray.map((val) => {
                        return parseFloat(val);
                    })
                } else {
                    valArray = [];
                }
            }
            return d;
        })

        valArray.splice(index + 1, 0, 0);

        scopeData.map((d) => {
            if (d.symbol === data.scopeVariable) {
                d.value_string = valArray.toString();
            }
            return d;
        })
        this.setState({ scopeData: scopeData, redrawGraph: true });
    }
    onChangeArray(data, e) {
        let scopeData = cloneDeep(this.state.scopeData);
        let index = data.index;
        var valArray = [];

        scopeData.map((d) => {
            if (d.symbol === data.scopeVariable) {
                if (d.value_string) {
                    valArray = d.value_string.split(',');
                    valArray = valArray.map((val) => {
                        return parseFloat(val);
                    })
                } else {
                    valArray = [];
                }
            }
            return d;
        })
        valArray.splice(index, 1, parseFloat(e.target.value));

        scopeData.map((d) => {
            if (d.symbol === data.scopeVariable) {
                d.value_string = valArray.toString();
            }
            return d;
        })

        this.setState({ scopeData: scopeData });
    }
    resetValues() {
        this.setState({ scopeData: this.state.oScopeData, redrawGraph: true });
    }
    clearValues() {
        let method = cloneDeep(this.state.method.grid);
        let scopeData = cloneDeep(this.state.scopeData);

        method.map((row, rI) => {
            row.td.map((col, cI) => {
                scopeData.map((d, dI) => {

                    if (d.input_type === 'in_array') {
                        d.value_string = '';
                    }

                    if (d.symbol === col.scopeVariable) {
                        this.refs[d.symbol].value = null;
                        col.value = 0.0;
                        col.value_string = '';
                        d.value = 0.0;
                        d.value_string = '';
                    }
                    return d;
                })
                return col;
            })
            return row;
        })


        this.parseInput(scopeData);
    }
    onChangeTime(symbol, e) {
        let scopeData = cloneDeep(this.state.scopeData);

        scopeData.map((d, index_) => {
            if (symbol === d.symbol) {
                d.value = e.valueOf();
            }
            return d;
        });
        this.setState({ scopeData: scopeData, redrawGraph: true });
    }
    goBack() {
        this.context.router.goBack();
    }
    dataAddCallBack(data) {

        let method = cloneDeep(this.state.method);

        if (this.state.dataAdded) {
            method.graph[0].dataSets[0].data = method.graph[0].dataSets[0].data.filter((d) => {
                if (!d.pop) {
                    return d
                } else {
                    return null;
                }
            })
            method.graph[0].dataSets[0].data.push({ x: data.x, y: data.y, pop: data.pop });
            method.graph[0].dataSets[0].showLine = true;
        }
        this.setState({ method: method, redrawGraph: true });
    }
    saveData(scopeData) {
        let oScopeData = cloneDeep(this.state.oScopeData);
        let index = 0;

        for (let i = 0; i < methods.length; i++) {
            if (methods[i].code === this.props.methodCode) {
                index = i;
            }
        }
        this.props.setLoader(true);

        let method = cloneDeep(methods[index]);
        var promises = [];
        var axiosConfig = { method: '', url: `${window.configGA.API_DB}/sample_has_variables`, data: {}, headers: { 'Prefer': 'return=representation' } };

        scopeData.map((row, rI) => {
            var request = cloneDeep(axiosConfig);

            if (row.value == null || isNaN(row.value)) {
                row.value = 0;
            }

            if (row.id && row.input_type !== 'constant') {
                request.method = 'patch';
                if (row.unit === 'string' || row.input_type === 'in_array') {
                    if (row.value_string !== oScopeData[rI].value_string) {
                        request.url = request.url.concat(`?id=eq.${row.id}`);
                        request.data = { value_string: row.value_string };
                        promises.push(request);
                    }
                } else {
                    if (row.value !== oScopeData[rI].value) {
                        request.url = request.url.concat(`?id=eq.${row.id}`);
                        request.data = { value: row.value };
                        promises.push(request);
                    }
                }
            } else if (row.type !== 'constant') {
                request.method = 'post';
                if (row.unit === 'string' || row.input_type === 'in_array') {
                    request.headers['xScopeVariable'] = row.symbol;
                    request.data = { value_string: row.value_string, sample: this.props.sampleId, variable: row.variable_id };
                    promises.push(request);
                } else {
                    request.headers['xScopeVariable'] = row.symbol;
                    request.data = { value: row.value, sample: this.props.sampleId, variable: row.variable_id };
                    promises.push(request);
                }
            }

            return row;
        })

        var request = cloneDeep(axiosConfig);
        request.url = `${window.configGA.API_DB}/sample_has_methods?id=eq.${this.state.sampleMethod.id}`;
        request.data = { completed: this.state.sampleMethod.completed, tested_on: this.state.sampleMethod.tested_on, tested_by: this.state.sampleMethod.tested_by };
        request.method = 'patch';
        promises.push(request);

        this.props.sendRows(promises).then((res) => {
            res.map((r) => {
                scopeData.map((sd) => {
                    if (r.config.headers.xScopeVariable === sd.symbol && r.config.method === 'post') {
                        sd.id = r.data[0].id;
                    }
                    return sd;
                });
                return r;

            });
            this.props.setLoader(false);
            this.setState({ scopeData: scopeData, oScopeData: scopeData, method: method, redrawGraph: true });
        });

    }

    formatValue(value, step, fixed, unit) {
        value = Number(value);
        if (step == null && fixed == null) {
            return value.toFixed(1);
        } else if (unit === 'factor') {
            return value.toFixed(4);
        } else if (step === 0.01) {
            return value.toFixed(2);
        } else if (fixed) {
            return value.toFixed(fixed);
        } else {
            return value.toFixed();
        }
    }

    parseInput(scopeData, calcOnly = false) {
        let scope = {};
        scopeData.map((d) => {
            scope[d.symbol] = 0;
            if (d.unit !== 'string' && d.unit !== 'in_array') {
                if (d.input_type === 'in') {
                    try {
                        scope[d.symbol] = Number(d.value);
                        if (isNaN(scope[d.symbol])) {
                            scope[d.symbol] = (d.default_value ? d.default_value : 0);
                        }
                    } catch (err) {
                        scope[d.symbol] = (d.default_value ? d.default_value : 0);
                    }
                }
            }
            else {
                scope[d.symbol] = d.value;
            }
            return d;
        });

        scopeData.map((d) => {
            let round = d.step * 10000;
            if (d.unit !== 'string' && d.unit !== 'in_array') {
                if (round) { } else { round = 100; }

                if (d.input_type === 'cbr_regression_tmh1' || d.input_type === 'cbr_regression_sans') {
                    const cbr = d.input_type === 'cbr_regression_tmh1' ? 2.54 : 2.5;
                    const variables = d.formula.split(',');

                    let regArray = [];
                    variables.forEach((v, idx) => {
                        regArray.push({ y: scope[v], x: idx * cbr / 4 });
                    });
                    const regression = cbr_regression(regArray, cbr);
                    scope[d.symbol] = Math.round(regression.correctedLoad * round) / round;
                    scope[d.symbol + '_x0'] = regression.x0;
                    scope[d.symbol + '_x1'] = regression.x1;
                    scope[d.symbol + '_y1'] = regression.y1;
                }

                if (d.input_type === 'calc') {
                    try {
                        let val = math.eval(d.formula, scope);
                        scope[d.symbol] = Number(this.formatValue(val, d.step, d.to_fixed, d.unit));

                        if (parseFloat(scope[d.symbol]) === 0 || isNaN(scope[d.symbol])) {
                            scope[d.symbol] = 0;
                            this.refs[d.symbol].value = null;
                        }
                    } catch (err) {
                        scope[d.symbol] = (d.default_value ? d.default_value : 0);
                        if (parseFloat(scope[d.symbol]) === 0 && this.refs[d.symbol] != null) {
                            this.refs[d.symbol].value = null;
                        }
                    }
                    if (isNaN(scope[d.symbol]) && this.refs[d.symbol] != null) {
                        scope[d.symbol] = 0;
                        this.refs[d.symbol].value = null;
                    }
                }

                if (d.input_type === 'calc_avg_array') {
                    var scope2 = cloneDeep(this.state.scopeData);
                    var sum = 0;
                    var valArray = [];
                    scope2.map((d2) => {
                        if (d.formula === d2.symbol) {
                            if (d2.value_string) {
                                valArray = d2.value_string.split(',');
                                valArray = valArray.map((val) => {
                                    return parseFloat(val);
                                })
                            } else {
                                valArray = [];
                            }
                        }
                        return d;
                    })

                    valArray.map((val) => {
                        sum += val;
                        return val;
                    })
                    scope[d.symbol] = Math.round((sum / (valArray.length)) * 10) / 10;
                }

                if (!isFinite(scope[d.symbol])) {
                    scope[d.symbol] = (d.default_value ? d.default_value : 0);
                }

                if (isNaN(scope[d.symbol])) {
                    scope[d.symbol] = (d.default_value ? d.default_value : 0);
                    if (scope[d.symbol === 0]) {
                        this.refs[d.symbol].value = null;
                    }
                }
            }
            return d;
        });
        scopeData.map((d, index) => {
            scopeData[index].value = scope[d.symbol];
            return d;
        });
        if (!calcOnly) {
            this.saveData(scopeData);
        }
    }
    CalculateAndSave(calcOnly) {
        var scopeData = cloneDeep(this.state.scopeData);
        this.parseInput(scopeData, calcOnly);
    }
    onChangeString(e) {
        e.preventDefault();
        let scopeData = cloneDeep(this.state.scopeData);
        scopeData.map((d) => {
            if (e.target.id === d.symbol) {
                d.value_string = e.target.value;
            }
            return d;
        });
        this.setState({ scopeData: scopeData, redrawGraph: true });
    }
    onChange(e) {
        e.preventDefault();
        let scopeData = cloneDeep(this.state.scopeData);
        scopeData.map((d) => {
            if (e.target.id === d.symbol) {
                d.value = e.target.value;
            }
            return d;
        });
        this.setState({ scopeData: scopeData, redrawGraph: true });
    }
    render() {
        return <div>
            {this.state.scopeData ? this.drawTable() : null}
        </div>
    }
}

GridForm.propTypes = {
    scopeData: React.PropTypes.array.isRequired,
    methodCode: React.PropTypes.string.isRequired,
    sampleId: React.PropTypes.number.isRequired,
    sampleMethod: React.PropTypes.object.isRequired,
    empty: React.PropTypes.bool.isRequired,
    methods: React.PropTypes.array.isRequired,
    sendRows: React.PropTypes.func.isRequired,
    setLoader: React.PropTypes.func.isRequired,
    hideTopControls: React.PropTypes.bool
}

GridForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}


export default connect(null, { sendRows, setLoader })(GridForm);