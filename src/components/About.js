import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { Work } from '@mui/icons-material';
import { TbCodeCircle2Filled } from "react-icons/tb";
import { PiCertificateFill } from "react-icons/pi";

const MotionPaper = motion(Paper);

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
}));

const achievements = [
  { icon: <Work />, name: "Experience", exp: "1+ Months" },
  { icon: <TbCodeCircle2Filled />, name: "Completed", exp: "2+ Projects" },
  { icon: <PiCertificateFill />, name: "Received", exp: "2+ Certifications" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const about="I am a dedicated software developer with a strong passion for full-stack development. I have experience creating various personal projects and am always open to learning new technologies or frameworks. I enjoy tackling challenges and am constantly striving to improve my skills."

  return (
    <Box sx={{ 
      p: 5, 
      textAlign: 'center', 
      maxHeight: '100%',
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          About Me
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          My Introduction
        </Typography>

        <Grid container justifyContent="center" spacing={3} sx={{ my: 4 }}>
          {achievements.map((achievement, index) => (
            <Grid item key={index}>
              <MotionPaper
                elevation={3}
                sx={{
                  p: 2,
                  width: isMobile ? '100%' : 150,
                  height: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: '1.5rem', // Added border radius
                  boxShadow: theme.shadows[5], // Mild shadow
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[10],
                  },
                }}
                variants={itemVariants}
              >
                <IconWrapper color="primary">{achievement.icon}</IconWrapper>
                <Typography variant="subtitle1" fontWeight="bold">
                  {achievement.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {achievement.exp}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        <motion.div variants={itemVariants}>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto', 
              mt: 4, 
              textAlign: 'justify',
              color: 'text.secondary'
            }}
          >
            {about}
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
}