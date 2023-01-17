
import { Materia, Label, Input, Button } from "./style";
import { Atividades } from "../Atividades";

const Materias = () => {

    return(
        <>
        <Materia>
            <Label>Matéria</Label>
            <Input placeholder="Adicionar Atividades..."></Input>
            <Button>+</Button>
            <Atividades>

            </Atividades>

        </Materia>
        </>
    )


}

export {Materias}
