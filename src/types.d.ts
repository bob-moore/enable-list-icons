export type IconValue = {
	name: string | null;
	iconSet: string | null;
	label: string | null;
	src: string | null;
} | null;

export type IconEntry = {
	name: string;
	label: string;
	source: string;
};

export type IconFamily = {
	label: string;
	url: string;
};

export type EnableListIconsSettings = {
	iconFamilies?: Record< string, IconFamily >;
};

export type ListAttributes = {
	icon: IconValue;
	iconSize: string;
	iconGap: string;
	iconOutside: boolean;
	iconVerticalOffset: string;
	iconColor: string;
	className?: string;
};

export type BlockEditProps< T = {} > = {
	attributes: T;
	setAttributes: ( attrs: Partial< T > ) => void;
	clientId: string;
	isSelected: boolean;
	context: Record< string, any >;
	name: string;
};

export type BlockTypeObject = {
	name: string;
};

export type WrapperProps = {
	style?: { [ key: string ]: any };
	className?: string;
};

export type BlockListProps = BlockTypeObject & {
	attributes: ListAttributes;
	wrapperProps?: WrapperProps;
	className?: string;
};

declare global {
	interface Window {
		enableListIcons?: EnableListIconsSettings;
	}
}
