import ArticleCard from "./ArticleCard";
import Styles from "./Articles.module.css";

const Articles = () => {
	return (
		<>
			<section className={Styles.articlesSection} id="articles">
				<div className={Styles.container}>
					<div className={Styles.title}>
						<h2>LATEST ARTICLES</h2>
						<hr className="titleLine" />
					</div>
					<ArticleCard />
				</div>
			</section>
		</>
	);
};

export default Articles;
