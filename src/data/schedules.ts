import { TBD } from "./site";

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
      "Bardziej szczegółowy plan poranka dla rodziców i najbliższej rodziny. To wersja wstępna — dokładne godziny ustalimy bliżej terminu (między innymi po rozmowie z salą na ok. 3 miesiące przed).",
    draft: true,
    items: [
      {
        time: "11:00",
        title: "Zbiórka w hotelu",
        who: "Para Młoda, fotograf",
        note: "Przyjeżdżamy do hotelu, fotograf jest już na miejscu — zaczynamy od spotkania i przygotowań.",
        muted: true,
      },
      {
        time: "12:00",
        title: "Rodzice na miejscu",
        who: "Rodzice obojga",
        note: `Prosimy rodziców o obecność około 12:00. Dokładny przebieg (sesja, błogosławieństwo) doprecyzujemy (${TBD}).`,
      },
      {
        time: "12:00",
        title: "First look i sesja",
        who: "Para Młoda, fotograf",
        note: `Wspólne pierwsze spojrzenie i krótka sesja. Czas orientacyjnie ~45 minut (${TBD}).`,
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
        note: "Ruszamy do kościoła — około 20 minut jazdy, plus czas na bramki i zapas.",
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
      "Nasz roboczy, szczegółowy rozkład poranka — kto, gdzie i co trzeba załatwić, rozpisany dokładniej (docelowo co ~30 minut). Wersja wstępna, będziemy uzupełniać.",
    draft: true,
    items: [
      {
        time: "Do ustalenia",
        title: "Telefon do sali",
        todo: "Na ok. 3 miesiące przed dzwonimy do sali i ustalamy szczegóły — wtedy podejmiemy decyzje o dokładnym planie poranka.",
        muted: true,
      },
      {
        time: "11:00",
        title: "Klaudia — przygotowania",
        who: "Klaudia; w środku: Paula, Patka, mama",
        place: "Grodzisko Nowe 47 (ew. pokój w Karczmie Villa Presto)",
        note: "Klaudia ubiera się od 11:00. Pan Stanisław czeka na korytarzu. Arek i Kalina dojeżdżają prosto do kościoła (rano nie ma ich w Villi).",
        todo: `Malowanie: Klaudia z mamą (Lucyna) i Patrycją; Mariola, Marta, Magda w Rzeszowie. Potwierdzić pokój w Karczmie (${TBD}).`,
      },
      {
        time: "11:00",
        title: "Rafał — przygotowania",
        who: "Rafał (drugi pokój)",
        note: "Magda i Krzysiek dojeżdżają prosto do kościoła (rano nie ma ich w Villi).",
        todo: "Dopytać rodziców, czy chcą być na ubieraniu Rafała.",
      },
      {
        time: "12:00",
        title: "First look i sesja",
        who: "Para Młoda, fotograf",
        note: "Pierwsze wspólne spojrzenie i sesja.",
        todo: `Dopytać fotografa, ile trwa sesja przedślubna (przyjęte ~45 minut) (${TBD}).`,
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
        note: "~20 minut jazdy + ~20 minut na bramki + ok. 15 minut zapasu.",
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
        todo: "Nie mamy jeszcze kompletnie przepracowanego, co znajdzie się w niespodziankach i ile ich będzie.",
        muted: true,
      },
    ],
  },
];
