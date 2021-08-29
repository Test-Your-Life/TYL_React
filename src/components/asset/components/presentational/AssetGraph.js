// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const AssetGraph = ({ data }) => {
  return (
    <div className="graph-container">
      <div
        style={{
          height: '245px',
          width: '100%',
        }}
      >
        <ResponsiveLine
          colors={['#5673EB']}
          colorBy="index"
          data={data}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          //yFormat=" >-f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            //legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={false}
          // axisLeft={{
          //   orient: 'left',
          //   tickSize: 0,
          //   tickPadding: 15,
          //   tickRotation: 0,
          //   legend: '',
          //   legendOffset: -40,
          //   legendPosition: 'middle',
          // }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          enableGridX={false}
          enableGridY={false}
          enableCrosshair={false}
          enableSlices={'x'}
        />
        <hr width="380px" color="#c4c4c4" noshade="true" />
        <div className="graph-button">
          <button>1주일</button>
          <button>1개월</button>
          <button>3개월</button>
          <button>6개월</button>
        </div>
      </div>
    </div>
  );
};

export default AssetGraph;
