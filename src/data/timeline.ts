export interface TimelineEntry {
  date: string; // display date, Polish (DD.MM.YYYY)
  title: string;
  photos?: string[]; // one or more images (multiple = slideshow), under /static/historia/
  height?: number; // override the default row height (px) for this entry's photos
}

const P = "/static/historia";

// Merged timeline: original milestones + every supplied photo.
// Entries whose event is unknown are marked "todo" (label to be filled in).
// Photos with -2 / -3 suffixes render as a slideshow.
// Chronological order.
export const timeline: TimelineEntry[] = [
  {
    date: "27.02.2021",
    title: "Pierwsze buziaki",
    photos: [
      `${P}/27.02.2021-2.jpg`,
      `${P}/27.02.2021-3.jpg`,
      `${P}/27.02.2021-4.jpg`,
    ],
  },
  {
    date: "25.04.2021",
    title: "Motylki w brzuchu",
    photos: [
      `${P}/25.04.2021.jpg`,
      `${P}/22.05.2021.jpg`,
      `${P}/22.05.2021-2.jpg`,
    ],
  },
  {
    date: "06.06.2021",
    title: "Poznanie rodziców Schmidt",
    photos: [`${P}/06.06.2021.jpg`, `${P}/06.06.2021-2.jpg`],
  },
  {
    date: "10.07.2021",
    title: "Poznanie rodziny Czop",
    photos: [`${P}/10.07.2021.jpg`, `${P}/10.07.2021-2.jpg`],
  },
  {
    date: "24.08.2021",
    title: "Pierwsze wspólne wakacje za granicą — Rzym",
    photos: [`${P}/24.08.2021.jpg`, `${P}/24.08.2021-2.jpg`],
  },
  {
    date: "12.09.2021",
    title: "Akceptacja jest ważna!",
    photos: [`${P}/12.09.2021.jpg`],
    height: 150,
  },
  {
    date: "27.02.2022",
    title: "Pierwsza rocznica w Paryżu",
    photos: [`${P}/27.02.2022.jpg`, `${P}/27.02.2022-2.jpg`],
  },
  {
    date: "10.05.2022",
    title: "Pierwsze remonty",
    photos: [`${P}/10.05.2022.jpg`],
  },
  {
    date: "27.09.2022",
    title: "Zamieszkanie razem",
    photos: [`${P}/27.09.2022.jpg`],
  },
  {
    date: "31.05.2023",
    title: "Przeżyliśmy niejedną sesję na studiach",
    photos: [
      `${P}/31.05.2023-3.jpg`,
      `${P}/31.05.2023-2.jpg`,
      `${P}/31.05.2023.jpg`,
    ],
  },
  {
    date: "27.08.2023",
    title: "Sporty razem",
    photos: [`${P}/27.08.2023.jpg`, `${P}/27.08.2023-2.jpg`],
  },
  {
    date: "01.04.2024",
    title: "Nie zawsze było kolorowo",
    photos: [`${P}/1.04.2024.jpg`],
  },
  {
    date: "28.05.2024",
    title: "Koniec studiów i obrona!",
    photos: [
      `${P}/28.05.2024.jpg`,
      `${P}/28.05.2024-2.jpg`,
      `${P}/28.05.2024-3.jpg`,
    ],
  },
  {
    date: "12.04.2025",
    title: "Przeprowadzka do Warszawy z Krakowa",
    photos: [`${P}/12.04.2025.jpg`, `${P}/12.04.2025-2.jpg`],
  },
  {
    date: "09.08.2025",
    title: "Oświadczyny na Malcie — powiedziała TAK!",
    photos: [`${P}/8.08.2025.jpg`, `${P}/09.08.2025-2.jpg`],
  },
  {
    date: "06.09.2025",
    title: "Zupa z teścia",
    photos: [
      `${P}/06.09.2025.jpg`,
      `${P}/06.09.2025-2.jpg`,
      `${P}/06.09.2025-3.jpg`,
    ],
  },
  { date: "10.07.2027", title: "Nasz ślub" },
];
