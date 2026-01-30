export interface Proyecto {
    id: string;
    slug: string;
    nombre: string;
    ubicacion: string;
    tipo: string;
    resumen: string;
    descripcionCompleta: string;
    imagenPrincipal: string;
    imagenes: string[];
    fecha: string;
    duracion: string;
    presupuesto?: string;

    // Cliente y testimonios
    clienteNombre?: string;
    testimonioCliente?: string;
    valoracionEstrellas?: number;

    // Detalles técnicos
    superficieM2?: number;
    habitaciones?: number;
    dispositivosInstalados?: DispositivoInstalado[];
    tecnologiasUtilizadas?: (string | Tecnologia)[];

    // Métricas de impacto
    ahorroEnergetico?: string;
    tiempoRespuesta?: string;
    satisfaccionCliente?: string;

    // Timeline del proyecto
    fases?: FaseProyecto[];

    // Características destacadas
    caracteristicas?: string[];

    // Especificaciones técnicas
    especificaciones?: string[];

    // Testimonios de clientes
    testimonios?: Testimonio[];

    // Categorías de tecnologías
    categorias?: string[];

    // Retos y soluciones
    retos?: RetoSolucion[];
}

export interface Tecnologia {
    nombre: string;
    url?: string;
    logo?: string;
}

export interface DispositivoInstalado {
    nombre: string;
    cantidad: number;
    icono?: string;
    categoria: 'iluminacion' | 'climatizacion' | 'seguridad' | 'multimedia' | 'energia' | 'otros';
}

export interface FaseProyecto {
    titulo: string;
    descripcion: string;
    duracion: string;
    completada: boolean;
}

export interface RetoSolucion {
    reto: string;
    solucion: string;
}

export interface Testimonio {
    texto: string;
    autor: string;
    cargo: string;
}
