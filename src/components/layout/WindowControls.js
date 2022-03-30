import styled from "styled-components";
import detectElectron from "../../helpers/detectElectron";

const Controls = styled.div`
  text-align: right;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  i {
    margin: 0px;
    padding: 10px 15px 10px 15px;
    transition: background 0.2s ease-in-out 0s;
  }
  & i:hover {
    background-color: #3f3f3f;
  }
`;

const WindowControls = (props) => {
  const minimize = () => {
    if (detectElectron()) {
      window.electron.minimize();
    }
  };
  const maximize = () => {
    if (detectElectron()) {
      window.electron.maximize();
    }
  };

  const close = () => {
    if (detectElectron()) {
      window.electron.close();
    }
  };
  return (
    <Controls>
      <i className="far fa-window-minimize" onClick={minimize}></i>
      <i className="fas fa-window-maximize" onClick={maximize}></i>
      <i className="fas fa-times" onClick={close}></i>
    </Controls>
  );
};

export default WindowControls;
