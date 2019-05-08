import * as numeric from 'numericjs'

let global_cbr_regression_data_x = [];
let global_cbr_regression_data_y = [];

let global_cbr_regression_cubic = function(params, x) {
    return params[0] * x*x*x +
        params[1] * x*x +
        params[2] * x +
        params[3];
}

export default {

    objective: function(params) {
        let total = 0.0;
        for(let i=0; i < global_cbr_regression_data_x.length; ++i) {
          let resultThisDatum = global_cbr_regression_cubic(params, global_cbr_regression_data_x[i]);
          let delta = resultThisDatum - global_cbr_regression_data_y[i];
          total += (delta*delta);
        }
        return total;
    },

    regress: function(data) {
        let initial = [1,1,1,1];
        let terms = [];
        global_cbr_regression_data_x = [];
        global_cbr_regression_data_y = [];
        data.forEach((d, index) => {

                global_cbr_regression_data_x.push(d.x);
                global_cbr_regression_data_y.push(d.y);    
            
        });   
        let minimiser = numeric.uncmin(this.objective,initial);
        for(var j=0; j<minimiser.solution.length; ++j) {
            terms.push(minimiser.solution[j]);
        }
        return terms;
    }

    /*
    var data_x = [2,5,7,12,20,32,50];
    var data_y = [5,10,15,20,25,30,35];
    
    var cubic = function(params,x) {
      return params[0] * x*x*x +
        params[1] * x*x +
        params[2] * x +
        params[3];
    };
    
    var objective = function(params) {
      var total = 0.0;
      for(var i=0; i < data_x.length; ++i) {
        var resultThisDatum = cubic(params, data_x[i]);
        var delta = resultThisDatum - data_y[i];
        total += (delta*delta);
      }
      return total;
    };
    
    var initial = [1,1,1,1];
    var minimiser = numeric.uncmin(objective,initial);
    
    console.log("minimiser:");
    for(var j=0; j<minimiser.solution.length; ++j) {
      console.log(minimiser.solution[j]);
    }*/
}