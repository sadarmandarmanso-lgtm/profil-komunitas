import React from 'react';
import Logo2 from "../komunitas/komunitas3.jpeg";
import { Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

export default function Komunitas() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ py: 10 }}>
      
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h4" 
          fontWeight={800} 
          sx={{ 
            color: '#10b981',
            mb: 4
          }}
        >
          Tentang Komunitas
        </Typography>
        
        <Box
          sx={{
            width: isMobile ? '100%' : '80%',  
            maxWidth: isMobile ? 'none' : 600,  
            height: isMobile ? 200 : 350,
            borderRadius: isMobile ? 2 : 3,
            overflow: 'hidden',
            mx: 'auto',
            border: isMobile ? '3px solid #10b981' : 'none',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-10px) scale(1.02)',
              borderColor: isMobile ? '#059669' : 'transparent'
            },
            '&:active': {
              transform: 'translateY(-5px) scale(1.01)'
            }
          }}
        >
          <img
            src={Logo2}
            alt="Tentang Komunitas"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',  
              display: 'block',
              transition: 'transform 0.4s ease'
            }}
          />
        </Box>
      </Box>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography 
          color="text.secondary" 
          fontSize={18}
          lineHeight={1.7}
          sx={{ mb: 3 }}
        >
          Komunitas Faith Fagohisa merupakan wadah bagi anak-anak muda yang sedang berjalan dalam pengharapan dan iman, serta memiliki kerinduan untuk menjadi pribadi yang membawa impartasi kehidupan bagi lingkungan sekitarnya maupun bagi Indonesia tanpa memandang suku, budaya, maupun latar belakang.
        </Typography>
        
        <Typography 
          color="text.secondary" 
          fontSize={18}
          lineHeight={1.7}
          sx={{ mb: 3 }}
        >
          Komunitas ini lahir dari kesadaran bahwa generasi muda memiliki peran besar dalam membangun masa depan bangsa. Oleh karena itu, Faith Fagohisa hadir untuk menjadi tempat saling menguatkan, menginspirasi, dan menumbuhkan semangat menjadi pribadi yang bermanfaat bagi bangsa dan negara.
        </Typography>
        
        <Typography 
          color="text.secondary" 
          fontSize={18}
          lineHeight={1.7}
        >
          Komunitas Faith Fagohisa resmi terbentuk pada tanggal 20 Oktober 2013, hari Minggu pukul 23.00, lahir dari semangat dan tekad sekelompok anak muda yang ingin menjadi pribadi unggul, berkarakter, dan berdampak positif bagi masa depan. Sejak saat itu, kami terus melangkah bersama, bertumbuh, dan melayani dengan hati untuk membangun generasi muda yang tangguh dan penuh harapan.
        </Typography>
      </Box>
    </Container>
  );
}
