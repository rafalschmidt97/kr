export interface GuestGroup {
  slug: string; // route slug, no leading slash
  label: string; // shown in the preview panel
  title: string; // page heading
  intro: string;
  hotel?: {
    heading?: string; // section title, defaults to "Nocleg"
    name: string;
    url?: string;
    mapsUrl?: string;
    stay: string; // nights + breakfast info (or venue description)
    tentative?: boolean; // shows a "do potwierdzenia" badge
  };
  bus?: {
    label: string;
    detail: string;
    tentative?: boolean; // shows a "do potwierdzenia" badge
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
      "Cieszymy się, że będziecie z nami mimo dalszej drogi. Przygotowaliśmy dla Was nocleg w Grein Hotel oraz transport na ceremonię i z powrotem, abyście mogli spokojnie odpocząć i cieszyć się wspólnym świętowaniem.",
    hotel: {
      name: "Grein Hotel",
      url: "https://www.greinhotel.pl",
      mapsUrl: "https://maps.app.goo.gl/6oCunZ8fVP3rxcHc7",
      stay: "Nocleg od piątku do niedzieli, ze śniadaniem w sobotę i niedzielę. Nocleg oraz parking są po naszej stronie.",
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
          "Po ceremonii przejedziemy razem do Villa Presto — spod kościoła podstawiony będzie autokar dla wszystkich Gości.",
      },
      {
        label: "Powrót",
        detail: "Po weselu autokar odwiezie Was z powrotem do Grein Hotel.",
      },
    ],
    extra:
      "Przy potwierdzaniu obecności prosimy o informację, na ile nocy planujecie zostać.",
  },
  {
    slug: "villa-presto-nocleg",
    label: "Nocleg w Villa Presto",
    title: "Nocleg w Villa Presto",
    intro:
      "Dla części z Was przygotowaliśmy nocleg bezpośrednio na miejscu — w Villa Presto oraz Karczmie Villa Presto. Po weselu będziecie mogli od razu odpocząć na miejscu.",
    hotel: {
      name: "Villa Presto / Karczma Villa Presto",
      mapsUrl:
        "https://www.google.com/maps/place/VILLA+PRESTO/@50.2632984,22.2542607,12z/data=!4m6!3m5!1s0x473cc3d80a529c1f:0xf21d277bb18884e0!8m2!3d50.2633275!4d22.336661!16s%2Fg%2F11jx5q2vrt",
      stay: "Nocleg z soboty na niedzielę. Nocleg jest po naszej stronie. W niedzielę czeka na Was śniadanie, planowane w Karczmie — dokładną godzinę potwierdzimy bliżej terminu.",
      tentative: true,
    },
    bus: [
      {
        label: "Dojazd na ceremonię",
        detail:
          "Dojazd do kościoła (ceremonia o 14:00) organizujecie we własnym zakresie. Z Villa Presto do kościoła jest około 25 minut, więc warto ruszyć spod Villi około 13:15.",
      },
      {
        label: "Powrót",
        detail:
          "Powrót z kościoła do Villa Presto organizujecie we własnym zakresie. Jeśli będziecie potrzebować miejsca w autokarze spod kościoła, prosimy o wcześniejszy kontakt.",
      },
    ],
    extra:
      "Nocleg jest już zarezerwowany po naszej stronie. W razie pytań prosimy o kontakt.",
  },
  {
    slug: "poprawiny",
    label: "Poprawiny",
    title: "Poprawiny",
    intro:
      "W niedzielę zapraszamy w mniej formalnym gronie na wspólne wspominanie — spokojnie i bez pośpiechu. Rozpoczniemy obiadem, a później planujemy grill i tańce.",
    hotel: {
      heading: "Miejsce",
      name: "Siedlisko Cztery Drogi",
      url: "https://siedliskoczterydrogi.pl",
      mapsUrl: "https://maps.app.goo.gl/SECouYpmUXu1t5xeA",
      stay: "Spotykamy się w Siedlisku Cztery Drogi od godziny 14:00.",
    },
    bus: [
      {
        label: "Dojazd",
        detail:
          "Autokar podjedzie w Rzeszowie około 13:30 i wyruszy o 14:00. Po drodze zabierze Gości z Grodziska i okolic, a na miejscu będziemy około 15:30.",
        tentative: true,
      },
      {
        label: "Powrót",
        detail:
          "Powrót do Rzeszowa planujemy na 22:00. Po Grodzisku i okolicy kursy będą częstsze.",
        tentative: true,
      },
    ],
    extra:
      "Nocleg z niedzieli na poniedziałek pozostaje w tym samym miejscu, co nocleg z soboty na niedzielę — w Rzeszowie. Gości lokalnych prosimy o organizację powrotu we własnym zakresie. W razie pytań o nocleg prosimy o kontakt.",
  },
];
