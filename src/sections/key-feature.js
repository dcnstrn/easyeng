/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Англійська для роботи",
    text: "Опануєш ділову лексику, зможеш читати англомовні джерела та легко порозумієшся з іноземними колегами",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Partnership deal",
    title: "Розмовний курс",
    text: "Мінімум теорії, максимум практики та a bunch of topics на будь-який випадок. Все це допоможе швидко подолати мовний бар’єр",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Pro Subscription",
    title: "Англійська для початківців",
    text: "База-основа-фундамент, щоб опанувати базову граматику та підтримувати прості побутові розмови",
  },
  {
    id: 4,
    imgSrc: Support,
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
