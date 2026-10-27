export interface PredictionQuestion {
  id: string;
  question: string;
  choices: readonly string[];
}

export const predictionQuestions: readonly PredictionQuestion[] = [
  {
    id: "pierwszy-test",
    question:
      "Co okaże się największym testem naszego małżeństwa w pierwszych godzinach jego trwania?",
    choices: [
      "Wspólne wykonanie choreografii bez wzajemnych uwag.",
      "Podjęcie decyzji bez analizy wszystkich alternatyw.",
      "Opuszczenie parkietu o rozsądnej godzinie.",
      "Zaakceptowanie faktu, że nie wszystko musi iść zgodnie z planem.",
    ],
  },
  {
    id: "zaskoczenie",
    question:
      "Które wydarzenie najbardziej podważy dotychczasową wiedzę o nowożeńcach?",
    choices: [
      "Rafał podejmie spontaniczną decyzję.",
      "Klaudia nie będzie miała żadnych dodatkowych pytań.",
      "Oboje zgodzą się, że pierwszy taniec był bezbłędny.",
      "Nowożeńcy dobrowolnie opuszczą parkiet przed końcem imprezy.",
    ],
  },
  {
    id: "planowanie",
    question:
      "Jak długo przetrwa przekonanie, że wesele da się w pełni zaplanować?",
    choices: [
      "Do rozpoczęcia ceremonii.",
      "Do pierwszego toastu.",
      "Do pierwszej spontanicznej inicjatywy.",
      "Przetrwa. Uwzględniliśmy również nieprzewidywalność.",
    ],
  },
  {
    id: "analiza",
    question:
      "Co najprawdopodobniej zostanie poddane ponownej analizie już po weselu?",
    choices: [
      "Pierwszy taniec, klatka po klatce.",
      "Harmonogram i odchylenia od planu.",
      "Decyzje muzyczne podjęte po północy.",
      "Wszystko. Raport końcowy jest w przygotowaniu.",
    ],
  },
  {
    id: "deklaracja",
    question: "Która deklaracja okaże się najmniej wiarygodna?",
    choices: [
      "„Nie będziemy analizować pierwszego tańca”.",
      "„Dzisiaj naprawdę wcześnie wyjdziemy”.",
      "„Nie musimy wszystkiego planować”.",
      "„Zostawmy muzykę przypadkowi”.",
    ],
  },
];
