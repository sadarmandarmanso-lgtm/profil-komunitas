import React from 'react';
import { Box } from '@mui/material';
import Header from './header';
import Komunitas from './komunitas';
import Tujuan from './tujuan';
import VisiMisi from './visi-misi';
import Struktur from './struktur';
import Kegiatan from './kegiatan';
import EventSection from './event';
import Footer from './footer';

export default function HomePage() {
  return (
    <Box>
      <Header />
      <Komunitas />
      <Tujuan />
      <VisiMisi />
      <Struktur />
      <Kegiatan />
      <EventSection />
      <Footer />
    </Box>
  );
}
