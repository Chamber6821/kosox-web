import Cards from "./catalog/Cards";

export default function Home({ api }) {
	return (
		<main>
			<div
				className="main"
				style={{
					backgroundImage:
						'url("./img/a-close-up-of-a-robot-s-gear_188544-21931 1.png")',
				}}
			>
				<img src="./img/Rectangle1.png" alt="" />
				<div className="main_left">
					<h1>
						Помощь в выборе <br />
						подшипников
					</h1>
					<h3>
						Большой выбор товаров и <br />
						всего остального
					</h3>
					<a href="">КАТАЛОГ ТОВАРОВ</a>
				</div>
			</div>
			<div className="contact_form">
				<div className="contact_form_flex">
					<h2>Оставьте вашу заявку</h2>
					<input placeholder="Имя" type="text" name="name" />
					<input placeholder="Имя" type="text" name="surname" />
					<input placeholder="Имя" type="text" name="phone" />
					<button>Отправить</button>
				</div>
			</div>
			<Cards api={api} />
			<div className="promishlenost">
				<div className="promishlenost_title">
					<h6>Промышленность</h6>
				</div>
				<div className="promishlenost_acc">
					<div className="accordion content" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingOne">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<img src="./img/blackic.svg" alt="" />
									Машиностроение
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<strong>This is the first item's accordion body.</strong> It
									is shown by default, until the collapse plugin adds the
									appropriate classes that we use to style each element. These
									classes control the overall appearance, as well as the showing
									and hiding via CSS transitions. You can modify any of this
									with custom CSS or overriding our default variables. It's also
									worth noting that just about any HTML can go within the
									<code>.accordion-body</code>, though the transition does limit
									overflow.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingTwo">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<img src="./img/blackic.svg" alt="" />
									Машиностроение
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									Самовывоз можно осуществить по адресу: 198099 г.
									Санкт-Петербург, ул. Оборонная, д. 10, литера А, помещение
									306. каб. 24-8. График работы офиса: ПН — ПТ с 9:00 до 18:00
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingThree">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									<img src="./img/blackic.svg" alt="" />
									Машиностроение
								</button>
							</h2>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<strong>This is the third item's accordion body.</strong> It
									is hidden by default, until the collapse plugin adds the
									appropriate classes that we use to style each element. These
									classes control the overall appearance, as well as the showing
									and hiding via CSS transitions. You can modify any of this
									with custom CSS or overriding our default variables. It's also
									worth noting that just about any HTML can go within the
									<code>.accordion-body</code>, though the transition does limit
									overflow.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about_company">
				<div
					className="about_company_card"
					style={{ backgroundImage: 'url("./img/Rectangle 2.png")' }}
				>
					<h6>О компании</h6>
					<h3>
						Наша компания — это не просто поставщик подшипников и комплектующих
						для промышленности, всегда готовый удовлетворить потребности оптовых
						и розничных покупателей.
					</h3>
					<a href="" className="red_border">
						Читать подробнее
					</a>
				</div>
			</div>
			<div className="primushestva_company">
				<div className="main_left">
					<h6>Преимущества компании</h6>
				</div>
				<div className="primushestva_company_cards">
					<div className="primushestva_company_cards_card">
						<div className="primushestva_company_cards_card_img">
							<img src="./img/primushestva.svg" alt="" />
						</div>
						<div className="primushestva_company_cards_card_title">
							<h3>Выгодные цены</h3>
							<h4>Мы всегда стараемся держать цены на минимальном уровне</h4>
						</div>
					</div>
					<div className="primushestva_company_cards_card">
						<div className="primushestva_company_cards_card_img">
							<img src="./img/primushestva.svg" alt="" />
						</div>
						<div className="primushestva_company_cards_card_title">
							<h3>Выгодные цены</h3>
							<h4>Мы всегда стараемся держать цены на минимальном уровне</h4>
						</div>
					</div>
					<div className="primushestva_company_cards_card">
						<div className="primushestva_company_cards_card_img">
							<img src="./img/primushestva.svg" alt="" />
						</div>
						<div className="primushestva_company_cards_card_title">
							<h3>Выгодные цены</h3>
							<h4>Мы всегда стараемся держать цены на минимальном уровне</h4>
						</div>
					</div>
					<div className="primushestva_company_cards_card">
						<div className="primushestva_company_cards_card_img">
							<img src="./img/primushestva.svg" alt="" />
						</div>
						<div className="primushestva_company_cards_card_title">
							<h3>Выгодные цены</h3>
							<h4>Мы всегда стараемся держать цены на минимальном уровне</h4>
						</div>
					</div>
					<div className="primushestva_company_cards_card">
						<div className="primushestva_company_cards_card_img">
							<img src="./img/primushestva.svg" alt="" />
						</div>
						<div className="primushestva_company_cards_card_title">
							<h3>Выгодные цены</h3>
							<h4>Мы всегда стараемся держать цены на минимальном уровне</h4>
						</div>
					</div>
					<div className="primushestva_company_cards_card">
						<div className="primushestva_company_cards_card_img">
							<img src="./img/primushestva.svg" alt="" />
						</div>
						<div className="primushestva_company_cards_card_title">
							<h3>Выгодные цены</h3>
							<h4>Мы всегда стараемся держать цены на минимальном уровне</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="how_weare_working">
				<div className="main_left">
					<h6>Как мы работаем?</h6>
				</div>
				<div className="how_weare_working_cards">
					<div className="how_weare_working_cards_card">
						<div className="how_weare_working_cards_card_num">
							<span>01</span>
						</div>
						<div className="how_weare_working_cards_card_text">
							<h3>Вы заполняете или оставляете заявку</h3>
						</div>
					</div>
					<div className="how_weare_working_cards_card">
						<div className="how_weare_working_cards_card_num">
							<span>01</span>
						</div>
						<div className="how_weare_working_cards_card_text">
							<h3>Вы заполняете или оставляете заявку</h3>
						</div>
					</div>
					<div className="how_weare_working_cards_card">
						<div className="how_weare_working_cards_card_num">
							<span>01</span>
						</div>
						<div className="how_weare_working_cards_card_text">
							<h3>Вы заполняете или оставляете заявку</h3>
						</div>
					</div>
					<div className="how_weare_working_cards_card">
						<div className="how_weare_working_cards_card_num">
							<span>01</span>
						</div>
						<div className="how_weare_working_cards_card_text">
							<h3>Вы заполняете или оставляете заявку</h3>
						</div>
					</div>
				</div>
				<a href="" className="red_border">
					Оставить заявку
				</a>
			</div>
			<div className="reviews">
				<div className="reviews_title">
					<h6>Отзывы</h6>
				</div>
				<div className="reviews_swiper">
					<div className="reviews_swiper_back" />
					<swiper-container
						initial-slide={2}
						className="mySwiper"
						pagination="true"
						pagination-clickable="true"
						slides-per-view={4}
						centered-slides="true"
						space-between={30}
						grab-cursor="true"
					>
						<swiper-slide>
							<img src="/img/sky.svg" alt="" />
							<h3>Александр Борисов</h3>
							<h4>
								Заказывали конические однорядные подшипники, все понравилось.
								Нужна была крупная оптовая партия и в сжатые сроки - все
								доставили вовремя! Сервис понравился, будем обращаться еще.
							</h4>
						</swiper-slide>
						<swiper-slide>
							<img src="/img/sky.svg" alt="" />
							<h3>Александр Борисов</h3>
							<h4>
								Заказывали конические однорядные подшипники, все понравилось.
								Нужна была крупная оптовая партия и в сжатые сроки - все
								доставили вовремя! Сервис понравился, будем обращаться еще.
							</h4>
						</swiper-slide>
						<swiper-slide>
							<img src="/img/sky.svg" alt="" />
							<h3>Александр Борисов</h3>
							<h4>
								Заказывали конические однорядные подшипники, все понравилось.
								Нужна была крупная оптовая партия и в сжатые сроки - все
								доставили вовремя! Сервис понравился, будем обращаться еще.
							</h4>
						</swiper-slide>
						<swiper-slide>
							<img src="/img/sky.svg" alt="" />
							<h3>Александр Борисов</h3>
							<h4>
								Заказывали конические однорядные подшипники, все понравилось.
								Нужна была крупная оптовая партия и в сжатые сроки - все
								доставили вовремя! Сервис понравился, будем обращаться еще.
							</h4>
						</swiper-slide>
						<swiper-slide>
							<img src="/img/sky.svg" alt="" />
							<h3>Александр Борисов</h3>
							<h4>
								Заказывали конические однорядные подшипники, все понравилось.
								Нужна была крупная оптовая партия и в сжатые сроки - все
								доставили вовремя! Сервис понравился, будем обращаться еще.
							</h4>
						</swiper-slide>
					</swiper-container>
				</div>
			</div>
			<div className="map">
				<iframe
					src="https://yandex.by/map-widget/v1/profile?ll=30.352017%2C60.058219&z=16.91"
					width="560"
					height="400"
					frameborder="1"
					allowfullscreen="true"
					style={{ position: "relative" }}
				></iframe>
			</div>
		</main>
	);
}
