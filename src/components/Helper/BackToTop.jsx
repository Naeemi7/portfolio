import { useRef, useEffect, useState } from "react";
import BackToUp from "@uiw/react-back-to-top";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: auto;
  white-space: normal;
  width: 300px;
  height: 300px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    background: #00000038;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #595959;
  }
  p {
    display: inline;
    background: rgba(0, 0, 0, 0.12);
    color: transparent;
  }
`;

const BackToTop = () => {
  const dom = useRef(null);
  const [element, setElement] = useState();
  useEffect(() => setElement(dom.current), []);
  return (
    <div className="back-to-top">
      <Wrapper ref={dom}>
        <BackToUp top={0} element={dom.current} style={{ float: "right" }}>
          Top
        </BackToUp>
      </Wrapper>
      <h1>test</h1>
    </div>
  );
};

export default BackToTop;
