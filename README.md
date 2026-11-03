# ShroudForge MediaWiki-Skin

Dieses Repository enthält einen installierbaren Skin für MediaWiki 1.43 und neuer. Die dunkle Darstellung übernimmt die Farben, die Inter-Schrift und das Hammerzeichen von [shroudforge.net](https://shroudforge.net). Die Skin-Grundlage ist Citizen, erweitert um das ShroudForge-Branding.

## Installation

1. Lade `shroudforge-<Version>-<Build-ID>.zip` aus dem neuesten stabilen Build in den [GitHub-Releases](https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases) herunter und entpacke den enthaltenen Ordner `ShroudForge` nach `<MediaWiki>/skins/`.
2. Ergänze am Ende von `LocalSettings.php`:

   ```php
   wfLoadSkin( 'ShroudForge' );
   $wgDefaultSkin = 'shroudforge';

   $wgSitename = 'ShroudForge';
   $wgFavicon = $wgScriptPath . '/skins/ShroudForge/resources/brand/shroudforge-favicon.ico';
   $wgLogos = [
       'icon' => $wgScriptPath . '/skins/ShroudForge/resources/brand/shroudforge-mark.png',
   ];
   $wgCitizenThemeColor = '#050b14';
   ```

3. Öffne `Special:Version` und prüfe, ob ShroudForge unter den Skins aufgeführt ist.

Wenn du von einer älteren Citizen-basierten Skin-Version aktualisierst und noch gecachtes HTML davon vorhanden ist, aktiviere `$wgCitizenCompat = true;`, bis diese Seiten aus dem Cache gelaufen sind. Schalte die Option anschließend wieder aus. Für eine neue Installation ist die Option nicht erforderlich.

## Eigene Releases

Die Version in `skin.json`, `package.json` und `package-lock.json` muss dem aktiven Branch-Namen im Format `MAJOR.MINOR.PATCH` entsprechen. Der Versionsbranch muss die Release-Workflows enthalten.

- Jeder Push auf einen Versionsbranch erstellt eine Entwicklungs-Vorabversion wie `v<Version>-dev.<Build-ID>`.
- Der Workflow **ShroudForge Manual Release** erstellt manuell vom ausgewählten Versionsbranch einen stabilen Release-Build wie `v<Version>-build.<Build-ID>`.
- Beide Builds hängen `shroudforge-<Version>-<Build-ID>.zip` und eine passende `.sha256`-Prüfsumme an den GitHub-Release an.

## Gestaltung

Der dunkle Modus ist die Voreinstellung. Die Oberfläche verwendet die ShroudForge-Flächen `#050b14`, `#08111d`, `#0b1825`, `#122a3d` und `#18344d`. Cyan `#63c9f5` setzt Links, Fokusrahmen und aktive Bedienelemente. Die Schriften werden lokal aus dem Skin geladen. Der optionale helle Modus bleibt für Benutzer verfügbar.

Das Hammerzeichen, das Favicon und die Inter-Schrift liegen unter `resources/brand/`. Die Schriftlizenz steht in `resources/brand/Inter-OFL.txt`.

## Grundlage und technische Namen

ShroudForge basiert auf [Citizen](https://mwcitizen.skin/), einer responsiven MediaWiki-Skin mit Unterstützung für Erweiterungen. Die übernommenen GPL-Lizenzbedingungen und ursprünglichen Mitwirkenden stehen in [LICENSE](LICENSE) und [CREDITS.md](CREDITS.md).

Öffentlicher Skin-Name, Installationsordner und Paketname lauten ShroudForge. Bestehende interne `citizen-*`-CSS-Klassen, ResourceLoader-Modulnamen und `wgCitizen...`-Konfigurationsnamen bleiben als Schnittstellen der Citizen-Grundlage erhalten.

## Entwicklung

```powershell
npm ci
npm run lint:styles
npm run lint:i18n
```

Die Projekthinweise stehen in [AGENTS.md](AGENTS.md). Die weiterführenden technischen Dokumente unter `docs/src/` beschreiben auch die übernommenen Citizen-Schnittstellen.
