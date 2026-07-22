// Hidden, direct-link-only timelines for the couple and their parents.
// Far more detailed than the public "Plan dnia"; these are working documents,
// so most times are still placeholders (draft === true shows a banner).

export interface ScheduleItem {
  time: string; // "11:00", "12:30", or a label like "Przed 14:00"
  title: string;
  who?: string; // who is involved / where they are
  place?: string;
  todo?: string; // still-to-arrange note
  note?: string;
  muted?: boolean; // logistics / transitional moment — lighter style
}

// A single time+text row inside a parallel-track column.
export interface TrackRow {
  time: string;
  text: string;
  tentative?: boolean; // shows a "do potwierdzenia" badge on the row
}

// Two side-by-side morning tracks (e.g. Klaudia | Rafał), rendered as columns.
export interface ParallelTracks {
  heading?: string; // optional section heading above the columns
  columns: {
    label: string;
    rows: TrackRow[];
  }[];
}

export interface Schedule {
  slug: string; // route slug, no leading slash
  label: string; // page-level label / heading fallback
  previewLabel?: string; // shorter label for the preview pill
  title: string; // page heading
  intro: string;
  draft?: boolean; // shows a "roboczy / do ustalenia" banner
  parallel?: ParallelTracks; // optional two-column block, shown before items
  items: ScheduleItem[];
}

export const schedules: Schedule[] = [
  {
    slug: "harmonogram-rodzice",
    label: "Harmonogram — rodzice",
    previewLabel: "Harmonogram rodzice",
    title: "Harmonogram — rodzice",
    intro:
      "Bardziej szczegółowy plan poranka dla rodziców i najbliższej rodziny. To wersja wstępna — dokładne godziny ustalimy bliżej terminu, między innymi po rozmowie z salą około 3 miesiące przed weselem.",
    draft: true,
    items: [
      {
        time: "11:00",
        title: "Zbiórka w hotelu",
        who: "Para Młoda, fotograf",
        note: "Przyjeżdżamy do hotelu; fotograf jest już na miejscu. Rozpoczynamy spotkanie i przygotowania.",
        muted: true,
      },
      {
        time: "12:00",
        title: "Rodzice na miejscu",
        who: "Rodzice obojga",
        note: "Prosimy rodziców o obecność około 12:00. Dokładny przebieg sesji i błogosławieństwa doprecyzujemy.",
      },
      {
        time: "12:00",
        title: "First look i sesja",
        who: "Para Młoda, fotograf",
        note: "Wspólne pierwsze spojrzenie i krótka sesja. Czas orientacyjnie około 45 minut.",
      },
      {
        time: "12:45",
        title: "Błogosławieństwo",
        who: "Para Młoda, najbliższa rodzina",
        note: "Krótkie błogosławieństwo do Młodych — około 15 minut.",
      },
      {
        time: "13:00",
        title: "Wyjazd do kościoła",
        note: "Wyjazd do kościoła — około 20 minut jazdy, dodatkowy czas na bramki oraz zapas organizacyjny.",
        muted: true,
      },
      {
        time: "14:00",
        title: "Ceremonia ślubna",
        place: "Kościół pw. św. Andrzeja Apostoła",
        note: "Dalej zgodnie z planem dnia dla wszystkich Gości.",
      },
    ],
  },
  {
    slug: "harmonogram-mlodzi",
    label: "Harmonogram — my",
    previewLabel: "Harmonogram my",
    title: "Harmonogram — Para Młoda",
    intro:
      "Nasz roboczy, szczegółowy rozkład poranka — kto, gdzie i za co odpowiada, docelowo rozpisany co około 30 minut. To wersja wstępna, którą będziemy uzupełniać.",
    draft: true,
    parallel: {
      heading: "Poranek — dwutorowo (do ~11:30)",
      columns: [
        {
          label: "Klaudia",
          rows: [
            { time: "8:30", text: "Fryzjer" },
            { time: "9:30", text: "Makijaż" },
            {
              time: "10:30",
              text: "Transport do Villa Presto",
              tentative: true,
            },
            { time: "11:00", text: "Ubieranie — fotograf" },
            { time: "11:30", text: "Ubieranie — nagranie filmowe" },
          ],
        },
        {
          label: "Rafał",
          rows: [
            { time: "8:30", text: "Kwiaty od dekoratorki" },
            { time: "9:00", text: "Odbiór auta" },
            {
              time: "10:00",
              text: "Ubieranie (szybciej niż Klaudia, pod fotografa)",
            },
            { time: "11:00", text: "Nagranie filmowe", tentative: true },
          ],
        },
      ],
    },
    items: [
      {
        time: "Do ustalenia",
        title: "Telefon do sali",
        todo: "Około 3 miesiące przed weselem kontaktujemy się z salą i ustalamy szczegóły. Na tej podstawie potwierdzimy dokładny plan poranka.",
        muted: true,
      },
      {
        time: "Poranek",
        title: "Przygotowania — szczegóły",
        who: "Klaudia: w pokoju Paula, Patka, mama; Pan Stanisław na korytarzu. Rafał: drugi pokój.",
        place: "Grodzisko Nowe 47 (ew. pokój w Karczmie Villa Presto)",
        note: "Arek i Kalina oraz Magda i Krzysiek dojeżdżają bezpośrednio do kościoła.",
        todo: "Malowanie: Klaudia z mamą (Lucyna) i Patrycją; Mariola, Marta, Magda w Rzeszowie. Do potwierdzenia: pokój w Karczmie oraz czy rodzice chcą być przy przygotowaniach Rafała.",
        muted: true,
      },
      {
        time: "12:00",
        title: "First look i sesja",
        who: "Para Młoda, fotograf",
        note: "Pierwsze wspólne spojrzenie i sesja.",
        todo: "Do potwierdzenia z fotografem: dokładny czas sesji przedślubnej (wstępnie około 45 minut).",
      },
      {
        time: "12:45",
        title: "Błogosławieństwo",
        who: "Najbliższa rodzina",
        note: "Około 15 minut.",
      },
      {
        time: "13:00",
        title: "Wyjazd do kościoła",
        note: "Około 20 minut jazdy, około 20 minut na bramki oraz około 15 minut zapasu organizacyjnego.",
        muted: true,
      },
      {
        time: "14:00",
        title: "Ceremonia ślubna",
        place: "Kościół pw. św. Andrzeja Apostoła",
      },
      {
        time: "17:00",
        title: "Życzenia i zdjęcia stolikami",
        note: "Po złożeniu życzeń zapraszamy Gości od razu do pamiątkowych zdjęć. Wołamy kolejne stoliki; Goście czekają przy swoich miejscach.",
        todo: "Do potwierdzenia: miejsce zdjęć — ścianka na zewnątrz albo w środku. Zakładany czas: około 1,5 godziny.",
      },
      {
        time: "18:30",
        title: "Pierwszy taniec",
      },
      {
        time: "18:35",
        title: "Slot muzyczny 1",
        note: "Zakładany slot około 30 minut. Nie pokazujemy tej informacji w głównym harmonogramie.",
        muted: true,
      },
      {
        time: "19:00",
        title: "I kolacja",
        note: "Zakładany czas: około 30 minut. Godzina 19:00 wygląda dobrze, ale do konsultacji z salą (alternatywa: 20:00).",
      },
      {
        time: "19:30",
        title: "Slot muzyczny 2",
        note: "Zakładany slot około 30 minut.",
        muted: true,
      },
      {
        time: "20:00",
        title: "Krótka przerwa / przejście",
        todo: "Do ustalenia: dokładny przebieg po drugim slocie muzycznym.",
        muted: true,
      },
      {
        time: "Do ustalenia",
        title: "Podziękowania dla rodziców",
        note: "Chcemy zrobić ten moment wcześniej niż zwykle.",
        todo: "Ustalić dokładną godzinę i formę podziękowań.",
      },
      {
        time: "Do ustalenia",
        title: "Slot muzyczny 3",
        note: "Zakładany slot około 30 minut.",
        muted: true,
      },
      {
        time: "22:00",
        title: "II kolacja",
      },
      {
        time: "Do rozpisania",
        title: "Niespodzianki",
        todo: "Do ustalenia: zakres niespodzianek oraz ich liczba.",
        muted: true,
      },
    ],
  },
];
