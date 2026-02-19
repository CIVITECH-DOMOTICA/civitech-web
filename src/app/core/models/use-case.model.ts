export interface UseCase {
    id: string;
    slug: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    descripcionDetallada: string;
    imagen: string;
    imagenCard?: string; // Optional: Image for the card, if different from detail
    video?: string; // Path to local video or URL
    icono: string; // Font Awesome class
    categoria: string;

    // Beneficios y características
    beneficios?: string[];
    casosUso?: string[];
    tecnologias?: Array<{ nombre: string; logo?: string; url?: string }>;

    // ROI y ahorro
    ahorroEstimado?: string;
    tiempoImplementacion?: string;
    roi?: string;

    // Ejemplos reales
    ejemplos?: EjemploImplementacion[];

    // FAQ
    faqs?: FAQ[];
}

export interface EjemploImplementacion {
    titulo: string;
    descripcion: string;
    resultado: string;
}

export interface FAQ {
    pregunta: string;
    respuesta: string;
}
