export interface PlanItem {
  time: string;
  title: string;
  place?: string;
  address?: string;
  mapsUrl?: string;
  note?: string;
  muted?: boolean; // logistyka / moment przejściowy (nie "atrakcja") — lżejszy styl
  tentative?: boolean; // pokazuje plakietkę "do potwierdzenia"
}

const CHURCH_MAPS = "https://maps.app.goo.gl/xSRxUGSP9a2NeuxR8";
const VILLA_MAPS =
  "https://www.google.com/maps/place/VILLA+PRESTO/@50.2632984,22.2542607,12z/data=!4m6!3m5!1s0x473cc3d80a529c1f:0xf21d277bb18884e0!8m2!3d50.2633275!4d22.336661!16s%2Fg%2F11jx5q2vrt";

export const plan: PlanItem[] = [
  {
    time: "Przed 14:00",
    title: "Spotykamy się pod kościołem",
    note: "Prosimy, aby Goście kierowali się bezpośrednio pod kościół. Na błogosławieństwo przed ceremonią zapraszamy tylko najbliższą rodzinę; ze wszystkimi Gośćmi spotkamy się w kościele.",
    muted: true,
  },
  {
    time: "14:00",
    title: "Ceremonia ślubna",
    place: "Kościół pw. św. Andrzeja Apostoła",
    address: "Chałupki Dębniańskie 273, 37-306 Chałupki Dębniańskie",
    mapsUrl: CHURCH_MAPS,
  },
  {
    time: "15:00",
    title: "Autokar spod kościoła do Villa Presto",
    muted: true,
    tentative: true,
  },
  {
    time: "15:30",
    title: "Przyjazd na salę i powitanie Gości",
    place: "Villa Presto",
    address: "Brzóza Królewska 1030, 37-307 Brzóza Królewska",
    mapsUrl: VILLA_MAPS,
    muted: true,
  },
  { time: "16:00", title: "Obiad" },
  {
    time: "17:00",
    title: "Życzenia i wspólne zdjęcia",
    note: "Wykorzystując moment składania życzeń, będziemy od razu zapraszać Gości do pamiątkowych zdjęć. Zdjęcia zrobimy po kolei, stolikami — prosimy o spokojne oczekiwanie przy swoich miejscach. Miejsce zdjęć (na zewnątrz lub w środku) potwierdzimy bliżej terminu.",
    tentative: true,
  },
  { time: "18:30", title: "Pierwszy taniec" },
  { time: "19:00", title: "I kolacja" },
  {
    time: "21:30",
    title: "Niespodzianka",
    note: "Prosimy o obecność przy stołach.",
  },
  { time: "22:00", title: "II kolacja" },
  { time: "23:30", title: "Oczepiny" },
  { time: "01:00", title: "III kolacja" },
  {
    time: "03:00",
    title: "Autokar powrotny z Villa Presto",
    muted: true,
    tentative: true,
  },
];
