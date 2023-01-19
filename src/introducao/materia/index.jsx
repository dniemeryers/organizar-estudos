
import { Materia, Label, Input, Button,Container } from "./style";
import { Atividades } from "../Atividades";

const Materias = () => {

    return(
        <>
        <Materia>
            <Container>
                <div>
                    <Label>Matéria</Label>
                    <Input placeholder="Adicionar Atividades..."></Input>
                </div>
                <Button>+</Button>
            </Container>
            <Atividades/>


           

        </Materia>
        </>
    )


}

export {Materias}
