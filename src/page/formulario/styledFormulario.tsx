import styled from "styled-components";

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 100vh;
  gap: 10px;
  background-color: white;
`
const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  width: 400px;
  height: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Title = styled.h1`
&::first-letter{
    font-size: 40px;
}
`;
const Br = styled.div`
 border-bottom: 3px solid #d90429;
  border-radius:50px;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 700px;
  gap: 15px;
  flex: 25;
  flex-direction: column;
  background-color: #f3eff5;
  padding-top: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const InfoForm = styled.h3`
padding-bottom: 20px;
`;
const InfoInput = styled.h4``;
const InputName = styled.input`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid #778da9;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  
`;
const InputEmail = styled.input`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid #778da9;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  
  &::placeholder{
    color: #80808070;
  }
`;
const TextTarea = styled.textarea`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 400px;
  height: 250px;
  border: 1px solid #778da9;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  
`;
const ContainerButton = styled.div`
 display: flex;
align-items: center;
justify-content: space-between;
flex: 1;
width: 730px;
padding: 30px;
`;
const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
  width: 40%;
    &:hover {
      filter: brightness(110%);
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
`
const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  
`
const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);

  ${Button}:hover & {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }

  ${Button}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  @media(max-width: 700px){
font-size: 0.9rem;

}
`;
const Img = styled.img``

export {
  Shadow,
  Edge,
  Front,
  Container,
  ContainerTitle,
  Title,
  Br,
  Form,
  InfoForm,
  InfoInput,
  TextTarea,
  InputEmail,
  InputName,
  ContainerButton,
  Button,
  Img
};
