import { useEffect, useState } from "react";
import Card from "./Card";
import { Link, useSearch } from "wouter";

const PageButtons = ({ currentPage, lastPage, PageLink, PageStub }) => {
	const pages = [...Array(lastPage).keys()].map((x) => x + 1);

	const PageArrow = ({ page, title }) => (
		<PageLink href={`?page=${page}`} title={title} />
	);

	const PageButton = ({ page }) => (
		<PageLink
			innerClass={page == currentPage ? "activa_nav red_border" : ""}
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
};

const Filter = ({ name, variants, onChange }) => {
	const key = Math.round(Math.random() * 1e10);
	const header = `panelsStayOpen-heading-${key}`;
	const body = `panelsStayOpen-collapse-${key}`;
	return (
		<div style={{ flexDirection: "column" }} className="accordion-item ">
			<h2 className="accordion-header" id={header}>
				<button
					className="btn btn-secondary dropdown-toggle collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${body}`}
					aria-expanded="true"
					aria-controls={body}
				>
					{name}
				</button>
			</h2>
			<div
				style={{ backgroundColor: "#00000000" }}
				id={body}
				className="accordion-collapse collapse"
				aria-labelledby={header}
			>
				<ul className="dropdown-menu2">
					{variants.map((x, i) => (
						<li key={x}>
							<label htmlFor={`checkbox_${key}_${i}`}>{x}</label>
							<div className="checkbox-wrapper">
								<input
									onChange={(e) => onChange(x, e.target.checked)}
									type="checkbox"
									id={`checkbox_${key}_${i}`}
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function Category({ api, params: { category } }) {
	const page = +new URLSearchParams(useSearch()).get("page") || 1;
	const [
		{ categoryName = "", products = [], parameters = [], lastPage = 1 },
		setContent,
	] = useState({});
	const [filters, setFilters] = useState({});

	useEffect(() => {
		(async () => {
			const entity = await (await api.categories()).withId(category);
			const pages = await (await entity.products(6)).filtered(filters);
			setContent({
				categoryName: await entity.name(),
				products: await Promise.all(
					(await (await pages.page(page - 1)).array()).map(async (x) => ({
						id: await x.id(),
						name: await x.name(),
						icon: await x.icon(),
						brand_icon: await (await x.brand()).icon(),
					})),
				),
				parameters: await entity.parameters(),
				lastPage: Math.max(1, await pages.totalPages()),
			});
		})();
	}, [page, filters]);

	const PageLink = ({ innerClass, href, title }) => (
		<Link to={href}>
			<p className={innerClass}>{title}</p>
		</Link>
	);

	const PageStub = ({ title }) => <p>{title}</p>;

	return (
		<main>
			<div
				style={{
					backgroundImage:
						'url("/img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")',
				}}
				className="header_main"
			>
				<div className="header_main_bg" />
				<div className="header_main_flex">
					<h1>Каталог</h1>
					<h1>/</h1>
					<h1>{categoryName}</h1>
				</div>
			</div>
			<div className="filterkotalog">
				<div className="filterkotalog_flex">
					<div className="filterkotalog_filter">
						<div className="filterkotalog_filter_title">
							<h2>Фильтр</h2>
							<img src="/img/filter.svg" alt="" />
						</div>
						<div
							className="accordion filterkotalog_filter_title"
							id="accordionPanelsStayOpenExample"
						>
							{parameters.map(([name, variants]) => (
								<Filter
									name={name}
									variants={variants}
									onChange={(variant, checked) => {
										const oldVariants = filters[name] || [];
										const variants = checked
											? [...oldVariants, variant]
											: oldVariants.filter((x) => x !== variant);
										setFilters({ ...filters, [name]: variants });
									}}
								/>
							))}
						</div>
						<div className="filterkotalog_filter_btn">
							<button onClick={() => window.filtercl()}>Закрыть</button>
							<button onClick={() => window.filtercl()}>Применить</button>
						</div>
					</div>
					<div className="filterkotalog_button_fiter">
						<button onClick={() => window.filterop()}>Фильтр</button>
					</div>
					<div className="filterkotalog_cards">
						{products.map((x) => (
							<Card
								key={x.id}
								title={x.name}
								image={x.icon}
								brandImage={x.brand_icon}
								page={`/product/${x.id}`}
							/>
						))}
						<div className="filterkotalog_cards_nav">
							<div className="filterkotalog_cards_nav_flex">
								<PageButtons
									currentPage={page}
									lastPage={lastPage}
									PageLink={PageLink}
									PageStub={PageStub}
								/>
							</div>
							<div className="filterkotalog_cards_nav_btn">
								<a href="">Назад</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
