import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 10px;
  border: 2px solid #c4a87f;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ItemWrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #c4a87f;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const ListWrapper = styled.div`
  width: 100%;
`;

export const InputBlock = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-top: -20px;
  margin-right: 42px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  margin-bottom: 4px;
  line-height: 20px;
  font-size: 16px;
  font-family: "Roboto";
  color: gray;
  border: 1px solid #c0af97;
  border-radius: 6px;
  border-color: ${props => props.borderColor};
`;

export const Title = styled.p`
  width: 100%;
  line-height: 24px;
  font-size: 24px;
  font-family: "Roboto";
  color: gray;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;
`;

export const ButtonAdd = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border: 2px solid #23b7a4;
  border-radius: 6px;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: #8fa375;
    &>span {
      color: #8fa375;
    }
  }
  &>span {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    z-index: -1;
    line-height: 28px;
    font-size: 22px;
    text-align: center;
    color: #23b7a4;
    transition: all 0.3s ease-in-out;
  }
`;

export const ItemButton = styled.button`
  display: block;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-width: 2px;
  border-style: solid;
  border-radius: 2px;
  background-color: transparent;
  padding: 0;
  margin-right: 3px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  &>span {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    z-index: -1;
    line-height: 14px;
    font-size: 14px;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
`;

export const ButtonDel = ItemButton.extend`
  border-color: #b46d6b;
  &:hover {
    border-color: #A20505;
    &>span {
      color: #A20505;
    }
  }
  &>span {
    color: #b46d6b;
  }
`;

export const ButtonEdt = ItemButton.extend`
  border-color: #3075BF;
  &:hover {
    border-color: #004085;
    &>span {
      color: #004085;
    }
  }
  &>span {
    color: #3075BF;
  }
`;

export const ButtonDone = ItemButton.extend`
  border-color: #4AB461;
  &:hover {
    border-color: #0B8A27;
    &>span {
      color: #0B8A27;
    }
  }
  &>span {
    color: #4AB461;
  }
`;

export const ErrorText = styled.p`
  width: 100%;
  line-height: 12px;
  font-size: 12px;
  font-weight: 300;
  font-family: "Roboto";
  color: #d48672;
  text-align: left;
  padding-left: 5px;
  opacity: ${props => props.visible};
`;

export const Text = styled.p`
  width: 100%;
  height: 18px;
  line-height: 18px;
  font-size: 14px;
  font-family: "Roboto";
  color: gray;
  text-align: left;
  padding-left: 5px;
  border-radius: 2px;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'}; 
  background-color: ${props => props.checked ? '#c0af97' : 'transparent'}; 
`;