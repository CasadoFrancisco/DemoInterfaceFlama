import React, { useState, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import {
  Front,
  Edge,
  Shadow,
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
} from "./styledFormulario";

export const FormularioComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const HandleClickBack = () => {
    navigate('/');
  };

  const handleClickNext = () => {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      toast.error('Por favor, completa todos los campos', {
        style: {
          borderRadius: "10px",
          backgroundColor: "#ef233c",
          color: "white",
        },
      });
    } else if (!validateEmail(email)) {
      toast.error('Por favor, ingresa un correo electrónico válido', {
        style: {
          borderRadius: "10px",
          backgroundColor: "#ef233c",
          color: "white",
        },
      });
    } else if (message.length < 10) {
      toast.error('Por favor, ingresa un mensaje con al menos 10 letras', {
        style: {
          borderRadius: "10px",
          backgroundColor: "#ef233c",
          color: "white",
        },
      });
    } else {
      navigate('/chat');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato de un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Somos FlamaChat! 🙌</Title>
        <Br />
      </ContainerTitle>
      <Form>
        <InfoForm>Detalles de contacto</InfoForm>
        <InfoInput>
          Nombre

        </InfoInput>
        <InputName value={name} onChange={handleNameChange} />
        <InfoInput>Email de contacto</InfoInput>
        <InputEmail
          placeholder="Example@gmail.com"
          value={email}
          onChange={handleEmailChange}
        />
        <InfoInput>Mensaje</InfoInput>
        <TextTarea value={message} onChange={handleMessageChange} />
      </Form>
      <ContainerButton>
      <Button onClick={HandleClickBack}>
          <Shadow />
          <Edge />
          <Front>Back</Front>
        </Button>
        <Button onClick={handleClickNext}>
          <Shadow />
          <Edge />
          <Front>Submit </Front>
        </Button>
      </ContainerButton>
      <Toaster />
    </Container>
  );
};