/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Briefcase from "assets/key-feature/briefcase.png";
import Chick from "assets/key-feature/chick.png";
import Headphone from "assets/key-feature/headphone.png";
import Technologist from "assets/key-feature/technologist.png";

const data = [
  {
    id: 1,
    imgSrc: Briefcase,
    altText: "Fast Performance",
    title: "Англійська для роботи",
    text: "Опануєш ділову лексику, зможеш читати англомовні джерела та легко порозумієшся з іноземними колегами",
  },
  {
    id: 2,
    imgSrc: Headphone,
    altText: "Partnership deal",
    title: "Розмовний курс",
    text: "Мінімум теорії, максимум практики та a bunch of topics на будь-який випадок. Все це допоможе швидко подолати мовний бар’єр",
  },
  {
    id: 3,
    imgSrc: Chick,
    altText: "Pro Subscription",
    title: "Англійська для початківців",
    text: "База-основа-фундамент, щоб опанувати базову граматику та підтримувати прості побутові розмови",
  },
  {
    id: 4,
    imgSrc: Technologist,
    altText: "Customer Support",
    title: "Англійська для іспитів",
    text: "НМТ, ЄВІ, IELTS, TOEFL та ін. Комплексно прокачаєш ключові навички для іспитів: написання ессе, граматика, спікінг і аудіювання",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Що ми пропонуємо"
          title="Курси для будь-якої цілі та рівня"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
