# Treningsbanken / Min Økt

Dette er en statisk treningsapp som kan lastes opp manuelt i GitHub-nettleseren og publiseres med GitHub Pages uten npm, Next, Vite, React-build eller lokal server.

## Filer du skal laste opp til GitHub

Last opp disse filene fra hovedmappen:

- `index.html`
- `app.js`
- `app.css`
- `icon.svg`
- `manifest.webmanifest`
- `sw.js`
- `README.md`

`_backup/` trenger du ikke laste opp. Den inneholder gamle/overflødige prosjektfiler som er tatt vare på.

## Åpne appen lokalt

Åpne `index.html` direkte i nettleseren.

Appen lagrer økter, historikk, notater og ukeplan i nettleserens lokale lagring.

## Publiser på GitHub Pages

1. Opprett eller åpne GitHub-repositoryet.
2. Last opp filene fra listen over direkte i hovedmappen/root i repositoryet.
3. Gå til `Settings`.
4. Velg `Pages`.
5. Under `Build and deployment`, velg `Deploy from a branch`.
6. Velg branch, vanligvis `main`.
7. Velg publiseringsmappe `/root`.
8. Lagre.

GitHub Pages bruker `index.html` øverst i hovedmappen som inngang til appen.

## Viktig

Alle appens nødvendige filer ligger direkte i hovedmappen. Filstiene er relative:

- `./app.js`
- `./app.css`
- `./icon.svg`

Det brukes ingen absolutte lokale filbaner.
