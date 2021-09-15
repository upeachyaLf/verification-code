const createErrorArray = err =>{
    if (err.name == 'ValidationError') {
      var errorArray = [];
      for (field in err.errors) {
        var errorObj = {}
        errorObj[err.errors[field].properties.path]=err.errors[field].message
        if (errorObj!=={}) errorArray.push(errorObj);
      }
      return errorArray
    }
    return [];
}

module.exports = createErrorArray;