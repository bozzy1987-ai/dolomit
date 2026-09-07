# Panel aktualności DOLOMIT

## Pierwsze uruchomienie

Projekt Sanity: `jpuisiv8`, dataset: `production` (publiczny).

1. Skopiuj `.env.example` do `.env.local`, jeśli plik lokalny jeszcze nie istnieje.
2. Zainstaluj biblioteki: `npm ci`.
3. W [ustawieniach projektu Sanity](https://www.sanity.io/manage/project/jpuisiv8) przejdź do API → CORS origins. Dodaj `http://localhost:3000` z opcją **Allow credentials**.
4. Uruchom `npm run dev` i otwórz `http://localhost:3000/studio`.
5. Zaloguj się tym samym kontem, na którym utworzono projekt. Dostęp do edycji mają wyłącznie członkowie projektu Sanity.

Project ID i nazwa datasetu są publicznymi identyfikatorami. Strona czyta tylko opublikowane treści; nie potrzebuje tokenu zapisu ani hasła w zmiennych środowiskowych.

## Dodanie aktualności

1. W panelu wybierz **Aktualności** i przycisk utworzenia dokumentu.
2. Uzupełnij tytuł i kliknij **Generuj** przy adresie wpisu.
3. Wybierz datę i kategorię; wpisz krótki opis oraz treść.
4. Opcjonalnie dodaj zdjęcie główne, galerię i linki. Uzupełnij opisy dodawanych zdjęć.
5. Kliknij **Opublikuj** (Publish). Sam zapis szkicu nie publikuje wpisu.
6. Otwórz lub odśwież `http://localhost:3000/aktualnosci`. Wpis otrzyma podstronę `/aktualnosci/adres-wpisu`.

Publikacja, edycja i wycofanie publikacji nowych wpisów są widoczne po odświeżeniu strony. Nie wymagają pusha ani przebudowy. Data służy do wyświetlania i sortowania; nie ustawia automatycznej publikacji w przyszłości.

Panel ma polskie etykiety i polskie tłumaczenia interfejsu. Jeśli interfejs pojawi się po angielsku, wybierz język polski w menu użytkownika.

Sześć wcześniejszych wpisów pozostaje archiwum w `src/data/legacy-news.ts`; nie zostały zaimportowane do Sanity i nie są edytowalne w panelu. Nowe wpisy CMS są wyświetlane przed archiwum. Jeżeli dokument CMS ma ten sam adres co archiwalny wpis, opublikowana wersja CMS zastępuje go na stronie; po jej wycofaniu ponownie widać archiwalną wersję.

## Wdrożenie na Vercel

Publiczna konfiguracja projektu (`jpuisiv8` / `production`) ma wartości domyślne w `src/sanity/env.ts`, dzięki czemu wdrożenie działa bez ręcznego ustawiania zmiennych na Vercelu. Zmienne `NEXT_PUBLIC_SANITY_PROJECT_ID` i `NEXT_PUBLIC_SANITY_DATASET` pozwalają wskazać inny projekt lub dataset; muszą być dostępne podczas buildu. Nie zawierają haseł ani tokenów.

1. W Sanity dodaj CORS origin `https://dolomit.vercel.app` z **Allow credentials**.
2. Wdróż kod przez push na `main`.
3. Otwórz `https://dolomit.vercel.app/studio` i zaloguj się kontem członka projektu.

Dodaj analogicznie docelową domenę firmy, gdy strona zostanie na nią przeniesiona. Localhost i Vercel korzystają z tego samego datasetu, więc publikowane wpisy są wspólne. Testowe wpisy można wycofać z publikacji w Studio. Druki i deklaracje są plikami w `public/dokumenty`; panel aktualności nie służy do ich podmiany.

## Sprawdzenie

- `npm run build` — kompilacja produkcyjna i TypeScript.
- `npm run lint -- src/sanity src/lib/news.ts src/data/legacy-news.ts src/components/ArticleBody.tsx src/components/SiteShell.tsx src/app/studio src/app/aktualnosci sanity.config.ts` — kontrola zmienionych plików.
- Test ręczny: utwórz szkic, sprawdź, że nie ma go w aktualnościach, opublikuj, otwórz wpis, edytuj, opublikuj ponownie i wycofaj publikację. Po wycofaniu nowy wpis powinien zniknąć z listy, a jego URL zwrócić 404.

Jeśli podczas instalacji pakietów otwarty serwer deweloperski zgłosi brak `jiti`, poczekaj na zakończenie `npm ci`, zatrzymaj serwer, wyczyść wygenerowany katalog `.next` i uruchom serwer ponownie.
