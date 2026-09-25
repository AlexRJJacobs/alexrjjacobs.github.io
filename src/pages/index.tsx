import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Builds from '../components/Sections/Builds';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import Sliders from '../components/Sections/Slider';
import {homePageMeta} from '../data/data';

const Home: FC = memo(() => {
  return (
    <Page {...homePageMeta}>
      <Header />
      <main>
        <Hero />
        <About />
        <Sliders />
        <Resume />
        <Builds />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
});

export default Home;
