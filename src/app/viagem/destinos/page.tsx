import Title from "../../components/Title";
import Grid from "../../components/Grid";
import {destino} from '@/app/lib/destino';

const Destinos = () =>{

    return(
        <>
        <Title title="Destinos"/>
        <Grid viagens={destino} variant="destino"/>
        </>
    )
}

export default Destinos;