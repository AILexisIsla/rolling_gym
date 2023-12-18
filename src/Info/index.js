
// Datos de tablero
export const cardsData = [
  {
    title: "Ingresos",
    qantity: 24,
    amount: 42056,
  },
  {
    title: "Clases",
    qantity: 14,
    amount: 52125.03,
  },
  {
    title: "Miembros",
    qantity: 18,
    amount: 1216.5,
  },
];

//Ordenes del día - detalles
export const ordersData = [
  {
    name: "PLAN SOLO CLASES",
    items: 58,
    change: 290,
  },
  {
    name: "PLAN MUSCULACION",
    items: 12,
    change: 72
  },
  {
    name: "PLAN FULL",
    items: 7,
    change: 70
  },
]

//Obtener el valor en formato de número de grupo
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("es", {
    useGrouping: true,
  });
};

