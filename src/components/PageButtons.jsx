export default function PageButtons({
	currentPage,
	lastPage,
	PageLink,
	PageStub,
}) {
	const pages = [...Array(lastPage).keys()].map((x) => x + 1);

	const PageArrow = ({ page, title }) => (
		<PageLink href={`?page=${page}`} title={title} />
	);

	const PageButton = ({ page }) => (
		<PageLink
			innerClass={page === currentPage ? "activa_nav red_border" : ""}
			href={`?page=${page}`}
			title={page}
		/>
	);

	const buttons = (pages) => pages.map((x) => <PageButton key={x} page={x} />);

	const siblings = 2;
	const boundary = 1;
	const center = Math.min(
		Math.max(1 + (siblings + boundary), currentPage),
		lastPage - (siblings + boundary),
	);
	const leftStub =
		currentPage - 1 - (siblings + boundary) <= 1 ? (
			<PageButton key={boundary + 1} page={boundary + 1} />
		) : (
			<PageStub key={boundary + 1} title="..." />
		);
	const rightStub =
		lastPage - currentPage - (siblings + boundary) <= 0 ? (
			<PageButton key={lastPage - boundary} page={lastPage - boundary} />
		) : (
			<PageStub key={lastPage - boundary} title="..." />
		);
	const pageButtons =
		lastPage < 2 * (siblings + boundary + 1)
			? buttons(pages)
			: [
					...buttons(pages.slice(0, boundary)),
					leftStub,
					...buttons(pages.slice(center - siblings, center + siblings - 1)),
					rightStub,
					...buttons(pages.slice(lastPage - boundary, lastPage)),
				];

	return (
		<>
			<PageArrow page={Math.max(1, currentPage - 1)} title="<" />
			{pageButtons}
			<PageArrow page={Math.min(lastPage, currentPage + 1)} title=">" />
		</>
	);
}
