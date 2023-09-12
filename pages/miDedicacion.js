import React from 'react';
import Link from 'next/link';

const MiDedicacion = () => {
  return (
    <div className='w-3/4 mx-auto flex justify-center items-center mt-20'>
        <div className='card-container'>
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-6xl font-bold mb-4 flex justify-center items-center mt-6">Mi Contribución para Beneficiar a la Empresa</h1>

            <p className="mb-4 text-4xl mt-6">
                Como un apasionado programador con una fuerte dedicación a la mejora continua, veo varias formas en las que puedo
                contribuir positivamente al crecimiento y éxito de AUCO:
            </p>

            <div className="mb-4 mt-10 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Excelencia en el Desarrollo de Software:</h2>
                <p className='text-2xl'>
                Mi enfoque es escribir código limpio, legible y bien estructurado. Creo firmemente en la importancia de la calidad
                del código en el desarrollo de software sostenible y de alto rendimiento.
                </p>
            </div>

            <div className="mb-4 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Habilidades de Resolución de Problemas:</h2>
                <p className='text-2xl'>
                Me enorgullece mi habilidad para abordar desafíos complejos y encontrar soluciones efectivas. Disfruto resolviendo
                problemas y creando soluciones innovadoras que impulsen el progreso del equipo y la empresa.
                </p>
            </div>

            <div className="mb-4 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Aprendizaje Continuo y Certificaciones:</h2>
                <p className='text-2xl'>
                Estoy comprometido a mantenerme actualizado con las últimas tendencias y tecnologías en el campo de la programación.
                Planeo obtener certificaciones relevantes, para fortalecer mis habilidades y contribuir aún más al
                equipo.
                </p>
            </div>

            <div className="mb-4 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Dominio del Inglés:</h2>
                <p className='text-2xl'>
                Actualmente estoy trabajando en mejorar mi nivel de inglés para poder comunicarme de manera efectiva en entornos
                profesionales. Esto me permitirá colaborar de manera más eficiente con colegas y clientes internacionales.
                </p>
            </div>

            <div className="mb-4 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Eficiencia y Productividad:</h2>
                <p className='text-2xl'>
                Soy proactivo y orientado a resultados. Me esfuerzo por optimizar procesos y utilizar las mejores prácticas para
                aumentar la eficiencia y la productividad en mi trabajo.
                </p>
            </div>

            <div className="mb-4 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Compromiso con el Crecimiento Profesional:</h2>
                <p className='text-2xl'>
                Tengo la intención de crecer como profesional y aportar al éxito de AUCO a largo plazo. Estoy ansioso por asumir
                responsabilidades adicionales y contribuir al desarrollo y crecimiento de la empresa.
                </p>
            </div>

            <div className="mb-4 mt-10">
                <h2 className="font-bold mb-2 text-2xl">Visión a Largo Plazo:</h2>
                <p className='text-2xl'>
                A medida que progreso en mi carrera, aspiro a adquirir más certificaciones y contribuir aún más al éxito de AUCO. A
                nivel personal, mi objetivo es establecerme en mi propia casa, lo que me proporcionará un entorno estable para continuar
                creciendo como profesional.
                </p>
            </div>

            <p className='text-2xl'>
                Creo firmemente que mi pasión por la programación y mi compromiso con la mejora continua me permitirán ser un activo
                valioso para el equipo de AUCO y contribuir al éxito continuo de la empresa.
            </p>
                <div className="flex items-center justify-between mt-4">
                <Link href="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">Regresar al Inicio</button>
                </Link>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default MiDedicacion;
