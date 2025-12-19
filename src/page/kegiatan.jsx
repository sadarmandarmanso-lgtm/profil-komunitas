import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import kegiatan1 from '../komunitas/kegiatan1.jpeg';
import kegiatan2 from '../komunitas/kegiatan2.jpeg';
import kegiatan3 from '../komunitas/kegiatan3.jpeg';
import kegiatan4 from '../komunitas/kegiatan4.jpeg';
import kegiatan5 from '../komunitas/kegiatan5.jpeg';
import komunitas1 from '../komunitas/komunitas1.jpeg';
import komunitas2 from '../komunitas/komunitas2.jpeg';

export default function Kegiatan() {
  return (
    <Container sx={{ py: 10, maxWidth: 'lg !important' }}>
      
      <Typography
        variant="h4"
        fontWeight={800}
        gutterBottom
        sx={{
          color: '#10b981',
          textAlign: 'center',
          mb: 8,
        }}
      >
        Kegiatan Komunitas
      </Typography>

      <Grid
        container
        mb={6}
        spacing={3}
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        {[kegiatan1, kegiatan2, kegiatan3].map((img, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              sx={{
                height: 420,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Kegiatan ${index + 1}`}
                sx={{
                  height: 240,
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
              <CardContent
                sx={{
                  p: 3,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={1}
                  sx={{ color: '#10b981' }}
                >
                  {index === 0 && 'Value'}
                  {index === 1 && 'Share to Care'}
                  {index === 2 && 'Activity'}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ mt: 'auto' }}
                >
                  {index === 0 &&
                    'Sesi berbagi nilai-nilai inti komunitas untuk memperkuat fondasi spiritual dan karakter anggota.'}
                  {index === 1 &&
                    'Kegiatan berbagi pengalaman hidup antar anggota untuk saling peduli dan mempererat persaudaraan.'}
                  {index === 2 &&
                    'Kegiatan rutin bersama seluruh anggota untuk membangun kebersamaan dan semangat gotong royong.'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
    gap: 4,
    mb: 6,
  }}
>
  <Card
    sx={{
      height: '100%',              
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={kegiatan4}
      alt="Activity"
      sx={{
        height: 250,
        objectFit: 'cover',
      }}
    />

    <CardContent
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: '#10b981', mb: 1 }}
      >
        Activity
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        Retreat dan refleksi spiritual tahunan bersama komunitas untuk
        memperdalam pemahaman rohani.
      </Typography>
    </CardContent>
  </Card>

  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={kegiatan5}
      alt="Train Yourself"
      sx={{
        height: 250,
        objectFit: 'cover',
      }}
    />

    <CardContent
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: '#10b981', mb: 1 }}
      >
        Train Yourself
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        Pelatihan pengembangan diri dan kepemimpinan bagi anggota komunitas
        agar lebih siap melayani.
      </Typography>
    </CardContent>
  </Card>
</Box>


      <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // 2 kolom desktop
    gap: 4,
    alignItems: 'stretch',
  }}
>
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={komunitas1}
      alt="Teaching"
      sx={{
        height: 250,
        objectFit: 'cover',
      }}
    />

    <CardContent
      sx={{
        p: 3,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: '#10b981', mb: 1 }}
      >
        Teaching
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        Sesi pengajaran dan pembelajaran bersama seluruh anggota untuk
        pertumbuhan rohani komunitas.
      </Typography>
    </CardContent>
  </Card>

  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={komunitas2}
      alt="Teaching"
      sx={{
        height: 250,
        objectFit: 'cover',
      }}
    />

    <CardContent
      sx={{
        p: 3,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: '#10b981', mb: 1 }}
      >
        Teaching
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        Kelas pengajaran lanjutan yang memperkuat persaudaraan dan
        pengetahuan bersama anggota.
      </Typography>
    </CardContent>
  </Card>
</Box>

    </Container>
  );
}
