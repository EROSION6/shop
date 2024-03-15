export interface blockLinksItems {
	icon: JSX.Element
	title: string
	links: string
	href: string
}

export interface NavbarProps {
	search: string
	handleSearch: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

export type InputType = {
	value: string
	onChange: (e: any) => void
	placeholder: string
	type: string
}

export interface linksType {
	href: string
	content: string | JSX.Element
}
