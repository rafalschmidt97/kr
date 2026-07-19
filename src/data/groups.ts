import { TBD } from "./site";

export interface GuestGroup {
  slug: string; // route slug, no leading slash
  label: string; // shown in the preview panel
  title: string; // page heading
  intro: string;
  hotel?: {
    name: string;
    url?: string;
    mapsUrl?: string;
    stay: string; // nights + breakfast info
  };
  bus?: {
    label: string;
    detail: string;
  }[];
  extra?: string;
}

// Hidden, direct-link-only pages. This list also drives the preview panel.
export const groups: GuestGroup[] = [
  {
    slug: "goscie-zamiejscowi",
    label: "Goście zamiejscowi",
    title: "Goście zamiejscowi",
    intro:
      "Cieszymy się, że będziecie z nami mimo dalszej drogi! Żebyście mogli w pełni odpocząć i bawić się do końca, zarezerwowaliśmy dla Was nocleg w Grein Hotel i zapewniamy transport na ceremonię oraz z powrotem.",
    hotel: {
      name: "Grein Hotel",
      url: "https://www.greinhotel.pl",
      mapsUrl: "https://maps.app.goo.gl/6oCunZ8fVP3rxcHc7",
      stay: "Nocleg od piątku do niedzieli, ze śniadaniem w sobotę i niedzielę. Nocleg oraz parking są po naszej stronie — o nic nie musicie się martwić.",
    },
    bus: [
      {
        label: "Dojazd na ceremonię",
        detail:
          "Zbiórka przy Grein Hotel o 12:30. Autokar zawiezie Was pod kościół (przejazd trwa około 50 minut), z zapasem czasu przed ceremonią o 14:00.",
      },
      {
        label: "Przejazd na salę",
        detail:
          "Po ceremonii wracamy razem do Villa Presto — spod kościoła podstawiony będzie autokar dla wszystkich gości.",
      },
      {
        label: "Powrót",
        detail:
          "Po weselu autokar odwiezie Was z powrotem do Grein Hotel — nie musicie martwić się o powrót.",
      },
    ],
    extra:
      "Przy potwierdzaniu obecności dajcie nam proszę znać, na ile nocy planujecie zostać.",
  },
  {
    slug: "villa-presto-nocleg",
    label: "Nocleg w Villa Presto",
    title: "Nocleg w Villa Presto",
    intro:
      "Dla części z Was przygotowaliśmy nocleg bezpośrednio na miejscu — w Villa Presto oraz Karczmie Villa Presto. Dzięki temu po weselu macie kilka kroków do łóżka.",
    hotel: {
      name: "Villa Presto / Karczma Villa Presto",
      mapsUrl:
        "https://www.google.com/maps/place/VILLA+PRESTO/@50.2632984,22.2542607,12z/data=!4m6!3m5!1s0x473cc3d80a529c1f:0xf21d277bb18884e0!8m2!3d50.2633275!4d22.336661!16s%2Fg%2F11jx5q2vrt",
      stay: "Nocleg z soboty na niedzielę. Nocleg jest po naszej stronie. Szczegóły dotyczące śniadania w niedzielę podamy wkrótce.",
    },
    bus: [
      {
        label: "Dojazd na ceremonię",
        detail:
          "Dojazd do kościoła (ceremonia o 14:00) organizujecie we własnym zakresie. Z Villa Presto do kościoła jest około 25 minut, więc warto ruszyć spod Villi około 13:15.",
      },
      {
        label: "Powrót na salę",
        detail:
          "Po ceremonii wracamy razem do Villa Presto — spod kościoła podstawiony będzie autokar dla wszystkich gości.",
      },
    ],
    extra:
      "Przy potwierdzaniu obecności dajcie nam proszę znać, czy potrzebujecie nocleg.",
  },
  {
    slug: "poprawiny",
    label: "Poprawiny",
    title: "Poprawiny",
    intro:
      "W niedzielę zapraszamy w mniej formalnym gronie na wspólne wspominanie — na spokojnie, każdy w swoim tempie. Spotykamy się w Siedlisku Cztery Drogi od godziny 14:00.",
    hotel: {
      name: "Siedlisko Cztery Drogi",
      url: "https://siedliskoczterydrogi.pl",
      mapsUrl: "https://maps.app.goo.gl/SECouYpmUXu1t5xeA",
      stay: "Dla chętnych możliwy dodatkowy nocleg z niedzieli na poniedziałek.",
    },
    bus: [
      {
        label: "Transport",
        detail: `Mały autokar odwiezie gości w okolice — do Grodziska oraz Rzeszowa (${TBD}).`,
      },
    ],
  },
];
