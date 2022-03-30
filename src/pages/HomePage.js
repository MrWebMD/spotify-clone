import NavBar from "../components/layout/Navigation/NavBar";
import styled from "styled-components";
import Page from "../components/layout/Page";
import bannerAdImage from "../assets/images/bannerAd2.png";
import BannerAd from "../components/ui/BannerAd";
import Card from "../components/ui/Card";
import ArtistSlip from "../components/ui/ArtistSlip";
import InfoCard from "../components/ui/InfoCard";

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HomePage = () => {
  return (
    <>
      <NavBar>
        <p>Spotify but made by a stickbugging machine</p>
      </NavBar>
      <Page >
        <header>
          <BannerAd src={bannerAdImage} responsive contentBlock />
        </header>
        <section>
          <h1>Good evening</h1>
          <CardRow>
            <ArtistSlip />
            <ArtistSlip />
            <ArtistSlip />
          </CardRow>
        </section>
        <section>
          <h2>Episodes for you</h2>
          <CardRow>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </CardRow>
        </section>
        <section>
          <h2>Mood</h2>
          <CardRow>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </CardRow>
        </section>
        <section>
          <h2>Recently played</h2>
          <CardRow>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </CardRow>
        </section>
      </Page>
    </>
  );
};

export default HomePage;
