import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider
} from '@mui/material';
import {
  Instagram,
  Twitter,
  Facebook,
  Email,
  LocationOn
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f172a', color: 'white', mt: 10 }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={800} gutterBottom>
              FAITH FAGOHISA
            </Typography>
            <Typography color="gray" fontSize={15}>
              Komunitas kolaboratif Indonesia yang berfokus pada berbagi ilmu,
              koneksi, dan pertumbuhan bersama.
            </Typography>

            <Stack direction="row" spacing={1} mt={2}>
              <IconButton color="inherit"><Instagram /></IconButton>
              <IconButton color="inherit"><Twitter /></IconButton>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><Email /></IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Menu
            </Typography>
            <Stack spacing={1} color="gray">
              <Typography>Beranda</Typography>
              <Typography>Komunitas</Typography>
              <Typography>Kegiatan</Typography>
              <Typography>Event</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Kontak
            </Typography>
            <Stack spacing={1} color="gray">
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" />
                <Typography>admin@FAITHFAGOHISA.id</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn fontSize="small" />
                <Typography>Indonesia</Typography>
              </Stack>
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: '#334155' }} />

        <Typography
          textAlign="center"
          fontSize={14}
          color="gray"
        >
          © {new Date().getFullYear()} FAITH FAGOHISA. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
