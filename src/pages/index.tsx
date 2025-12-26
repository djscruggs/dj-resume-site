import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import ContentArea from '../components/Layout/ContentArea';
import Page from '../components/Layout/Page';
import Sidebar from '../components/Layout/Sidebar';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Introduction from '../components/Sections/Introduction';
import Portfolio from '../components/Sections/Portfolio';
import Rates from '../components/Sections/Rates';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Sidebar />
      <ContentArea>
        <Introduction />
        <About fullWidth />
        <Resume fullWidth />
        <Portfolio fullWidth />
        <Testimonials fullWidth />
        <Rates fullWidth />
        <Contact fullWidth />
        <Footer />
      </ContentArea>
    </Page>
  );
});

export default Home;
