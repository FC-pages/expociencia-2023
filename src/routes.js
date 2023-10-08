import InicioPage from "./app/page";
import GaleriaPage from "./app/galeria/page";
import SalasTematicasPage from "./app/salas-tematicas/page";
import CienciasComputacionPage from "./app/salas-tematicas/ciencias-computacion/page";
import FisicaPage from "./app/salas-tematicas/fisica/page";
import IngenieriaFisicaPage from "./app/salas-tematicas/ingenieria-fisica/page";
import MatematicaPage from "./app/salas-tematicas/matematica/page";
import QuimicaPage from "./app/salas-tematicas/quimica/page";
import ContactoPage from "./app/contacto/page";

export const routes = [
    {
        name: "Inicio",
        path: "/",
        element: InicioPage,
    },
    {
        name: "Galeria",
        path: "/galeria",
        element: GaleriaPage,
    },
    {
        name: "Salas Tematicas",
        path: "/salas-tematicas",
        element: SalasTematicasPage,
        children: [
            {
                name: "Ciencias de la Computación",
                path: "/ciencias-computacion",
                element: CienciasComputacionPage,
            },
            {
                name: "Física",
                path: "/fisica",
                element: FisicaPage,
            },
            {
                name: "Ingeniería Física",
                path: "/ingenieria-fisica",
                element: IngenieriaFisicaPage,
            },
            {
                name: "Matemática",
                path: "/matematica",
                element: MatematicaPage,
            },
            {
                name: "Química",
                path: "/quimica",
                element: QuimicaPage,
            },
        ]
    },
    {
        name: "Contacto",
        path: "/contacto",
        element: ContactoPage,
    },
]