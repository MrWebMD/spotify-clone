import styled from "styled-components";

const EllipsisWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    flex: 0 1 auto;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
  }
`;

const Ellipsis = (props) => {
  const extraClasses = props.className ? props.className : "";

  return (
    <EllipsisWrapper className={extraClasses}>
      <div></div>
      <div></div>
      <div></div>
    </EllipsisWrapper>
  );
};

export default Ellipsis;
