# Podgląd i obsługa sesji

Instrukcja operacyjna dla agenta. Dobór trybu rozmowy, zapis serii, praca w tle i
uprawnienia do publikacji są w [zasadach współpracy](contributing.md#working-modes).
Miejsca zmian treści są w [mapie strony](architecture.md#routes-and-content-owners).

## Start i wznowienie

1. Sprawdź `git status --short --branch`, dotychczasowy zakres zmian i przekazanie
   od poprzedniego agenta. Zachowaj cudzą pracę i sprawdź
   [bieżący branch oraz PR](contributing.md#authorization-and-git).
2. Jeśli branch jest inny niż uzgodniony, ustal bezpieczne wznowienie przed
   zmianami. Nie przełączaj automatycznie wspólnego, brudnego katalogu. Po scaleniu
   poprzedniego PR nowy branch wymaga uzgodnienia z Rafałem; jego dopuszczenie do
   Pages jest osobną czynnością. Przy zwykłym starcie odczytaj stan PR, a tworzenie
   lub aktualizację odłóż do autoryzowanego zapisu serii.
3. Sprawdź, czy podgląd już działa na porcie 4321. Użyj istniejącego procesu;
   nie uruchamiaj drugiej kopii ani nie zatrzymuj obcego serwera.
4. Jeśli serwera nie ma, zbuduj stronę i uruchom podgląd w osobnym terminalu:

   ```sh
   npm run build
   npm run preview:lan
   ```

   W Herdr użyj własnego panelu bez przejmowania fokusu, zgodnie z instrukcjami
   środowiska. Nie korzystaj z odziedziczonego identyfikatora bez sprawdzenia.
   Zapisz właściciela, polecenie, port oraz sposób zatrzymania procesu.

## Link na telefon

**http://p-0-mac-rsch.local:4321/?preview=1**

Telefon i Mac muszą być w tej samej osiągalnej sieci Wi-Fi. Mac musi być włączony
i nie może spać. To lokalny HTTP. Gdy nazwa `.local` nie działa:

```sh
ipconfig getifaddr en0
```

Na tym Macu jest to adres interfejsu Wi-Fi; jeśli interfejs się zmienił, najpierw
ustal właściwy. Podaj `http://<otrzymany-adres>:4321/?preview=1`. Adres może się
zmieniać. Przy dalszych problemach sprawdź Wi-Fi, VPN, izolację klientów i zaporę;
zmiana ustawień bezpieczeństwa wymaga zgody.

`preview:lan` dopuszcza nazwę tego Maca. Na innym komputerze użyj jego rzeczywistej
nazwy zapisanej małymi literami:

```sh
npm run preview -- --host 0.0.0.0 --port 4321 --allowed-hosts <nazwa>.local
```

Nie dopuszczaj wszystkich hostów. `?preview=1` odsłania menu trzech kropek i
zapamiętuje wybór dla danego adresu strony. `?preview=0` lub "Wyłącz podgląd"
wyłącza menu. Znaczenie tego przełącznika opisuje
[INV-07](invariants.md#inv-07-hidden-does-not-mean-private).

## Odświeżanie po zmianie

1. Zmień uzgodniony tekst, zdjęcie lub układ we właściwym źródle.
2. Uruchom `npm run build`: serwer preview czyta `dist/`, więc wymaga nowego
   builda po każdej serii poprawek. Nie nazywaj starego podglądu zaktualizowanym.
3. Sprawdź efekt zgodnie z [zakresem weryfikacji](quality.md#choose-checks-by-change).
   Powiedz krótko, którą stronę odświeżyć. Nie czekaj na niezależne sprawdzenia
   w tle, aby przyjąć kolejne uwagi.

Gdy podgląd nadal pokazuje stare zasoby, przeładuj stronę i w razie potrzeby
uruchom ponownie wyłącznie własny serwer. Serwer developerski Vite potrafi
zachować stare scoped CSS: uruchom go ponownie przez
`npm run dev -- --force` i wykonaj twarde odświeżenie. Do oceny układu i zrzutów
preferuj preview po świeżym buildzie.

## Zdjęcia

Zdjęcia przyjmuj jako załączniki. Jeśli klient nie udostępnia pliku, poproś o
zapis w uzgodnionym folderze na Macu. Zachowaj otrzymany oryginał; wersję na
stronę przygotuj oddzielnie. Strona nie ma mechanizmu przesyłania zdjęć.

- Dla nowej dostawy do historii przygotuj JPG o dłuższym boku około 1600 px.
  Sprawdź orientację, kadr i prywatne metadane. Odczytaj wymiary pliku zamiast
  zgadywać je na podstawie wyglądu.
- Aktualne rozdziały i wybór zdjęć są w [story.ts](../src/data/story.ts), pliki
  w [public/static/historia/](../public/static/historia/). Archiwum
  [timeline.ts](../src/data/timeline.ts) zachowuje mapowanie wcześniejszej dostawy.
  Przy samej zmianie kompozycji nie zmieniaj archiwum ani oryginalnych plików.
- Każde nowe zdjęcie musi mieć uzgodnione użycie w danych; każdy wskazany plik
  musi istnieć. Niewybrane obecnie fotografie z archiwum nadal mają właściciela.
  Przy nowej dostawie odnotuj jej przypisanie bez przepisywania starych wpisów.
- Jeśli brakuje odpowiedniego zdjęcia, pozostaw uczciwe polskie oznaczenie
  miejsca na zdjęcie. Nie dopasowuj wydarzenia do przypadkowej fotografii.

## Publikacja i przywracanie

Najpierw zastosuj [bramkę publikacji](contributing.md#authorization-and-git).
Poniższe polecenia są instrukcją dla osobno autoryzowanej operacji.

1. Sprawdź branch, stabilny i czysty katalog roboczy, wypchnięty commit oraz
   udane CI tego commita. Wspólny katalog z nową niezapisaną pracą nie spełnia
   tego warunku. Sprawdź dopuszczenie dokładnego brancha w `github-pages`.
2. Dla bieżącego brancha edycji uruchom istniejący workflow:

   ```sh
   gh workflow run pages.yml --repo rafalschmidt97/kr --ref klaudia/strona
   ```

3. Odszukaj run po branchu, zdarzeniu i SHA. Monitoruj go w tle. Po sukcesie
   sprawdź publiczny adres i zmienioną treść; dopiero wtedy potwierdź publikację.

Ręcznie na GitHub: **Actions -> Deploy -> Run workflow -> wybierz branch ->
Run workflow**. Publikowany jest wybrany ref. Pages ma jeden publiczny serwis,
a późniejszy push/merge do main automatycznie opublikuje main. Nowy run może
anulować starszy we wspólnej grupie `pages`.

Przy osobno zamówionym powrocie do bieżącej wersji z main:

```sh
gh workflow run pages.yml --repo rafalschmidt97/kr --ref main
```

To publikuje aktualny main, niekoniecznie poprzednią wersję produkcyjną. Sprawdź
wynik według tych samych kroków. Reguły dopuszczonych branchy są ustawieniem
GitHub, nie plikiem workflow; [ostatni odczyt](repository-inventory.md#remote-evidence)
jest informacją z audytu, a nie zgodą na zmianę ustawień.
