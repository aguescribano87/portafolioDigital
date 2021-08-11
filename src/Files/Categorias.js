import React from 'react'
import { Inicio } from '../Components/Inicio/inicio'
import { AdminInicio } from '../Components/AdminPanel/adminInicio'

import { SobreMi } from "../Components/sobreMi/sobreMi"
import { AdminSobreMi } from '../Components/AdminPanel/adminSobreMi'

import { Formacion } from "../Components/formacion/formacion"
import { AdminFormacion } from '../Components/AdminPanel/adminFormacion'

import { Proyectos } from "../Components/Proyectos/proyectos"
import { AdminProyectos } from '../Components/AdminPanel/adminProyectos'

import { Habilidades } from "../Components/Habilidades/Habilidades"
import { AdminHabilidades } from '../Components/AdminPanel/adminHabilidades'

import { ExperienciaLaboral } from "../Components/ExperienciaLaboral/ExperienciaLaboral"
import { AdminExpLaboral } from '../Components/AdminPanel/adminExpLaboral'

import { Contacto } from "../Components/Contacto/Contacto"
import { AdminContacto } from '../Components/AdminPanel/adminContacto'



export const Categorias = [
    { id: "inicio", title: "Inicio", component: <Inicio />, adminComp: <AdminInicio /> },
    { id: "sobremi", title: "Sobre Mi", component: <SobreMi />, adminComp: <AdminSobreMi /> },
    { id: "formacion", title: "Formación", component: <Formacion />, adminComp: <AdminFormacion /> },
    { id: "proyectos", title: "Proyectos", component: <Proyectos />, adminComp: <AdminProyectos /> },
    { id: "habilidades", title: "Habilidades", component: <Habilidades />, adminComp: <AdminHabilidades /> },
    { id: "experiencia", title: "Experiencia Laboral", component: <ExperienciaLaboral />, adminComp: <AdminExpLaboral /> },
    { id: "contacto", title: "Contacto", component: <Contacto />, adminComp: <AdminContacto /> }
]
