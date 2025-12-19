import React from 'react';
import { Container, Typography, Card, CardMedia, Box } from '@mui/material';
import event1 from '../komunitas/event1.jpeg';
import event2 from '../komunitas/event2.jpeg';
import event3 from '../komunitas/event3.jpeg';
import event4 from '../komunitas/event4.jpeg';
import event5 from '../komunitas/event5.jpeg';
import event6 from '../komunitas/event6.jpeg';
import event7 from '../komunitas/event7.jpeg';

export default function EventSection() {
  return (
    <Container sx={{ py: 10 }}>
      {/* JUDUL HIJAU */}
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
        Event Komunitas
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 2, md: 4 },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}>
          <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 32px)' } }}>
            <Card sx={{ 
              height: 400,
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
              }
            }}>
              <CardMedia
                component="img"
                image={event1}
                alt="Event 1"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 32px)' } }}>
            <Card sx={{ 
              height: 400,
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
              }
            }}>
              <CardMedia
                component="img"
                image={event2}
                alt="Event 2"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'calc(33.333% - 32px)' } }}>
            <Card sx={{ 
              height: 400,
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
              }
            }}>
              <CardMedia
                component="img"
                image={event3}
                alt="Event 3"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 2, md: 4 },
          justifyContent: 'center'
        }}>
          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 24px)' } }}>
            <Card sx={{ 
              height: 400,
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
              }
            }}>
              <CardMedia
                component="img"
                image={event4}
                alt="Event 4"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 24px)' } }}>
            <Card sx={{ 
              height: 400,
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
              }
            }}>
              <CardMedia
                component="img"
                image={event5}
                alt="Event 5"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: { xs: 2, md: 4 },
        justifyContent: 'center'
      }}>
        <Box sx={{ width: { xs: '100%', md: 'calc(50% - 24px)' } }}>
          <Card sx={{ 
            height: 400,
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
            }
          }}>
            <CardMedia
              component="img"
              image={event6}
              alt="Event 6"
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </Card>
        </Box>

        <Box sx={{ width: { xs: '100%', md: 'calc(50% - 24px)' } }}>
          <Card sx={{ 
            height: 400,
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(16,185,129,0.2)',
            }
          }}>
            <CardMedia
              component="img"
              image={event7}
              alt="Event 7"
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
