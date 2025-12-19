import React, { useEffect, useRef, useCallback, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Paper,
  Divider
} from '@mui/material';

export default function Tujuan() {
  const tujuanList = [
    {
      title: 'Menanamkan Nilai Iman dan Moral yang Kuat',
      desc:
        'Membangun dasar kehidupan generasi muda agar berpegang pada nilai-nilai iman, kasih, dan integritas. Melalui pembinaan rohani, kegiatan kebersamaan, dan keteladanan hidup, generasi muda diajak untuk hidup berkarakter baik, jujur, dan bertanggung jawab.'
    },
    {
      title: 'Membangun Semangat Kepemimpinan dan Tanggung Jawab Sosial',
      desc:
        'Faith Fagohisa berkomitmen menciptakan pemimpin muda yang berjiwa melayani dan memiliki rasa tanggung jawab terhadap lingkungan sekitar. Komunitas ini memberikan ruang bagi anak muda untuk belajar memimpin, berinisiatif, serta bekerja sama dalam kegiatan sosial.'
    },
    {
      title: 'Mengembangkan Bakat, Kreativitas, dan Potensi Generasi Muda',
      desc:
        'Melalui berbagai kegiatan seperti olahraga, seni, pelatihan, dan kompetisi, Faith Fagohisa menjadi wadah bagi generasi muda untuk menyalurkan bakat serta meningkatkan kemampuan diri.'
    },
    {
      title: 'Menanamkan Jiwa Sportivitas dan Kebersamaan',
      desc:
        'Melalui kegiatan seperti Faith Fagohisa Cup dan event kebersamaan lainnya, nilai kerja sama tim, saling menghormati, dan persaudaraan terus ditanamkan.'
    },
    {
      title: 'Membentuk Generasi Visioner dan Mandiri',
      desc:
        'Mendorong generasi muda untuk memiliki pandangan hidup yang jelas, berani bermimpi besar, serta berkomitmen pada pengembangan diri.'
    },
    {
      title: 'Membangun Komunitas yang Solid, Positif, dan Berdampak',
      desc:
        'Faith Fagohisa bertujuan membangun kebersamaan yang erat di antara generasi muda melalui kegiatan yang memperkuat rasa persaudaraan, solidaritas, dan semangat saling mendukung.'
    }
  ];

  const [animatedCards, setAnimatedCards] = useState(new Set());

  const observerCallback = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      const cardIndex = parseInt(entry.target.getAttribute('data-card-index'));
      
      if (entry.isIntersecting && !animatedCards.has(cardIndex)) {
        const ref = entry.target;
        ref.animate(
          [
            {
              transform: cardIndex % 2 === 0 
                ? 'translateX(100px) scale(0.9)'
                : 'translateX(-100px) scale(0.9)',
              opacity: 0
            },
            {
              transform: 'translateX(0) scale(1)',
              opacity: 1
            }
          ],
          {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            delay: cardIndex * 150,
            fill: 'forwards'
          }
        );
        
        setAnimatedCards(prev => new Set(prev).add(cardIndex));
        observer.unobserve(entry.target);
      }
    });
  }, [animatedCards]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    
    const cards = document.querySelectorAll('[data-card-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ color: '#10b981', mb: 3 }}
        >
          Tujuan Komunitas
        </Typography>

        <Typography
          color="text.secondary"
          fontSize={{ xs: 16, md: 20 }}
          lineHeight={1.8}
          maxWidth={800}
          mx="auto"
        >
          Faith Fagohisa hadir sebagai wadah pembinaan, penggerak, dan penginspirasi bagi generasi muda untuk bertumbuh menjadi pribadi yang berkarakter, beriman, serta berdaya guna bagi masyarakat.
        </Typography>
      </Box>

      
      <List sx={{ p: 0 }}>
        {tujuanList.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              py: { xs: 2, md: 3 },
              px: 0,
              justifyContent: 'center'
            }}
          >
            <Paper
              data-card-index={index} 
              elevation={0}
              sx={{
                width: '100%',
                maxWidth: 760,
                mx: 'auto',
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: '1px solid rgba(16,185,129,0.2)',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                opacity: 0,
                transform: 'translateX(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(16,185,129,0.15)',
                  borderColor: '#10b981',
                  transform: 'translateY(-4px) !important'
                }
              }}
            >
              <Typography
                variant="h6"
                fontWeight={800}
                sx={{ 
                  color: '#10b981', 
                  mb: 2,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                {item.title}
              </Typography>

              <Divider
                sx={{
                  width: 70,
                  height: 3,
                  bgcolor: '#10b981',
                  mx: 'auto',
                  mb: 3,
                  borderRadius: 10
                }}
              />

              <Typography
                color="text.primary"
                fontSize={{ xs: 16, md: 18 }}
                lineHeight={1.8}
                sx={{ opacity: 0.9 }}
              >
                {item.desc}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
