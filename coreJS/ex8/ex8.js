function flatten(oldObject, parentName = "") {
    return Object.entries(oldObject).reduce((result, [key, value]) => {
        const propName = parentName ? `${parentName}_${key}` : key;
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            return { ...result, ...flatten(value, propName) };
        } else {
            return { ...result, [propName]: value };
        }
    }, {});
  }

 
module.exports = flatten