import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  List,
  ListItem
} from '@mui/material';
import visiMisiImage from '../komunitas/visi-misi.jpeg';

export default function VisiMisi() {
  return (
    <Container sx={{ py: { xs: 6, md: 12 } }}>
      <Grid
        container
        spacing={{ xs: 4, md: 2 }}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'stretch', md: 'stretch' }}
        sx={{ width: '100%' }}
      >
        
        <Grid item xs={12} md={4} sx={{ height: { xs: 280, md: 320 } }}>
          <Box
            component="img"
            src={visiMisiImage}
            alt="Visi Misi Faith Fagohisa"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              border: '6px solid white'
            }}
          />
        </Grid>

        
        <Grid item xs={12} md={3} sx={{ height: { xs: 200, md: 320 } }}>
          <Card
            sx={{
              height: '100%',
              maxWidth: { xs: '100%', md: 220 },
              mx: { xs: 'auto', md: 'auto' },
              p: { xs: 2, md: 2 },
              background: 'linear-gradient(to right, white 0%, white 65%, #f8b2cc 65%, #f8b2cc 100%)',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(248, 178, 204, 0.3)',
              borderRight: { xs: '1px solid rgba(248, 178, 204, 0.3)', md: 'none' },
              borderTopRightRadius: { xs: 4, md: 0 },
              borderBottomRightRadius: { xs: 4, md: 0 }
            }}
          >
            <Typography variant="h6" fontWeight={900} mb={1} sx={{ flexShrink: 0 }}>
              Visi
            </Typography>

            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', pr: 3, width: '65%' }}>
              <Typography
                sx={{
                  fontSize: { xs: '0.75rem', md: '0.8rem' },
                  lineHeight: 1.45,
                  display: '-webkit-box',
                  WebkitLineClamp: 8,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                Membangun pondasi hidup berdasarkan iman, kepercayaan,
                serta menjadi pribadi yang membawa dampak positif bagi
                sesama dan lingkungan.
              </Typography>
            </Box>
          </Card>
        </Grid>

        
        <Grid item xs={12} md={5} sx={{ 
          height: { xs: 280, md: 320 },
          mt: { xs: 2, md: 0 }
        }}>
          <Card
            sx={{
              height: '100%',
              p: 2,
              background: 'linear-gradient(to right, #f8b2cc 0%, #f8b2cc 35%, white 35%, white 100%)',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(248, 178, 204, 0.3)',
              borderLeft: { xs: '1px solid rgba(248, 178, 204, 0.3)', md: 'none' },
              borderTopLeftRadius: { xs: 4, md: 0 },
              borderBottomLeftRadius: { xs: 4, md: 0 }
            }}
          >
            <Typography 
              variant="h6" 
              fontWeight={900} 
              mb={1} 
              sx={{ 
                flexShrink: 0,
                textAlign: { xs: 'right', md: 'right' }
              }}
            >
              Misi
            </Typography>

            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', pl: { xs: 2, md: 5 }, justifyContent: 'flex-end' }}>
              <List sx={{ p: 0, width: { xs: '65%', md: '100%' } }}> 
                {[
                  'Membangun karakter sesuai standar nilai rohani.',
                  'Menciptakan kesatuan melalui kebersamaan.',
                  'Membentuk pola hidup yang menghargai diri.',
                  'Mempererat persaudaraan dan kepedulian.'
                ].map((misi, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      px: 0,
                      py: 0.7,
                      borderBottom:
                        index < 3
                          ? '1px solid rgba(248, 178, 204, 0.3)'
                          : 'none',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '0.65rem', md: '0.75rem' },  
                        lineHeight: 1.3,  
                        fontWeight: 300,
                        textAlign: 'right',
                        maxWidth: { xs: '100%', md: '75%' }
                      }}
                    >
                      {misi}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
