<?php
/**
 * Tests for EnableListIcons runtime behavior.
 *
 * @package Bmd\Tests
 */

namespace Bmd\Tests;

use Bmd\EnableListIcons\Plugin;
use PHPUnit\Framework\TestCase;

/**
 * @covers \Bmd\EnableListIcons\Plugin
 */
class EnableListIconsTest extends TestCase
{
	protected function setUp(): void
	{
		parent::setUp();
		$GLOBALS['__wp_mock_actions'] = [];
		$GLOBALS['__wp_mock_filters'] = [];
	}

	public function test_constructor_sets_url_and_path(): void
	{
		$plugin = new class(
			'https://example.test/wp-content/plugins/enable-list-icons',
			'/var/www/html/wp-content/plugins/enable-list-icons'
		) extends Plugin {
			public function publicUrl(): string
			{
				return $this->url;
			}

			public function publicPath(): string
			{
				return $this->path;
			}
		};

		$this->assertSame( 'https://example.test/wp-content/plugins/enable-list-icons/', $plugin->publicUrl() );
		$this->assertSame( '/var/www/html/wp-content/plugins/enable-list-icons/', $plugin->publicPath() );
	}

	public function test_mount_registers_expected_hooks(): void
	{
		$plugin = new Plugin( 'https://example.test/plugin/', '/var/www/plugin/' );
		$plugin->mount();

		$this->assertContains(
			[ 'enqueue_block_editor_assets', [ $plugin, 'enqueueEditorAssets' ], 10, 1 ],
			$GLOBALS['__wp_mock_actions']
		);
		$this->assertContains(
			[ 'init', [ $plugin, 'enqueueBlockStyles' ], 10, 1 ],
			$GLOBALS['__wp_mock_actions']
		);
		$this->assertContains(
			[ 'render_block_core/list', [ $plugin, 'renderBlockList' ], 10, 2 ],
			$GLOBALS['__wp_mock_filters']
		);
	}

	public function test_render_block_list_returns_original_without_icon_attribute(): void
	{
		$plugin = new Plugin( 'https://example.test/plugin/', '/var/www/plugin/' );
		$html   = '<ul class="wp-block-list"><li>Item</li></ul>';

		$this->assertSame( $html, $plugin->renderBlockList( $html, [ 'attrs' => [] ] ) );
	}

	public function test_render_block_list_adds_icon_span_classes_and_styles(): void
	{
		$plugin = new Plugin( 'https://example.test/plugin/', '/var/www/plugin/' );
		$html   = '<ul class="wp-block-list"><li>Alpha</li><li>Beta</li></ul>';
		$block  = [
			'attrs' => [
				'icon'               => [
					'name' => 'Check Circle',
					'src'  => '<svg viewBox="0 0 24 24"><path d="M1 1"/></svg>',
				],
				'iconSize'           => '1.5em',
				'iconGap'            => '0.75em',
				'iconOutside'        => true,
				'iconVerticalOffset' => '2px',
				'iconColor'          => '#cc1818',
			],
		];

		$result = $plugin->renderBlockList( $html, $block );

		$this->assertStringContainsString( 'has-icon__check-circle', $result );
		$this->assertStringContainsString( 'has-icon-placement__outside', $result );
		$this->assertStringContainsString( '--wp-block-list--icon-size:1.5em;', $result );
		$this->assertStringContainsString( '--wp-block-list--icon-gap:0.75em;', $result );
		$this->assertStringContainsString( '--wp-block-list--icon-vertical-offset:2px;', $result );
		$this->assertStringContainsString( '--wp-block-list--icon-color:#cc1818;', $result );
		$this->assertSame( 2, substr_count( $result, 'class="wp-block-list__item-icon"' ) );
	}

	public function test_render_block_list_defaults_to_outside_when_attribute_missing(): void
	{
		$plugin = new Plugin( 'https://example.test/plugin/', '/var/www/plugin/' );
		$html   = '<ul class="wp-block-list"><li>Item</li></ul>';
		$block  = [
			'attrs' => [
				'icon' => [
					'name' => 'Star',
					'src'  => '<svg viewBox="0 0 24 24"></svg>',
				],
			],
		];

		$result = $plugin->renderBlockList( $html, $block );

		$this->assertStringContainsString( 'has-icon-placement__outside', $result );
		$this->assertStringNotContainsString( 'has-icon-placement__inside', $result );
	}
}
