import { Link } from "wouter";

export default function Header() {
	return (
		<header className="header">
			<nav className="navbar">
				<div className="navbar_logo">
					<Link to="/">
						<div className="logo">
							<strong>KOSOX</strong>
						</div>
					</Link>
				</div>
				<div className="navbar_menu">
					<a href="mailto:">zakaz@mgb-bearings.ru</a>
				</div>
				<div className="navbar_icon">
					<Link to="/">
						<img
							src="https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/whatsapp.svg"
							alt=""
						/>
					</Link>
					<Link to="/">
						<img
							src="https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/viber.svg"
							alt=""
						/>
					</Link>
					<Link to="/">
						<img
							src="https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/telegram.svg"
							alt=""
						/>
					</Link>
				</div>
			</nav>
			<nav className="navbar_top">
				<ul className="navbar_top_menu">
					<li className="navbar_top_menu_li">
						<Link to="/">Главная</Link>
					</li>
					<li className="navbar_top_menu_li">
						<Link to="/about">О компании</Link>
					</li>
					<li className="navbar_top_menu_li">
						<Link to="/delivery-and-payment">Доставка и Оплата</Link>
					</li>
					<li className="navbar_top_menu_li">
						<Link to="/manufacturers">Производители</Link>
					</li>
					<li className="navbar_top_menu_li">
						<Link to="/faq">FAQ</Link>
					</li>
					<li className="navbar_top_menu_li">
						<Link to="/contacts">Контакты</Link>
					</li>
				</ul>
			</nav>
			<div className="navbar_phone">
				<div className="navbar_phone_logo">
					<Link to="/">
						<div className="logo">
							<strong>KOSOX</strong>
						</div>
					</Link>
				</div>
				<div className="navbar_phone_menu">
					<i onclick="menuop()" className="bx bx-menu-alt-right" />
				</div>
				<div className="navbar_phone_right_menu">
					<i onclick="menucl()" className="bx bxs-right-arrow-alt" />
					<ul className="navbar_top_menu">
						<li className="navbar_top_menu_li">
							<Link to="/delivery-and-payment">Доставка и оплата</Link>
						</li>
						<li className="navbar_top_menu_li">
							<Link to="/about">О компании</Link>
						</li>
						<li className="navbar_top_menu_li">
							<Link to="/contacts">Контакты</Link>
						</li>
						<li className="navbar_top_menu_li">
							<Link to="/faq">FAQ</Link>
						</li>
						<li className="navbar_top_menu_li">
							<Link to="/">Главная</Link>
						</li>
						<li className="navbar_top_menu_li">
							<Link to="/">Партнерам</Link>
						</li>
					</ul>
					<div className="navbar_phone_right_menu_mail">
						<a href="mailto:">zakaz@mgb-bearings.ru</a>
					</div>
					<div className="navbar_icon">
						<a href="#">
							<img
								src="https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/whatsapp.svg"
								alt=""
							/>
						</a>
						<a href="#">
							<img
								src="https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/viber.svg"
								alt=""
							/>
						</a>
						<a href="#">
							<img
								src="https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/telegram.svg"
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
			<nav className="navbar_down">
				<Link to="/catalog" className="red_border">
					КАТАЛОГ ТОВАРОВ
				</Link>
				<div className="navbar_down_inp">
					<input
						placeholder="Введите наименование"
						onKeyDown={(e) =>
							"Enter" === e.key &&
							(window.location = `https://google.com/search?${new URLSearchParams(
								{
									q: `site:${window.location.host} ${e.target.value}`,
								},
							)}`)
						}
						type="text"
					/>
					<img src="/img/find.svg" alt="" />
				</div>
			</nav>
		</header>
	);
}
