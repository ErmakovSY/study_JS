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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: -20px;
  margin-right: 60px;
`;

export const ItemWrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 5px;
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
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.p`
  width: 100%;
  line-height: 24px;
  font-size: 24px;
  font-family: "Open Sans";
  color: gray;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;
`;

export const ButtonAdd = styled.button`
  width: 30px;
  height: 30px;
  line-height: 24px;
  font-size: 25px;
  font-family: "Consolas";
  color: #23b7a4;
  text-align: center;
  border: 2px solid #23b7a4;
  border-radius: 6px;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #8fa375;
    border-color: #8fa375;
  }
`;

export const ButtonDel = styled.button`
  display: block;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 2px solid #b46d6b;
  border-radius: 2px;
  background-color: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    border-color: red;
    &>span {
      color: red;
    }
  }
  &>span {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    z-index: -1;
    line-height: 14px;
    font-size: 14px;
    color: #b46d6b;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
`;

export const ErrorText = styled.p`
  width: 100%;
  line-height: 14px;
  font-size: 14px;
  font-family: "Open Sans";
  color: red;
  text-align: left;
  padding-left: 5px;
`;