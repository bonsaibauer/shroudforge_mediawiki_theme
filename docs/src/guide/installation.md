---
title: Installation
description: Installing the ShroudForge skin to your wiki
---

# Installation

Install ShroudForge in your MediaWiki `skins/` directory, then enable it in `LocalSettings.php`.

## Requirements

* [MediaWiki](https://www.mediawiki.org) 1.43.0 or later

::: details Using older versions of MediaWiki?

This ShroudForge release supports MediaWiki 1.43.0 and later.

:::

## Get the skin

:::: tabs
== Manual

1. Download `shroudforge-<version>-<build-id>.zip` from the latest stable build in [GitHub Releases](https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases).
2. Extract the included `ShroudForge` directory into your `skins/` folder.

```text
mediawiki/
└── skins/
    └── ShroudForge/
        ├── skin.json
        ├── i18n/
        ├── includes/
        ├── resources/
        └── ...
```

== Composer
Run the following commands in the root of your MediaWiki installation. They read the repository's current default branch and require it to use the `MAJOR.MINOR.PATCH` naming scheme:

```bash
REPOSITORY=https://github.com/bonsaibauer/shroudforge_wikijs_theme.git
BRANCH=$(git ls-remote --symref "$REPOSITORY" HEAD | awk '$1 == "ref:" && $3 == "HEAD" { sub("refs/heads/", "", $2); print $2 }')
if [[ ! "$BRANCH" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "The repository default branch must be named MAJOR.MINOR.PATCH." >&2
  exit 1
fi
COMPOSER=composer.local.json composer config repositories.shroudforge vcs "$REPOSITORY"
COMPOSER=composer.local.json composer require "bonsaibauer/shroudforge-mediawiki-skin:${BRANCH}.x-dev"
```

Set the repository's default branch to the active version branch. Composer derives its branch constraint from that setting, so the instructions follow the current version as it changes. For a fixed stable build, use the **Manual** download instead.

== Git
Run the following command in the root of your MediaWiki installation. It checks out the repository's current default branch, which should be the active version branch:

```sh
git clone https://github.com/bonsaibauer/shroudforge_wikijs_theme.git skins/ShroudForge
```

::: tip Note
Using `git` allows `Special:Version` to display the current commit ID. To link the commit ID to GitHub, add the following to your `LocalSettings.php`:

```php [LocalSettings.php]
$wgGitRepositoryViewers['https://github.com/(.*?)(.git)?'] = 'https://github.com/$1/commit/%H';
```

:::

::: warning
The `git` repository includes development files. For production environments where file size is a concern, consider using the **Manual** or **Composer** methods.
:::
::::

## Activate

To enable the skin, add this to your `LocalSettings.php`:

```php [LocalSettings.php]
wfLoadSkin( 'ShroudForge' );
```

Head over to `Special:Version` to verify that the skin is successfully enabled.

## Configure

### Set as default

To set ShroudForge as the wiki's default skin, add this to your `LocalSettings.php`:

```php [LocalSettings.php]
$wgDefaultSkin = 'shroudforge';
```

### Next steps

ShroudForge uses its dark palette by default. Set the site name and bundled logo in `LocalSettings.php` to apply the complete brand:

```php [LocalSettings.php]
$wgSitename = 'ShroudForge';
$wgFavicon = $wgScriptPath . '/skins/ShroudForge/resources/brand/shroudforge-favicon.ico';
$wgLogos = [
    'icon' => $wgScriptPath . '/skins/ShroudForge/resources/brand/shroudforge-mark.png',
];
```

The skin works without additional configuration, and you can customize it further:

* **[Skin configuration](../config/index.md)**: Tweak colors, layout, and features.
* **[Extension support](../config/extensions.md)**: Configure the skin's support for popular extensions.
