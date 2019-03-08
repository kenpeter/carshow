import React from 'react';

const Home = ({ data }) => {
  function buildList() {
    const finalArr = [];

    data.forEach((arr, make) => {
      const tmpArr = arr.map((item, index) => {
        const { model, show } = item;
        return (
          /* eslint-disable react/no-array-index-key */
          <div key={index} className='level_2'>
            {model}
            <div className='level_3'>{show}</div>
          </div>
        );
      });

      finalArr.push(
        /* eslint-disable react/no-array-index-key */
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


