import { addFilter } from '@wordpress/hooks';

import { addListIconAttributes } from './attributes';
import { Edit } from './edit';
import { BlockList } from './blockList';

addFilter(
	'blocks.registerBlockType',
	'enable-list-icons/add-attributes',
	addListIconAttributes
);

addFilter(
	'editor.BlockEdit',
	'enable-list-icons/add-inspector-controls',
	Edit
);

addFilter(
	'editor.BlockListBlock',
	'enable-list-icons/add-classes',
	BlockList
);
