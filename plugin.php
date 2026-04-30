<?php
/**
 * Plugin Name:       Enable List Icons
 * Plugin URI:        https://github.com/bob-moore/enable-list-icons
 * Author:            Bob Moore
 * Author URI:        https://www.bobmoore.dev
 * Description:       Adds icons to list blocks.
 * Version:           0.2.0
 * Requires at least: 6.7
 * Tested up to:      7.0
 * Requires PHP:      8.2
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       enable-list-icons
 *
 * @package           enable-list-icons
 */

use Bmd\EnableListIcons;
use Bmd\EnableListIcons\Bmd\GithubWpUpdater;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/vendor/scoped/autoload.php';
require_once __DIR__ . '/inc/EnableListIcons.php';

function initialize_enable_list_icons_updater(): void
{
	$updater = new GithubWpUpdater(
		__FILE__,
		[
			'github.user'   => 'bob-moore',
			'github.repo'   => 'enable-list-icons',
			'github.branch' => 'main',
		]
	);

	$updater->mount();
}

function create_enable_list_icons_plugin(): void
{
	$plugin = new EnableListIcons(
		plugin_dir_url( __FILE__ ),
		plugin_dir_path( __FILE__ )
	);

	$plugin->mount();
}

initialize_enable_list_icons_updater();
create_enable_list_icons_plugin();
