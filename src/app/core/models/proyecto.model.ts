export interface DispositivoInstalado {
    nombre: string;
    cantidad: number;
    categoria: string;
}

export interface Tecnologia {
    nombre: string;
    url: string;
    logo: string;
}

export interface Fase {
    titulo: string;
    descripcion: string;
    duracion: string;
    completada: boolean;
}

export interface Reto {
    reto: string;
    solucion: string;
}

export interface Proyecto {
    id: string;
    slug: string;
    nombre: string;
    ubicacion: string;
    tipo: string;
    resumen: string;
    descripcionCompleta: string;
    imagenPrincipal: string; // URL o path local
    imagenes: string[];
    fecha: string;
    duracion: string;
    presupuesto: string;
    clienteNombre: string;
    testimonioCliente: string;
    valoracionEstrellas: number;
    superficieM2: number;
    habitaciones: number;

    // Arrays complejos
    dispositivosInstalados: DispositivoInstalado[];
    tecnologiasUtilizadas: Tecnologia[];
    fases: Fase[];
    caracteristicas: string[];
    retos: Reto[];

    // Metrics
    ahorroEnergetico: string;
    tiempoRespuesta: string;
    satisfaccionCliente: string;

    // Optional legacy or future props
    especificaciones?: any[];
    testimonios?: any[];
}
