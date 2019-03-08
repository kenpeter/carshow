const orgnizeCarData = (data) => {
  const myhash = new Map();

  // Single show
  for (let i = 0; i < data.length; i+=1) {
    const item = data[i];
    const show = item.name;
    const cars = item.cars;

    // Single car
    for (let k = 0; k < cars.length; k+=1) {
      const model = cars[k].model;
      const make = cars[k].make;

      // Same make
      if (myhash.has(make)) {
        const tmpArr = myhash.get(make);
        tmpArr.push({model, show});
        myhash.set(make, tmpArr);
      } else {
        // make not exist, 1st one
        myhash.set(make, [{model, show}]);
      }
    }
  }

  return myhash;
};

export default orgnizeCarData;
