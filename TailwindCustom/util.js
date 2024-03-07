export const allShades = (category, prefix, propertyName) => {
  return Object.entries(category).reduce((classes, [variant, value]) => {
    if (typeof value === "string") {
      classes[`.${prefix ? prefix + "-" : ""}${variant}`] = {
        [propertyName]: value,
      };
    } else {
      Object.entries(value).forEach(([key, value]) => {
        classes[`.${prefix ? prefix + "-" : ""}${variant}-${key}`] = {
          [propertyName]: value,
        };
      });
    }
    return classes;
  }, {});
};
