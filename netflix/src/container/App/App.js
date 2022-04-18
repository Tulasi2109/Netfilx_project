import React from 'react';
import Card from '../../components/Card';
import cdata from '../../../src/cdata';

// console.log(cdata[1].title);
const App = () => {
  return (
    <>
      <h1 className='heading_style'>List of top Netflix series in 2021</h1>
      <Card
        imgSrc={cdata[0].imgSrc}
        title={cdata[0].title}
        link={cdata[0].link}
        sname={cdata[0].sname}
        tagline={cdata[0].tagline}
      />
      <Card
        imgSrc={cdata[1].imgSrc}
        title={cdata[1].title}
        link={cdata[1].link}
        sname={cdata[1].sname}
        tagline={cdata[1].tagline}
      />
      <Card
        imgSrc={cdata[2].imgSrc}
        title={cdata[2].title}
        link={cdata[2].link}
        sname={cdata[2].sname}
        tagline={cdata[2].tagline}
      />
      <Card
        imgSrc={cdata[3].imgSrc}
        title={cdata[3].title}
        link={cdata[3].link}
        sname={cdata[3].sname}
        tagline={cdata[3].tagline}
      />
      <Card
        imgSrc={cdata[4].imgSrc}
        title={cdata[4].title}
        link={cdata[4].link}
        sname={cdata[4].sname}
        tagline={cdata[4].tagline}
      />
      <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
        tagline={cdata[5].tagline}
      />
        <Card
        imgSrc={cdata[6].imgSrc}
        title={cdata[6].title}
        link={cdata[6].link}
        sname={cdata[6].sname}
        tagline={cdata[6].tagline}
      />
      <Card
        imgSrc={cdata[7].imgSrc}
        title={cdata[7].title}
        link={cdata[7].link}
        sname={cdata[7].sname}
        tagline={cdata[7].tagline}
      />
        <Card
        imgSrc={cdata[8].imgSrc}
        title={cdata[8].title}
        link={cdata[8].link}
        sname={cdata[8].sname}
        tagline={cdata[8].tagline}
      />
        <Card
        imgSrc={cdata[9].imgSrc}
        title={cdata[9].title}
        link={cdata[9].link}
        sname={cdata[9].sname}
        tagline={cdata[9].tagline}
      />
        <Card
        imgSrc={cdata[10].imgSrc}
        title={cdata[10].title}
        link={cdata[10].link}
        sname={cdata[10].sname}
        tagline={cdata[10].tagline}
      />
       <Card
        imgSrc={cdata[11].imgSrc}
        title={cdata[11].title}
        link={cdata[11].link}
        sname={cdata[11].sname}
        tagline={cdata[11].tagline}
      />
        <Card
        imgSrc={cdata[12].imgSrc}
        title={cdata[12].title}
        link={cdata[12].link}
        sname={cdata[12].sname}
        tagline={cdata[12].tagline}
      />
        <Card
        imgSrc={cdata[13].imgSrc}
        title={cdata[13].title}
        link={cdata[13].link}
        sname={cdata[13].sname}
        tagline={cdata[13].tagline}
      />
        <Card
        imgSrc={cdata[14].imgSrc}
        title={cdata[14].title}
        link={cdata[14].link}
        sname={cdata[14].sname}
        tagline={cdata[14].tagline}
      />
        <Card
        imgSrc={cdata[15].imgSrc}
        title={cdata[15].title}
        link={cdata[15].link}
        sname={cdata[15].sname}
        tagline={cdata[15].tagline}
      />
    </>

  );
};

export default App;

