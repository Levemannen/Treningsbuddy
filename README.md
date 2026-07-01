# treningsbuddy

Dette er en statisk treningsapp som kan lastes opp manuelt i GitHub-nettleseren og publiseres med GitHub Pages uten npm, Next, Vite, React-build eller lokal server.

## Filer du skal laste opp til GitHub

Last opp disse filene direkte i hovedmappen/root i GitHub-repositoryet:

- `index.html`
- `app.js`
- `app.css`
- `icon.svg`
- `manifest.webmanifest`
- `sw.js`
- `README.md`

Valgfritt:

- `sounds/` hvis du vil bruke egne mp3-lyder for timeren.

`_backup/` trenger du ikke laste opp. Den inneholder gamle eller overflødige prosjektfiler som er tatt vare på.

## Åpne appen lokalt

Åpne `index.html` direkte i nettleseren, eller kjør en enkel statisk server fra denne mappen og åpne `http://127.0.0.1:8080/`.

Appen lagrer favorittøkter, historikk, notater, timerinnstillinger og lydvalg i nettleserens lokale lagring.

## Publiser på GitHub Pages

1. Opprett eller åpne GitHub-repositoryet.
2. Last opp filene fra listen over direkte i hovedmappen/root i repositoryet.
3. Gå til `Settings`.
4. Velg `Pages`.
5. Under `Build and deployment`, velg `Deploy from a branch`.
6. Velg branch, vanligvis `main`.
7. Velg publiseringsmappe `/root`.
8. Lagre.

GitHub Pages skal publisere fra hovedmappen/root. `index.html` må ligge øverst i hovedmappen.

## Viktig

Alle nødvendige appfiler ligger direkte i hovedmappen. Filstiene er relative:

- `./app.js`
- `./app.css`
- `./icon.svg`
- `./manifest.webmanifest`
- `./sw.js`

Det brukes ingen absolutte lokale filbaner, og appen trenger ikke npm, build-verktøy eller lokal server.
