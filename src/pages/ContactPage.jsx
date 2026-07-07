import React, { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Mail Icon இறக்குமதி செய்யப்பட்டுள்ளது
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // படிவத் தரவுகளுக்கான State Management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // முறையான லெட்டர் பார்மட்டில் வாட்ஸ்அப் மெசேஜ் உருவாக்குதல்
    const whatsappMessage = `*Official Website Inquiry - CuNest Interconnects*

Date: ${new Date().toLocaleDateString()}

Dear Admin,

A user has submitted a contact request from our official website. Below are the details provided:

--------------------------------------------------
*Sender Details:*
Name    : ${formData.fullName}
Email   : ${formData.email}
Subject : ${formData.subject}

*Message:*
"${formData.message}"
--------------------------------------------------

Please look into this query and reach out to the sender as soon as possible.

Best regards,
Website Notification System`;

    // URL Encoding செய்தல்
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917397716747?text=${encodedMessage}`;

    // புதிய விண்டோவில் வாட்ஸ்அப் ஓப்பன் ஆகும்
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  // Input fields styling
  const textFieldStyles = {
    '& .MuiInputBase-input': {
      color: '#000',
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#666',
      opacity: 1,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
      '&:hover fieldset': { borderColor: '#CD7F32' },
      '&.Mui-focused fieldset': { borderColor: '#CD7F32' },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-24 bg-[#f8fafc] font-sans"
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10} mt={4}>
          <Typography variant="h2" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 800, color: '#0F3D3E', mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#666666', maxWidth: '600px', mx: 'auto' }}>
            We'd love to hear from you. Fill out the form below or reach out using the contact details provided.
          </Typography>
        </Box>

        <Paper 
          elevation={0} 
          sx={{ 
            borderRadius: '24px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <Grid container>
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={5} sx={{ backgroundColor: '#0F3D3E', color: '#FFFFFF', p: { xs: 4, md: 8 } }}>
              <Typography variant="h3" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 700, mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Contact For Any Queries
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5, gap: 2 }}>
                <PhoneIcon sx={{ color: '#CD7F32', mt: 0.5, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '2px' }}>Phone</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>+91 7397716747</Typography>
                </Box>
              </Box>

              {/* புதிய மின்னஞ்சல் பகுதி (Mail Section) */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5, gap: 2 }}>
                <MailOutlineIcon sx={{ color: '#CD7F32', mt: 0.5, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '2px' }}>Email</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 500, wordBreak: 'break-word' }}>
                    Info@cunestinterconnects.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#CD7F32', mt: 0.5, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '2px' }}>Address</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.8 }}>
                    39, 2<sup>nd</sup> St, Arumbakkam,<br/>
                    Chennai, TN - 600106,<br/>
                    India
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={7} sx={{ backgroundColor: '#FFFFFF', p: { xs: 4, md: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '500px' }}>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  >
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Full Name</Typography>
                        <TextField required fullWidth name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" variant="outlined" sx={textFieldStyles} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Email address</Typography>
                        <TextField required fullWidth name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" type="email" variant="outlined" sx={textFieldStyles} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Subject</Typography>
                        <TextField required fullWidth name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" variant="outlined" sx={textFieldStyles} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Message</Typography>
                        <TextField required fullWidth name="message" value={formData.message} onChange={handleChange} placeholder="Message" multiline rows={4} variant="outlined" sx={textFieldStyles} />
                      </Box>
                      <Button 
                        type="submit"
                        variant="contained" 
                        size="large" 
                        sx={{ 
                          backgroundColor: '#CD7F32', 
                          color: '#fff', 
                          py: 1.5, 
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          textTransform: 'none',
                          borderRadius: '8px',
                          '&:hover': { backgroundColor: '#a46528' }
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    style={{ textAlign: 'center', width: '100%' }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="100"
                        height="100"
                      >
                        <motion.circle
                          cx="25"
                          cy="25"
                          r="22"
                          fill="none"
                          stroke="#4caf50"
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        <motion.path
                          d="M15 25 l7 7 l13 -13"
                          fill="none"
                          stroke="#4caf50"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        />
                      </motion.svg>
                    </Box>
                    <Typography variant="h4" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 800, color: '#0F3D3E', mb: 2 }}>
                      Thank You!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666666', mb: 4, maxWidth: '400px', mx: 'auto' }}>
                      Your message has been formatted and redirected to our WhatsApp support.
                    </Typography>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', email: '', subject: '', message: '' });
                      }}
                      variant="outlined" 
                      sx={{ 
                        color: '#CD7F32', 
                        borderColor: '#CD7F32',
                        py: 1, 
                        px: 4,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: 'rgba(205, 127, 50, 0.1)', borderColor: '#CD7F32' }
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default ContactPage;