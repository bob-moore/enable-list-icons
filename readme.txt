=== Enable List Icons ===
Contributors: Bob Moore
Tags: block-editor, gutenberg, list, icons, blocks
Requires at least: 6.9
Tested up to: 7.0
Stable tag: 0.3.0
Requires PHP: 8.2
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Add icons to the core/list block with WordPress icons, MUI icon families, or custom SVG.

== Description ==

Enable List Icons extends the core/list block with icon controls in the block sidebar.

What it does:

* Adds icon controls to core/list in the block editor.
* Supports WordPress icons, MUI icon families, and custom SVG markup.
* Lets developers add more static JSON icon families with a PHP filter.
* Supports inside/outside icon placement.
* Supports per-list icon color, size, gap, and vertical offset.
* Renders sanitized inline SVG on the frontend.

This plugin is distributed through GitHub releases and includes a scoped updater so WordPress can surface updates from this repository.

== Installation ==

= Install as a WordPress plugin =

1. Download the latest release zip from GitHub.
2. In WordPress admin, go to Plugins > Add New Plugin > Upload Plugin.
3. Upload the zip and activate Enable List Icons.

= Install via Composer (library usage) =

1. Require the package:

`composer require bmd/enable-list-icons`

2. Ensure Composer autoloading is loaded:

`require_once __DIR__ . '/vendor/autoload.php';`

3. Instantiate and mount the service:

`use Bmd\EnableListIcons\Plugin;`
`$plugin = new Plugin( $dependency_url, $dependency_path );`
`$plugin->mount();`

The constructor expects the URL and filesystem path to the Enable List Icons dependency root, not the file where you call it.

== Custom Icon Families ==

Developers can add static JSON icon families with the `enable_list_icons_icon_families` filter. Each JSON file should contain an array of picker-compatible icon objects with `name`, `label`, and `source` properties.

Example:

`add_filter( 'enable_list_icons_icon_families', function ( $families ) {`
`    $families['brand-icons'] = array(`
`        'label' => 'Brand Icons',`
`        'url'   => plugin_dir_url( __FILE__ ) . 'icons/brand-icons.json',`
`    );`
`    return $families;`
`} );`

== Frequently Asked Questions ==

= Is this plugin in the WordPress Plugin Directory? =

No. It is distributed via GitHub releases.

= Does this plugin support updates in wp-admin? =

Yes. It includes a GitHub updater integration so WordPress can detect updates from this repo.

= Which icon sets are included? =

WordPress icons and MUI icon families, plus a custom SVG option. Developers can also register additional static JSON icon families with the `enable_list_icons_icon_families` filter.

= Does this work with custom list blocks? =

Enable List Icons is designed for the core WordPress list block (`core/list`). Third-party list blocks may not be supported.

== Changelog ==

= 0.3.0 =

* Refined the PHP plugin architecture around a dedicated bootstrapper, plugin service, and utility helper.
* Updated Composer autoloading for the new `Bmd\EnableListIcons` namespace structure.
* Added JSON icon family loading with support for WordPress, MUI, MUI Outlined, MUI Rounded, and MUI Sharp families.
* Added separate GitHub Actions lint workflows for CSS, JS, and PHP.
* Added a WordPress Playground blueprint and demo list content.
* Updated release packaging to include built assets and production Composer files.

= 0.2.0 =

* Added toggle-to-deselect behavior for the icon picker.
* Added a dedicated Icon Styles panel grouping placement, size, gap, and vertical offset controls.
* Improved unit/range control layout with a shared label and stacked input plus slider.
* Fixed null handling for icon attributes throughout.
* Fixed icon outside placement removing excess left padding on list items.

= 0.1.0 =

* Initial release as Enable List Icons.
* Added icon picker with WordPress and MUI icon sets.
* Added inside/outside placement toggle.
* Added icon color, size, gap, and vertical offset controls.
* Added server-side render filter for core/list.
* Added scoped GitHub updater via wpify/scoper.

== Upgrade Notice ==

= 0.3.0 =

Updates plugin internals, icon family loading, Playground setup, documentation, Composer usage, and release packaging.
