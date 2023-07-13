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

function flattenImperative(oldObject, parentName="") {
    let result = {};
    
    const stack = [{ obj: oldObject, prefix: parentName }];
    
    while (stack.length > 0) {
      const { obj, prefix } = stack.pop();
      
      for (let key in obj) {
        const value = obj[key];
        const propName = prefix ? `${prefix}_${key}` : key;
        
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          stack.push({ obj: value, prefix: propName });
        } else {
          result[propName] = value;
        }
      }
    }
    
    return result;
  }

 
module.exports = {flatten, flattenImperative}