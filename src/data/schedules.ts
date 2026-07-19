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

export interface Schedule {
  slug: string; // route slug, no leading slash
  label: string; // page-level label / heading fallback
  previewLabel?: string; // shorter label for the preview pill
  title: string; // page heading
  intro: string;
  draft?: boolean; // shows a "roboczy / do ustalenia" banner
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
    items: [
      {
        time: "Do ustalenia",
        title: "Telefon do sali",
        todo: "Około 3 miesiące przed weselem kontaktujemy się z salą i ustalamy szczegóły. Na tej podstawie potwierdzimy dokładny plan poranka.",
        muted: true,
      },
      {
        time: "11:00",
        title: "Klaudia — przygotowania",
        who: "Klaudia; w środku: Paula, Patka, mama",
        place: "Grodzisko Nowe 47 (ew. pokój w Karczmie Villa Presto)",
        note: "Klaudia rozpoczyna ubieranie około 11:00. Pan Stanisław czeka na korytarzu. Arek i Kalina dojeżdżają bezpośrednio do kościoła.",
        todo: "Malowanie: Klaudia z mamą (Lucyna) i Patrycją; Mariola, Marta, Magda w Rzeszowie. Do potwierdzenia: pokój w Karczmie.",
      },
      {
        time: "11:00",
        title: "Rafał — przygotowania",
        who: "Rafał (drugi pokój)",
        note: "Magda i Krzysiek dojeżdżają bezpośrednio do kościoła.",
        todo: "Do potwierdzenia z rodzicami: czy chcą być obecni przy przygotowaniach Rafała.",
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
        time: "Do rozpisania",
        title: "Niespodzianki",
        todo: "Do ustalenia: zakres niespodzianek oraz ich liczba.",
        muted: true,
      },
    ],
  },
];
