'use client';

import { useParams } from 'next/navigation';  // Usa 'useParams' para obtener los parámetros de la URL
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import PortfolioSingleSection from '@/components/sections/PortfolioSingleSection';

export default function ProjectPage() {
    const { id } = useParams();  // Obtén el 'id' de la URL usando 'useParams'

    const [projects, setProjects] = useState([]);  // Estado para almacenar todos los proyectos
    const [project, setProject] = useState(null);  // Establecer el estado para almacenar el proyecto

    useEffect(() => {
        if (id) {
            // Cargar los proyectos desde public/data/projects.json
            fetch('/data/projects.json')
                .then(response => response.json())
                .then(data => {
                    setProjects(data);  // Establecer todos los proyectos en el estado
                    const foundProject = data.find((p) => p.id.toString() === id);
                    setProject(foundProject);  // Establecer el proyecto encontrado en el estado
                })
                .catch((error) => console.error("Error loading project:", error));
        }
    }, [id]);  // La dependencia de id asegura que la solicitud se haga cuando 'id' cambie

    if (!project) {
        return <div>Project not found</div>;  // Muestra un mensaje si el proyecto no se encuentra
    }

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
            <PortfolioSingleSection project={project} projects={projects}/>
        </Layout>
    );
}


