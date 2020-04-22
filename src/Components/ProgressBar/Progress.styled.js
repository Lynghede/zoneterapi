import Styled from "styled-components";

const Progress = Styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  border-radius: 50px;
  border: 1px solid #333;
  background: #ffd295;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Filler = Styled.div.attrs((props) => ({
  width: props.width,
}))`
  background: #0edb5f;
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;

export default Progress;
