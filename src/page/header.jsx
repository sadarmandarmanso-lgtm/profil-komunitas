import React from 'react';
import Logo from "../komunitas/logo.png"
import Lottie from "lottie-react";
import halloAnimation from "../animasi/hallo.json";
import cinematicVideo from "../animasi/cinematic.mp4";
import { Box, Container, Typography, Avatar } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        position: 'relative',
        py: 10, 
        overflow: 'hidden',
        minHeight: isMobile ? '350px' : '250px'
      }}
    >
      {/* VIDEO SAJA di sisi HIJAU - RESPONSIVE CLIPPATH */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: isMobile ? '70%' : '100%',
          clipPath: isMobile 
            ? 'polygon(0 0, 100% 0, 100% 92%, 75% 100%, 50% 92%, 25% 100%, 0 92%)'
            : 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src={cinematicVideo} type="video/mp4" />
        </video>
      </Box>

      {/* Triangle putih HANYA desktop */}
      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            zIndex: 3
          }}
        />
      )}
      
      {/* Lottie animation - TANPA SHADOW */}
      <Box
        sx={{
          position: 'absolute',
          top: isMobile ? '65%' : '10%',
          left: isMobile ? '50%' : '8%',
          transform: isMobile ? 'translateX(-50%)' : 'none',
          width: isMobile ? 260 : 320,
          height: isMobile ? 180 : 240,
          zIndex: 5
        }}
      >
        <Lottie 
          animationData={halloAnimation}
          autoplay={true}
          loop={false}
          style={{ 
            width: '100%', 
            height: '100%', 
            transform: isMobile ? 'rotate(0deg)' : 'rotate(-35deg)'
          }}
        />
      </Box>
      
      <Container sx={{ 
        position: 'relative', 
        zIndex: 6, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: isMobile ? 'center' : 'flex-end',
        height: '100%', 
        gap: isMobile ? 2 : 3 
      }}>
        <Box sx={{ 
          textAlign: isMobile ? 'center' : 'right',
          flex: isMobile ? 'none' : 1,
          maxWidth: isMobile ? '90%' : 'auto'
        }}>
          {isMobile && (
            <Avatar
              src={Logo}
              sx={{ 
                width: 60, 
                height: 60,
                mx: 'auto',
                mb: 2,
                border: '3px solid rgba(255,255,255,0.8)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
              }}
            />
          )}
          
          <Typography 
            variant={isMobile ? "h4" : "h3"}
            fontWeight={900} 
            sx={{ 
              color: 'white', 
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
              letterSpacing: '1px'
            }}
          >
            FAITH FAGOHISA
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.95)', 
              fontWeight: 500,
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            Komunitas Anak Muda
          </Typography>
        </Box>
        
        {!isMobile && (
          <Avatar
            src={Logo}
            sx={{ 
              width: 80, 
              height: 80,
              border: '3px solid rgba(255,255,255,0.8)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)'
            }}
          />
        )}
      </Container>
    </Box>
  );
}
