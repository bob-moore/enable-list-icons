<?php
/**
 * WordPress mock functions and classes.
 *
 * @package Bmd\Tests
 */

$GLOBALS['__wp_mock_actions'] = [];
$GLOBALS['__wp_mock_filters'] = [];

if ( ! function_exists( 'add_action' ) ) {
	function add_action( $hook, $callback, $priority = 10, $accepted_args = 1 ) {
		$GLOBALS['__wp_mock_actions'][] = [ $hook, $callback, $priority, $accepted_args ];

		return true;
	}
}

if ( ! function_exists( 'add_filter' ) ) {
	function add_filter( $hook, $callback, $priority = 10, $accepted_args = 1 ) {
		$GLOBALS['__wp_mock_filters'][] = [ $hook, $callback, $priority, $accepted_args ];

		return true;
	}
}

if ( ! function_exists( 'apply_filters' ) ) {
	function apply_filters( $hook, $value ) {
		return $value;
	}
}

if ( ! function_exists( 'esc_url_raw' ) ) {
	function esc_url_raw( $url ) {
		return (string) $url;
	}
}

if ( ! function_exists( 'sanitize_html_class' ) ) {
	function sanitize_html_class( $class ) {
		$class = strtolower( (string) $class );
		$class = preg_replace( '/[^a-z0-9_-]+/', '-', $class );

		return trim( (string) $class, '-' );
	}
}

if ( ! function_exists( 'sanitize_text_field' ) ) {
	function sanitize_text_field( $str ) {
		return trim( preg_replace( '/\s+/', ' ', (string) $str ) );
	}
}

if ( ! function_exists( 'sanitize_key' ) ) {
	function sanitize_key( $key ) {
		return strtolower( preg_replace( '/[^a-z0-9_\-]/', '', (string) $key ) );
	}
}

if ( ! function_exists( '__' ) ) {
	function __( $text, $domain = 'default' ) {
		return (string) $text;
	}
}

if ( ! function_exists( 'wp_kses' ) ) {
	function wp_kses( $string, $allowed_html = [] ) {
		return (string) $string;
	}
}

if ( ! function_exists( 'esc_html' ) ) {
	function esc_html( $text ) {
		return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
	}
}

if ( ! function_exists( 'trailingslashit' ) ) {
	function trailingslashit( $string ) {
		return untrailingslashit( $string ) . '/';
	}
}

if ( ! function_exists( 'untrailingslashit' ) ) {
	function untrailingslashit( $value ) {
		return rtrim( (string) $value, '/\\' );
	}
}

if ( ! function_exists( 'plugin_dir_url' ) ) {
	function plugin_dir_url( $file = '' ) {
		return 'https://example.test/' . basename( dirname( (string) $file ) ) . '/';
	}
}

if ( ! function_exists( 'plugin_dir_path' ) ) {
	function plugin_dir_path( $file = '' ) {
		return trailingslashit( dirname( (string) $file ) );
	}
}

if ( ! function_exists( 'wp_normalize_path' ) ) {
	function wp_normalize_path( $path ) {
		return str_replace( '\\', '/', (string) $path );
	}
}

if ( ! function_exists( 'sanitize_title' ) ) {
	function sanitize_title( $title ) {
		$title = strtolower( (string) $title );
		$title = preg_replace( '/[^a-z0-9]+/', '-', $title );

		return trim( (string) $title, '-' );
	}
}

if ( ! class_exists( 'WP_Block_Type_Registry' ) ) {
	class WP_Block_Type_Registry {
		private static ?WP_Block_Type_Registry $instance = null;

		public static function get_instance(): WP_Block_Type_Registry {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

if ( ! class_exists( 'WP_REST_Request' ) ) {
	class WP_REST_Request {}
}

if ( ! class_exists( 'WP_REST_Response' ) ) {
	class WP_REST_Response {
		/**
		 * @var mixed
		 */
		private $data;

		private int $status;

		/**
		 * @param mixed $data   Response data.
		 * @param int   $status Response status.
		 */
		public function __construct( $data = null, int $status = 200 ) {
			$this->data   = $data;
			$this->status = $status;
		}

		/**
		 * @return mixed
		 */
		public function get_data() {
			return $this->data;
		}

		public function get_status(): int {
			return $this->status;
		}
	}
}

if ( ! class_exists( 'WP_HTML_Tag_Processor' ) ) {
	class WP_HTML_Tag_Processor {
		private string $html;
		private string $current_tag_name = '';

		public function __construct( string $html ) {
			$this->html = $html;
		}

		/**
		 * @param array<string, string> $query Query arguments.
		 */
		public function next_tag( array $query = [] ): bool {
			$tag = strtolower( $query['tag_name'] ?? '' );

			if ( '' !== $tag ) {
				if ( ! preg_match( '/<' . preg_quote( $tag, '/' ) . '\b[^>]*>/i', $this->html ) ) {
					return false;
				}

				$this->current_tag_name = $tag;

				return true;
			}

			if ( preg_match( '/<([a-z0-9:_-]+)\b[^>]*>/i', $this->html, $matches ) ) {
				$this->current_tag_name = strtolower( $matches[1] );

				return true;
			}

			return false;
		}

		public function add_class( string $class_name ): void {
			if ( '' === $this->current_tag_name ) {
				return;
			}

			$tag_name = $this->current_tag_name;

			$this->replace_first_opening_tag(
				$tag_name,
				static function ( string $tag_html ) use ( $class_name ): string {
					if ( preg_match( '/\bclass\s*=\s*"([^"]*)"/i', $tag_html, $matches ) ) {
						$classes = trim( $matches[1] );
						$updated = trim( $classes . ' ' . $class_name );

						return preg_replace( '/\bclass\s*=\s*"[^"]*"/i', 'class="' . $updated . '"', $tag_html, 1 ) ?: $tag_html;
					}

					return preg_replace( '/^(<[^\s>]+)/', '$1 class="' . $class_name . '"', $tag_html, 1 ) ?: $tag_html;
				}
			);
		}

		/**
		 * @return string|false
		 */
		public function get_attribute( string $attribute_name ) {
			if ( '' === $this->current_tag_name ) {
				return false;
			}

			$tag_html = $this->get_first_opening_tag( $this->current_tag_name );

			if ( null === $tag_html ) {
				return false;
			}

			if ( ! preg_match( '/\b' . preg_quote( $attribute_name, '/' ) . '\s*=\s*"([^"]*)"/i', $tag_html, $matches ) ) {
				return false;
			}

			return $matches[1];
		}

		public function set_attribute( string $attribute_name, string $value ): void {
			if ( '' === $this->current_tag_name ) {
				return;
			}

			$this->replace_first_opening_tag(
				$this->current_tag_name,
				static function ( string $tag_html ) use ( $attribute_name, $value ): string {
					if ( preg_match( '/\b' . preg_quote( $attribute_name, '/' ) . '\s*=\s*"[^"]*"/i', $tag_html ) ) {
						return preg_replace( '/\b' . preg_quote( $attribute_name, '/' ) . '\s*=\s*"[^"]*"/i', $attribute_name . '="' . $value . '"', $tag_html, 1 ) ?: $tag_html;
					}

					return preg_replace( '/>$/', ' ' . $attribute_name . '="' . $value . '">', $tag_html, 1 ) ?: $tag_html;
				}
			);
		}

		public function get_updated_html(): string {
			return $this->html;
		}

		private function get_first_opening_tag( string $tag_name ): ?string {
			if ( ! preg_match( '/<' . preg_quote( $tag_name, '/' ) . '\b[^>]*>/i', $this->html, $matches ) ) {
				return null;
			}

			return $matches[0];
		}

		/**
		 * @param callable(string): string $callback Callback to mutate opening tag HTML.
		 */
		private function replace_first_opening_tag( string $tag_name, callable $callback ): void {
			$this->html = preg_replace_callback(
				'/<' . preg_quote( $tag_name, '/' ) . '\b[^>]*>/i',
				static function ( array $matches ) use ( $callback ): string {
					return $callback( $matches[0] );
				},
				$this->html,
				1
			) ?: $this->html;
		}
	}
}
