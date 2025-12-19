import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import strukturImage from '../komunitas/struktur.png';
import penasehatImage from '../komunitas/penasehat.png';
import pembinaImage from '../komunitas/pembina.png';
import ketuaImage from '../komunitas/ketua.png';

export default function Struktur() {
  return (
    <Container sx={{ py: 10 }}>
    
      <Typography 
        variant="h4" 
        fontWeight={800} 
        gutterBottom
        sx={{ 
          color: '#10b981',
          textAlign: 'center',
          mb: 8
        }}
      >
        Struktur Komunitas
      </Typography>

      
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Box
          component="img"
          src={strukturImage}
          alt="Struktur Komunitas"
          sx={{
            width: '100%',
            maxWidth: 800,
            height: 'auto',
            mx: 'auto',
            borderRadius: 3,
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '8px solid white',
            display: 'block'
          }}
        />
      </Box>

      
      <Grid container spacing={{ xs: 6, sm: 4 }} justifyContent="center">
       
        <Grid item xs={12} sm={4}>
          <Card sx={{ 
            height: '100%',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-12px) scale(1.02)',
              boxShadow: '0 25px 50px rgba(16,185,129,0.3)',
              border: '2px solid #10b981'
            }
          }}>
            <CardMedia
              component="img"
              image={penasehatImage}
              alt="Mikasoni Laia"
              sx={{
                height: 300,
                width: '100%',
                objectFit: 'cover'
              }}
            />
            <CardContent sx={{ 
              p: { xs: 3, sm: 4 }, 
              textAlign: 'center',
              pt: 0
            }}>
              <Typography variant="h6" fontWeight={800} mb={1} sx={{ color: '#10b981' }}>
                Mikasoni Laia
              </Typography>
              <Typography variant="body1" color="text.secondary" fontWeight={600}>
                Penasehat
              </Typography>
            </CardContent>
          </Card>
        </Grid>

       
        <Grid item xs={12} sm={4} sx={{ mt: { xs: 3, sm: 0 } }}>
          <Card sx={{ 
            height: '100%',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-12px) scale(1.02)',
              boxShadow: '0 25px 50px rgba(16,185,129,0.3)',
              border: '2px solid #10b981'
            }
          }}>
            <CardMedia
              component="img"
              image={pembinaImage}
              alt="Fanotona Giawa.S.T"
              sx={{
                height: 300,
                width: '100%',
                objectFit: 'cover'
              }}
            />
            <CardContent sx={{ 
              p: { xs: 3, sm: 4 }, 
              textAlign: 'center',
              pt: 0
            }}>
              <Typography variant="h6" fontWeight={800} mb={1} sx={{ color: '#10b981' }}>
                Fanotona Giawa.S.T
              </Typography>
              <Typography variant="body1" color="text.secondary" fontWeight={600}>
                Pembina
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ mt: { xs: 6, sm: 0 } }}>
          <Card sx={{ 
            height: '100%',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-12px) scale(1.02)',
              boxShadow: '0 25px 50px rgba(16,185,129,0.3)',
              border: '2px solid #10b981'
            }
          }}>
            <CardMedia
              component="img"
              image={ketuaImage}
              alt="Argentik Laia.Amd.Ab"
              sx={{
                height: 300,
                width: '100%',
                objectFit: 'cover'
              }}
            />
            <CardContent sx={{ 
              p: { xs: 3, sm: 4 }, 
              textAlign: 'center',
              pt: 0
            }}>
              <Typography variant="h6" fontWeight={800} mb={1} sx={{ color: '#10b981' }}>
                Argentik Laia.Amd.Ab
              </Typography>
              <Typography variant="body1" color="text.secondary" fontWeight={600}>
                Ketua
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
