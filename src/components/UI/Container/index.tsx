import React from "react";
import styled from "@emotion/styled";

//TODO: create common variables for colors, fonts, etc.
const TVAntennaLeft = styled.div`
  background-color: var(--black);
  width: 170px;
  height: 10px;
  position: absolute;
  top: -10%;
  right: 50%;
  transform: translate(40%) rotate(50deg);
  border-radius: 50px;
`;

const TVAntennaRight = styled.div`
  background-color: var(--black);
  width: 250px;
  height: 10px;
  position: absolute;
  top: -13%;
  right: 50%;
  transform: translateX(95%) rotate(136deg);
  border-radius: 50px;
`;

const TVLeg = styled.div`
  width: 90px;
  height: 70px;
  background-color: var(--black);
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TVLegRight = styled(TVLeg)`
  bottom: -10%;
  right: 10%;
`;

const TVLegLeft = styled(TVLeg)`
  bottom: -10%;
  left: 10%;
`;

const TV = styled.div`
  width: 70%;
  height: 70%;
  border: 35px solid var(--black);
  border-radius: 20px;
  margin: 0 auto;
  max-width: 1440px;
  min-width: 640px;
  min-height: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Screen = styled.div`
  width: 102%;
  height: 102%;
  border-radius: 20px;
  background-color: var(--container-bg);
  transform: translate(-1%, -1%);
  padding: 20px;
`;

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <TV>
      {/* FIXME: come up with more appropriate names */}
      <TVAntennaLeft />
      <TVAntennaRight />
      <Screen>{children}</Screen>
      <TVLegRight />
      <TVLegLeft />
    </TV>
  );
};
