export interface StoryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface StoryChapter {
  number: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  layout:
    | "beginning"
    | "study"
    | "movement"
    | "city"
    | "engagement"
    | "life"
    | "unwritten";
  photos: StoryPhoto[];
  morePhotos?: string[];
  photoPlaceholder?: string;
}

const P = "/static/historia";

// Original files and their dated mapping remain intact in timeline.ts.
// Chapter photo selections can be changed independently of the narrative.
export const storyChapters: StoryChapter[] = [
  {
    number: "01",
    title: "Tak to się zaczęło",
    subtitle: "Kraków · Czasy pandemii",
    layout: "beginning",
    paragraphs: [
      "Poznaliśmy się w czasach pandemii, na Tinderze. Na pierwszą randkę wybraliśmy się na spacer po krakowskich Plantach i bulwarach. Wszystkie restauracje były wtedy zamknięte, więc zamiast kolacji mieliśmy cały wieczór na rozmowy. Szybko złapaliśmy wspólny język i nawet nie zauważyliśmy, kiedy zrobiło się późno.",
      "Na kolejnych randkach nie zabrakło już nowych pomysłów — od wspólnych wyjść po pierwsze kroki na parkiecie. Taniec i dobra zabawa szybko stały się częścią naszej wspólnej historii i towarzyszą nam do dziś.",
    ],
    photos: [
      {
        src: `${P}/27.02.2021-2.jpg`,
        alt: "Wspomnienie z początku naszej znajomości",
        width: 1277,
        height: 1600,
      },
      {
        src: `${P}/22.05.2021-2.jpg`,
        alt: "Nasze wspólne selfie z początku znajomości",
        width: 899,
        height: 1600,
      },
    ],
  },
  {
    number: "02",
    title: "Własne ścieżki, wspólne plany",
    subtitle: "Kraków · Studenckie lata",
    layout: "study",
    paragraphs: [
      "Kolejne lata upływały nam na realizowaniu własnych celów — często przy jednym stole, ale przed dwoma różnymi ekranami.",
      "Klaudia mierzyła się z kolejnymi egzaminami na farmacji, a Rafał rozwijał się zawodowo. Każde z nas miało swoje wyzwania, ambicje i plany, ale zawsze mogliśmy liczyć na wzajemne wsparcie.",
      "I tak zostało nam do dziś — często każde z nas zajmuje się czymś innym, ale najlepiej robi nam się to razem.",
    ],
    photos: [
      {
        src: `${P}/28.05.2024-3.jpg`,
        alt: "Razem po ukończeniu studiów na Uniwersytecie Jagiellońskim",
        width: 1200,
        height: 1600,
      },
    ],
    morePhotos: [
      `${P}/31.05.2023-2.jpg`,
      `${P}/31.05.2023-3.jpg`,
      `${P}/28.05.2024.jpg`,
    ],
  },
  {
    number: "03",
    title: "Zawsze w ruchu",
    subtitle: "Sport · Podróże · Wspólne przygody",
    layout: "movement",
    paragraphs: [
      "Z czasem do naszych wspólnych planów zaczęło dołączać coraz więcej sportowych aktywności i wyjazdów.",
      "Były nowe dyscypliny, kolejne miejsca do odkrycia i wyzwania, które czasem okazywały się nieco ambitniejsze, niż początkowo zakładaliśmy.",
      "Nie zabrakło też odrobiny rywalizacji — w końcu oboje lubimy stawiać sobie wysoko poprzeczkę.",
    ],
    photos: [
      {
        src: `${P}/27.08.2023.jpg`,
        alt: "Wspólne sportowe wspomnienie",
        width: 1600,
        height: 1200,
      },
      {
        src: `${P}/24.08.2021.jpg`,
        alt: "Nasza podróż do Rzymu",
        width: 1600,
        height: 1202,
      },
      {
        src: `${P}/27.02.2022.jpg`,
        alt: "Pierwsza rocznica w Paryżu",
        width: 1202,
        height: 1600,
      },
      {
        src: `${P}/27.08.2023-2.jpg`,
        alt: "Kolejne wspólne sportowe wyzwanie",
        width: 1200,
        height: 1600,
      },
      {
        src: `${P}/24.08.2021-2.jpg`,
        alt: "Razem podczas wakacji w Rzymie",
        width: 1066,
        height: 1600,
      },
      {
        src: `${P}/27.02.2022-2.jpg`,
        alt: "Wspomnienie z wyjazdu do Paryża",
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    number: "04",
    title: "Zmiana otoczenia",
    subtitle: "Kraków → Warszawa",
    layout: "city",
    paragraphs: [
      "Chęć rozwoju i nowych doświadczeń zaprowadziła nas z Krakowa do Warszawy.",
      "Nowe miasto, nowe prace i znajomości — początki nie zawsze były łatwe, ale z czasem odnaleźliśmy się w nowej rzeczywistości. Warszawa przyniosła nam sporo nowych doświadczeń i kolejnych wspólnych wspomnień.",
    ],
    photos: [
      {
        src: `${P}/12.04.2025.jpg`,
        alt: "Wspomnienie z naszej przeprowadzki do Warszawy",
        width: 1600,
        height: 1200,
      },
      {
        src: `${P}/12.04.2025-2.jpg`,
        alt: "Nowy etap naszej historii w Warszawie",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    number: "05",
    title: "Nawet najlepsze plany",
    subtitle: "Malta · Gozo",
    layout: "engagement",
    paragraphs: [
      "Wszystko zaczęło się od wyjazdu niespodzianki na Maltę, który Rafał zaplanował niemal co do minuty. Zaręczyny miały odbyć się już pierwszego wieczoru, ale żadne z wybranych miejsc nie spełniało jego oczekiwań.",
      "Następnego dnia wybraliśmy się na Gozo, które zwiedzaliśmy na quadzie. Po całym dniu, na klifie przy zachodzie słońca, Rafał w końcu zadał najważniejsze pytanie.",
      "Plan nieco się zmienił, ale trudno byłoby wymarzyć sobie piękniejszy moment.",
    ],
    photos: [
      {
        src: `${P}/09.08.2025-2.jpg`,
        alt: "Wspomnienie z naszego zaręczynowego wyjazdu na Maltę",
        width: 1200,
        height: 1600,
      },
      {
        src: `${P}/8.08.2025.jpg`,
        alt: "Razem na Malcie",
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    number: "06",
    title: "Nasza codzienność",
    subtitle: "Rodzina · Przyjaciele · Codzienność",
    layout: "life",
    paragraphs: [
      "Od zaręczyn sporo się u nas działo. Nasi rodzice mieli okazję się poznać, oboje ponownie zmieniliśmy pracę, a po czasie spędzonym w Warszawie zdecydowaliśmy, że wracamy do Krakowa.",
      "Między kolejnymi wyjazdami i spotkaniami z bliskimi zawsze znajdujemy czas na to, co lubimy najbardziej — wspólne wieczory, długie rozmowy, odkrywanie nowych miejsc i kuchni oraz planowanie następnych przygód.",
      "Lubimy, kiedy dużo się dzieje, ale równie mocno doceniamy te zupełnie zwyczajne chwile spędzone razem.",
    ],
    photos: [
      {
        src: `${P}/06.09.2025-2.jpg`,
        alt: "Wspólne spotkanie z bliskimi po zaręczynach",
        width: 1201,
        height: 1600,
      },
      {
        src: `${P}/27.09.2022.jpg`,
        alt: "Wspomnienie wspólnego posiłku w naszym mieszkaniu",
        width: 1200,
        height: 1600,
      },
      {
        src: `${P}/06.09.2025-3.jpg`,
        alt: "Jeszcze jedno wspomnienie ze spotkania z bliskimi",
        width: 1201,
        height: 1600,
      },
    ],
  },
  {
    number: "07",
    title: "Jeszcze nienapisany rozdział",
    subtitle: "10 lipca 2027 · Ciąg dalszy nastąpi",
    layout: "unwritten",
    paragraphs: [
      "Za nami sporo wspólnych planów, kilka nieoczekiwanych zwrotów akcji i jeszcze więcej dobrych wspomnień.",
      "Teraz przed nami kolejny ważny dzień — nasze wesele.",
      "Przygotowujemy je z dużą starannością, ale dobrze wiemy, że nie wszystko da się przewidzieć. Zwłaszcza kiedy do planu dołączycie Wy.",
      "Dlatego zanim wspólnie przeżyjemy ten dzień, mamy dla Was małe wyzwanie.",
      "Jak myślicie, co wydarzy się 10 lipca?",
    ],
    photos: [],
    photoPlaceholder: "Miejsce na nasze kolejne wspólne zdjęcie",
  },
];
