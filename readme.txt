=== Enable List Icons ===
Contributors: bob-moore
Tags: list, icons, gutenberg, block, custom-icon
Requires at least: 6.7
Tested up to: 7.0
Requires PHP: 8.2
Stable tag: 0.2.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Add custom icons to WordPress list blocks with flexible placement, color, sizing, and spacing controls.

== Description ==

The WordPress list block is great — but it doesn't give you control over list markers.

Enable List Icons changes that. Add custom icons to your lists, position them inside or outside the text, adjust their color, size, spacing, and vertical offset.

= What it does =

Enable List Icons extends the core `wp:list` block with icon controls. For each list item, you can:

* Choose an icon from built-in icon sets (WordPress icons, Material Design Icons, or custom SVG)
* Position the icon inside (inline before text) or outside (aligned beside the text)
* Adjust icon color, size, gap from text, and vertical offset
* See your changes live in the editor

Instead of plain bullet points or numbers, your lists get personality.

= Why use it =

* **Visual hierarchy** — Icons help readers scan lists faster
* **Brand consistency** — Use your own icon sets, not just default markers
* **Design flexibility** — Control placement and spacing per block
* **No custom CSS needed** — All controls are in the block editor

= How it works =

1. Select a list block in the editor
2. Open the icon picker in the inspector panel
3. Choose your icon, adjust placement/color/size
4. See the result live on the frontend

= Features =

* Icon picker with support for multiple icon sets
* Placement toggle: inside (inline) or outside (aligned marker)
* Icon size control with multiple units (px, em, rem, vw, vh)
* Icon color control with theme, default, and user color presets
* Icon/text gap control with range and unit selector
* Vertical offset control for fine-tuning icon alignment
* Inline SVG rendering with WordPress-standard sanitization
* Fully styled with frontend and editor styles
* Works with the default WordPress list marker style

== Installation ==

1. In WordPress admin, go to Plugins > Add New Plugin
2. Search for "Enable List Icons"
3. Click Install Now and then Activate

Or manually:

1. Upload the plugin directory to `/wp-content/plugins/`
2. Activate the plugin through the Plugins menu in WordPress

= Install via Composer (library usage) =

1. Require the package:

`composer require bmd/enable-list-icons`

2. Ensure Composer autoloading is loaded:

`require_once __DIR__ . '/vendor/autoload.php';`

3. Instantiate and mount the service:

`use Bmd\EnableListIcons;`
`$plugin = new EnableListIcons( plugin_dir_url( __FILE__ ), plugin_dir_path( __FILE__ ) );`
`$plugin->mount();`

== Icon Selection ==

The icon picker loads icon sets dynamically. Currently supported:

* **WordPress Icons** — Default WordPress icon set
* **Material Design Icons** — MUI Material Icons

== Icon Placement ==

= Inside (Inline) =

Icon appears inline before the list item text. The list maintains its normal vertical flow — text wraps under the icon if it's wide.

* Icon size affects the inline space taken
* Vertical offset lets you fine-tune inline alignment

= Outside (Aligned) =

Icon appears in reserved space to the left of the text.

* Text and inline formatting stay in normal flow
* Vertical offset control lets you fine-tune alignment
* Useful for larger icons that shouldn't wrap text

== Frequently Asked Questions ==

= Does this work with custom list blocks? =

Enable List Icons is designed for the core WordPress list block (`wp:list`). Third-party list blocks may not be supported.

= Can I use my own icons? =

The plugin supports WordPress icons and Material Design Icons out of the box.

= Will this work with my theme? =

Enable List Icons uses standard WordPress block rendering and CSS. It should work with any modern WordPress theme that supports blocks.

= Does this plugin support updates? =

Yes. It includes a GitHub updater integration so WordPress can detect updates from this repository.

== Changelog ==

= 0.2.0 =

* Add toggle-to-deselect behavior for icon picker — clicking the active icon now clears the selection
* Add dedicated "Icon Styles" panel grouping placement, size, gap, and vertical offset controls
* Improve unit/range control layout with a shared label and stacked input + slider
* Fix null handling for icon attributes throughout (IconValue properties now nullable)
* Fix icon outside placement removing excess left padding on list items
* Remove unused IconPositionControl component

= 0.1.0 =

* Initial release as Enable List Icons
* Full icon picker with WordPress and MUI icon sets
* Inside/outside placement toggle
* Icon color, size, gap, and vertical offset controls
* Outside placement keeps list item text and inline formatting in normal flow
* Server-side render filter for core/list block
* Scoped GitHub updater via wpify/scoper
* Comprehensive PHPUnit test suite
* GitHub Actions CI workflow

== License ==

Enable List Icons is licensed under the GPL-2.0-or-later. See https://www.gnu.org/licenses/gpl-2.0.html for details.
