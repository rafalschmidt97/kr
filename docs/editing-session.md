# Sesja zmian z Klaudią

## Zasady dla agenta

Klaudia opisuje zmiany zwykłym językiem i ogląda stronę na telefonie. Agent
obsługuje kod, zdjęcia, sprawdzenia, Git i PR. Jedno krótkie pytanie naraz,
gdy brakuje treści albo decyzji o wyglądzie. Bez wykładów o narzędziach.

| Obszar                 | Odpowiedzialność        | Działanie                                      |
| ---------------------- | ----------------------- | ---------------------------------------------- |
| Treść, zdjęcia, wygląd | Klaudia                 | Opisuje oczekiwany efekt i ocenia podgląd      |
| Kod i sprawdzenia      | Agent                   | Pracuje na `klaudia/strona`, aktualizuje PR    |
| Podgląd telefonu       | Agent / Klaudia         | Agent buduje stronę, Klaudia sprawdza w Safari |
| Publikacja             | Agent na wyraźną prośbę | Wdraża branch na publiczną domenę bez merge    |
| Merge                  | Rafał                   | Ręcznie zatwierdza i scala PR na GitHub        |

## Start i wznowienie

1. Sprawdź `git status --short --branch`. Zachowaj wszystkie cudze zmiany.
2. Pracuj na `klaudia/strona`; jeśli sesja jest na `main`, najpierw przełącz
   branch. Jeśli branch został już scalony, utwórz nowy branch z aktualnego main
   i poproś Rafała o dopuszczenie jego dokładnej nazwy do wdrożeń Pages.
3. Sprawdź otwarty PR tego brancha. Utwórz go, jeśli nie istnieje; nigdy go nie scalaj.
4. Zbuduj i uruchom podgląd:

   ```sh
   npm run build
   npm run preview:lan
   ```

   W Herdr uruchamiaj serwer w osobnym panelu bez zabierania fokusu. Jeśli
   odziedziczony identyfikator panelu już nie istnieje, nie używaj cudzych paneli;
   uruchom osobny proces przez narzędzie powłoki i zapisz sposób zatrzymania.
   Nie uruchamiaj drugiej kopii na zajętym porcie. Zatrzymuj tylko swój proces.

## Link na telefon

**http://p-0-mac-rsch.local:4321/?preview=1**

Telefon i Mac muszą być w tej samej sieci Wi-Fi, bez izolacji klientów w sieci
gościnnej. Mac musi być włączony i nie może spać. To lokalny HTTP, nie HTTPS.
Nie trzeba nic publikować ani logować się do GitHub.

Gdy nazwa `.local` nie działa, odczytaj aktualny adres Wi-Fi Maca:

```sh
ipconfig getifaddr en0
```

Podaj link `http://<otrzymany-adres>:4321/?preview=1`. Adres IP może się zmienić.
Jeśli nie działa też IP, sprawdź wspólne Wi-Fi, VPN, izolację klientów oraz
zaporę macOS. Nie zmieniaj ustawień bezpieczeństwa bez zgody użytkownika.
Parametr `?preview=1` odsłania przycisk trzech kropek z ukrytymi podstronami.
Nie jest zabezpieczeniem ani osobnym środowiskiem testowym.

Polecenie `preview:lan` dopuszcza konkretną nazwę tego Maca. Na innym komputerze
użyj `npm run preview -- --host 0.0.0.0 --port 4321 --allowed-hosts <nazwa>.local`,
z nazwą zapisaną małymi literami. Nie dopuszczaj wszystkich hostów.

## Pętla zmian

1. Zmień wskazany tekst, zdjęcie lub układ. Treści są w `src/data/`; nazwy,
   wstęp i zdjęcia tła strony głównej są w `src/pages/index.astro`.
2. Uruchom `npm run build`. Podgląd serwuje `dist/`, więc bez przebudowania
   będzie pokazywać poprzednią wersję. Gdy odświeżenie nadal pokazuje stare
   zasoby, uruchom ponownie własny serwer podglądu i poproś o przeładowanie.
3. Sprawdź zmienioną stronę w szerokości telefonu, obrazki i nawigację. Przy
   większych zmianach sprawdź wszystkie sześć adresów.
4. Powiedz krótko, co się zmieniło i którą stronę odświeżyć.
5. Po sprawdzeniu zapisz commit w formacie conventional commits i wypchnij
   branch. Aktualizuj ten sam PR; sprawdź wynik CI. Nie publikuj strony.

Zdjęcia można przesłać jako załączniki do rozmowy. Jeśli klient nie udostępnia
pliku agentowi, poproś o zapisanie go w uzgodnionym folderze na Macu. Nie
obiecuj uploadu przez samą stronę. Nowe zdjęcia historii konwertuj do JPG,
zmniejszaj do około 1600 px i zachowuj zgodność plików z `timeline.ts`.
Zwróć uwagę na kadr, orientację i prywatne metadane zdjęć z telefonu.

## Podstrony i miejsca zmian

| Adres                  | Zawartość                            | Główne źródło treści                     |
| ---------------------- | ------------------------------------ | ---------------------------------------- |
| `/`                    | Zdjęcia w tle, odliczanie, plan, FAQ | `index.astro`, `plan.ts`, `faq.ts`       |
| `/historia`            | Historia i przewijane zdjęcia        | `timeline.ts`, `public/static/historia/` |
| `/goscie-zamiejscowi`  | Grein Hotel i transport              | `groups.ts`                              |
| `/villa-presto-nocleg` | Nocleg na miejscu                    | `groups.ts`                              |
| `/poprawiny`           | Niedzielne spotkanie                 | `groups.ts`                              |
| `/harmonogram-mlodzi`  | Szczegółowy roboczy plan Pary Młodej | `schedules.ts`                           |

Cztery ostatnie strony są publicznie dostępne po adresie, tylko ukryte w menu
i oznaczone `noindex`. Nie umieszczaj na nich sekretów ani danych wymagających
kontroli dostępu. Wspólna informacja o potwierdzaniu obecności jest w `site.ts`.

## Publikacja bez merge

Sformułowania „pokaż”, „zapisz”, „podoba mi się” nie oznaczają publikacji.
Na wyraźne „opublikuj na stronie” uprzedź, że zmiana trafi do wszystkich gości
na `klaudiarafal.pl`. Jeśli prośba jest niejednoznaczna, dopytaj.

1. Sprawdź branch, czysty katalog roboczy, aktualny commit na GitHub i zielone CI.
2. Uruchom istniejący workflow dla tego brancha:

   ```sh
   gh workflow run pages.yml --repo rafalschmidt97/kr --ref klaudia/strona
   ```

3. Odszukaj właściwy run po branchu, zdarzeniu i SHA, zaczekaj na sukces oraz
   sprawdź publiczny adres i zmienioną treść. Dopiero wtedy potwierdź publikację.

Ręcznie na GitHub: **Actions -> Deploy -> Run workflow -> wybierz branch ->
Run workflow**. Workflow używa wybranego brancha. Environment `github-pages`
dopuszcza `main` i dokładnie `klaudia/strona`. Inny branch wymaga osobnego
dopuszczenia. Push na branch i aktualizacja PR same niczego nie publikują.

Powrót do bieżącej wersji z main, także wyłącznie na prośbę:

```sh
gh workflow run pages.yml --repo rafalschmidt97/kr --ref main
```

GitHub Pages ma jeden publiczny serwis. Ostatnie udane wdrożenie zastępuje
poprzednie. Późniejszy merge/push do main automatycznie opublikuje main.
Wdrożenia współdzielą grupę concurrency, więc nowy run może anulować starszy.
Reguła „merge robi Rafał” jest instrukcją pracy agenta, nie blokadą konta
administratora GitHub. Nie włączaj auto-merge ani nie zmieniaj ochrony brancha.
