function set(obj, path, value){
    const properties = path.split(".")
    properties.reduce((o,p,i) => o[p] = path.split('.').length === ++i ? value : o[p] || {}, obj)
    return obj
}


module.exports = set