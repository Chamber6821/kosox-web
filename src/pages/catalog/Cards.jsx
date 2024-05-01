import { useState, useEffect } from "react";
import Card from "./Card";

export default function Cards({ api, superCategory = undefined }) {
	const [{ categories = [] }, setContent] = useState({});
	useEffect(() => {
		(async () => {
			const superCategories = await api.superCategories();
			const scEntity = await superCategories.withId(superCategory);
			const categories = superCategory
				? await scEntity.categories()
				: superCategories;
			setContent({
				categories: await Promise.all(
					(await categories.array()).map(async (x) => ({
						id: await x.id(),
						name: await x.name(),
						icon: await x.icon(),
					})),
				),
			});
		})();
	}, [api, superCategory]);
	return (
		<div className="kotalog">
			<div className="kotalog_flex">
				{categories.map((x) => (
					<Card
						key={x.id}
						id={x.id}
						title={x.name}
						backgroundImage={x.icon}
						page={superCategory ? `/category/${x.id}` : `/catalog/${x.id}`}
					/>
				))}
			</div>
		</div>
	);
}
