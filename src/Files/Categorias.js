import React from 'react'
import { Inicio } from '../Components/Inicio/inicio'
import { SobreMi } from "../Components/sobreMi/sobreMi"
import { Formacion } from "../Components/formacion/formacion"
import { Proyectos } from "../Components/Proyectos/proyectos"
import { Habilidades } from "../Components/Habilidades/Habilidades"
import { ExperienciaLaboral } from "../Components/ExperienciaLaboral/ExperienciaLaboral"
import { Contacto } from "../Components/Contacto/Contacto"



export const Categorias = [
    { id: "inicio", title: "Inicio", component: <Inicio /> },
    { id: "sobremi", title: "Sobre Mi", component: <SobreMi /> },
    { id: "formacion", title: "Formación", component: <Formacion /> },
    { id: "proyectos", title: "Proyectos", component: <Proyectos /> },
    { id: "habilidades", title: "Habilidades", component: <Habilidades /> },
    { id: "experiencia", title: "Experiencia Laboral", component: <ExperienciaLaboral /> },
    { id: "contacto", title: "Contacto", component: <Contacto /> }
]
