# Enable List Icons

![Version](https://img.shields.io/badge/version-0.2.0-blue)
![WordPress](https://img.shields.io/badge/WordPress-6.7%2B-3858e9?logo=wordpress&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8.2%2B-777BB4?logo=php&logoColor=white)
![License](https://img.shields.io/badge/license-GPL--2.0--or--later-green)
![Lint and Build](https://github.com/bob-moore/enable-list-icons/actions/workflows/lint-build.yml/badge.svg)

The WordPress list block is great — but it doesn't give you control over list markers.

This plugin changes that. Add custom icons to your lists, position them inside or outside the text, adjust their color, size, spacing, and vertical offset.

## What it does

Enable List Icons extends the core `wp:list` block with icon controls. For each list item, you can:

- Choose an icon from built-in icon sets (WordPress icons, Material Design Icons, or custom SVG)
- Position the icon inside (inline before text) or outside (aligned beside the text)
- Adjust icon color, size, gap from text, and vertical offset
- See your changes live in the editor

Instead of plain bullet points or numbers, your lists get personality.

## Why use it

- **Visual hierarchy** — Icons help readers scan lists faster
- **Brand consistency** — Use your own icon sets, not just default markers
- **Design flexibility** — Control placement and spacing per block
- **No custom CSS needed** — All controls are in the block editor

## How it works

1. Select a list block in the editor
2. Open the icon picker in the inspector panel
3. Choose your icon, adjust placement/color/size
4. See the result live on the frontend

It provides:

- A block inspector panel with icon picker and placement controls
- Support for WordPress, Material Design, and custom SVG icons
- Frontend and editor styling for inside and outside icon placement
- Server-side rendering that adds styles and markup to list items

## Features

- Icon picker with support for multiple icon sets via dynamic imports
- Placement toggle: inside (inline before text) or outside (aligned marker)
- Icon size control with multiple units (px, em, rem, vw, vh)
- Icon color control with theme, default, and user color presets
- Icon/text gap control with range and unit selector
- Vertical offset control for fine-tuning icon alignment
- Inline SVG rendering with WordPress-standard sanitization
- Fully styled with frontend and editor SCSS
- Works with the default WordPress list marker style

## Requirements

- WordPress 6.7 or later
- PHP 8.2 or later
- Node.js 18.12 or later (for local development/build)

## Installation

### As a WordPress plugin

1. Build production assets (`npm run build`).
2. Package the plugin (`npm run zip`) or zip the plugin directory.
3. In WordPress admin, go to Plugins > Add New Plugin > Upload Plugin.
4. Upload the ZIP and activate Enable List Icons.

### As a Composer dependency

1. Require the package from your consuming plugin or theme.
2. Ensure Composer autoloading is active.
3. Instantiate and hook the plugin class in your bootstrap:

```php
<?php

use Bmd\EnableListIcons;

$plugin = new EnableListIcons(
    plugin_dir_url( __FILE__ ),
    plugin_dir_path( __FILE__ )
);

$plugin->mount();
```

## Icon Selection

The icon picker loads icon sets dynamically. Currently supported:

- **WordPress Icons** — Default WordPress icon set (`@wordpress/icons`)
- **Material Design Icons** — MUI Material Icons via `@10up/block-components`

## Icon Placement

### Inside (Inline)

Icon appears inline before the list item text. The list maintains its normal vertical flow — text wraps under the icon if it's wide.

- Icon size affects the inline space taken
- Vertical offset lets you fine-tune inline alignment

### Outside (Aligned)

Icon appears in reserved space to the left of the text.

- Text and inline formatting stay in normal flow
- Vertical offset control lets you fine-tune alignment
- Useful for larger icons that shouldn't wrap text

## Changelog

### 0.2.0

- Add toggle-to-deselect behavior for icon picker — clicking the active icon now clears the selection
- Add dedicated "Icon Styles" panel grouping placement, size, gap, and vertical offset controls
- Improve unit/range control layout with a shared label and stacked input + slider
- Fix null handling for icon attributes throughout (`IconValue` properties now nullable)
- Fix icon outside placement removing excess left padding on list items
- Remove unused `IconPositionControl` component

### 0.1.0

- Initial release as Enable List Icons
- Full icon picker with WordPress and MUI icon sets
- Inside/outside placement toggle
- Icon color, size, gap, and vertical offset controls
- Outside placement keeps list item text and inline formatting in normal flow
- Server-side render filter for `core/list` block
- Scoped GitHub updater via `wpify/scoper`
- Comprehensive PHPUnit test suite
- GitHub Actions CI workflow

## License

GPL-2.0-or-later. See https://www.gnu.org/licenses/gpl-2.0.html.
