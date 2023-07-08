import React from "react"
import { useNavigate } from "react-router-dom"
import {
    Edge,
    Front,
    Shadow,
    Container,
    ContainerOne,
    Title,
    Br,
    ContainerTwo,
    ContainerRedes,
    I,
    ContainerInfo,
    Visit,
    Redes,
    Number,
    ContainerThree,
    Button
} from "./homeDemoStyle"
import socialRed from "../../config/redes.json"


export const HomeDemo: React.FC = () => {

    const Navigate = useNavigate();
    const NextPage = () => {
        Navigate("/formulario")
    }

    return (
        <Container>
            <ContainerOne>
                <Title>Somos Flamachat ! 🙌🏼</Title>
                <Br></Br>
            </ContainerOne>
            <ContainerTwo>
                {socialRed.SocialMedia.map((redSocial, index) => (
                    <ContainerRedes key={index}>
                        <I className={redSocial.icon} style={{ color: redSocial.colorIcon }} />
                        <ContainerInfo>
                            <Visit>visitanos en:</Visit>
                            <Redes>{redSocial.lavel}</Redes>
                        </ContainerInfo>
                    </ContainerRedes>
                ))}
                <ContainerRedes>
                    <I className={socialRed.contact.icon} />
                    <ContainerInfo>
                        <Visit>Llamanos a:</Visit>
                        <Number>{socialRed.contact.tel}</Number>
                    </ContainerInfo>

                </ContainerRedes>
            </ContainerTwo>
            <ContainerThree>
                <Button onClick={NextPage}>
                    <Shadow />
                    <Edge />
                    <Front>Iniciar Conversacion</Front>
                </Button>

            </ContainerThree>
        </Container>
    )
}