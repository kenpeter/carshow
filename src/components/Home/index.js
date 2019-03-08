import React from 'react';

const Home = ({ data }) => {
  function buildList() {
    const finalArr = [];

    data.forEach((arr, make) => {
      const tmpArr = [];
      for (let i=0; i<arr.length; i+=1) {
        const model = arr[i].model;
        const show = arr[i].show;
        tmpArr.push(
          <div key={i} className='level_2'>
            {model}
            <div className='level_3'>{show}</div>
          </div>
        );
      }

      finalArr.push(
        <div key={make} className='level_1'>
          {make}
          {tmpArr}
        </div>
      );
    });

    return finalArr;
  }

  return (
    <div className='home'>
      { buildList() }
    </div>
  );
};

export default Home;


