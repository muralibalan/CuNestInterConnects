import { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  MenuItem 
} from '@mui/material';
import { motion } from 'framer-motion';

function NextDesignForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    packageType: '',
    layerCount: '',
    ballCount: '',
    message: '',
    file: null
  });

  const packageTypes = ['Flip Chip', 'MLO', 'MLC', 'Interposer', 'Core-less Substrate', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // முறையான Letter Format-ல் வாட்ஸ்அப் மெசேஜ்
    const letterMessage = `
*DESIGN REQUEST LETTER*
--------------------------------------------------
*Date:* ${new Date().toLocaleDateString('en-IN')}

*To,*
*The Engineering Team,*
*CuNest Interconnects.*

*Subject:* Request for IC Package Design Support & Consultation

*Dear Team,*

I am writing to formally request a technical consultation and engineering review for our upcoming IC package project. Below are the primary details of our design requirements:

*1. SENDER & COMPANY DETAILS*
• *Name:* ${formData.name}
• *Official Email:* ${formData.email}
• *Company Name:* ${formData.company}

*2. TECHNICAL SPECIFICATIONS*
• *Package Technology:* ${formData.packageType}
• *Layer Stack-up:* ${formData.layerCount || "To be decided during review"}
• *Ball Count / BGA Pitch:* ${formData.ballCount || "To be specified"}

*3. PROJECT REQUIREMENTS & CONSTRAINTS*
${formData.message || "No additional constraints specified."}

${formData.file ? `*Note:* Specification document (${formData.file.name}) has been prepared and is ready for submission upon initiation.` : ''}

Kindly review these initial specifications. We look forward to scheduling a confidential technical session at your earliest convenience to discuss the SI/PI parameters.

*Sincerely,*
${formData.name}
${formData.company}
--------------------------------------------------
`;

    const whatsappNumber = "917397716747";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(letterMessage)}`,
      "_blank"
    );
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      fontSize: '0.95rem',
      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.12)' },
      '&:hover fieldset': { borderColor: '#A66B3F' },
      '&.Mui-focused fieldset': { borderColor: '#A66B3F', borderWidth: '1.5px' },
    },
    '& .MuiInputLabel-root': { 
      color: '#94a3b8', 
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      fontSize: '0.9rem'
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#A66B3F' },
    '& .MuiInputBase-input': { color: '#ffffff' }
  };

  return (
    <Box
      component={motion.section}
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9 }}
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 }, 
        background: 'linear-gradient(to bottom, #0F3D3E, #0A192F)', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(166,107,63,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(166,107,63,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 4, md: 0 }
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: '#A66B3F',
              mb: 1.5,
              display: 'block',
              letterSpacing: { xs: '0.15em', md: '0.25em' },
              fontSize: { xs: '0.75rem', sm: '0.85rem' },
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 600
            }}
          >
            Start Your Next Design
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mb: 2.5,
              fontFamily: '"Syne", "Segoe UI", sans-serif',
              fontWeight: 700,
              fontSize: {
                xs: '1.6rem',
                sm: '2.2rem',
                md: '2.5rem'
              },
              lineHeight: 1.25,
              color: '#ffffff',
              px: { xs: 1, sm: 0 }
            }}
          >
            We’re ready to bring your IC package vision into production.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#94a3b8',
              lineHeight: 1.8,
              maxWidth: '620px',
              mx: 'auto',
              px: { xs: 1, sm: 0 },
              fontSize: { xs: '0.9rem', sm: '0.95rem' },
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Connect with the CuNest Interconnects team for a confidential consultation and engineering review.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: 'rgba(17, 34, 64, 0.4)',
            p: { xs: 3, sm: 5, md: 6 },
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
            overflow: 'hidden'
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required label="Your Name" name="name" value={formData.name} onChange={handleChange} sx={textFieldStyles} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required type="email" label="Official Email" name="email" value={formData.email} onChange={handleChange} sx={textFieldStyles} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label="Company Name" name="company" value={formData.company} onChange={handleChange} sx={textFieldStyles} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                required
                label="Package Design Technology"
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                sx={textFieldStyles}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        backgroundColor: '#0A192F',
                        border: '1px solid rgba(255,255,255,0.1)',
                        '& .MuiMenuItem-root': {
                          color: '#fff',
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '0.9rem',
                          '&:hover': { backgroundColor: 'rgba(166, 107, 63, 0.15)' },
                          '&.Mui-selected': { backgroundColor: '#A66B3F', '&:hover': { backgroundColor: '#8c562f' } }
                        }
                      }
                    }
                  }
                }}
              >
                {packageTypes.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Layer Stack-up (e.g., 3+2+3, 4 Layer)" name="layerCount" value={formData.layerCount} onChange={handleChange} sx={textFieldStyles} />
            </Grid>
            
            <Grid item xs={12}>
              <TextField fullWidth label="Estimated Ball Count / BGA Pitch" name="ballCount" value={formData.ballCount} onChange={handleChange} sx={textFieldStyles} placeholder="e.g., 725 Balls / 800um Pitch" />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Project Requirements & Constraints" name="message" value={formData.message} onChange={handleChange} sx={textFieldStyles} placeholder="Share details about SI/PI constraints, thermal targets, or size requirements..." />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ p: 3, border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '8px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1.5, fontFamily: '"Inter", sans-serif', fontSize: '0.85rem' }}>
                  Have a Netlist, Die Map, or Specification Document? (Optional)
                </Typography>
                <Button component="label" variant="outlined" size="small" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)', fontFamily: '"Inter", sans-serif', textTransform: 'none', fontSize: '0.8rem', '&:hover': { borderColor: '#A66B3F', backgroundColor: 'rgba(166, 107, 63, 0.08)' } }}>
                  Upload File
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {formData.file && (
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#A66B3F', fontWeight: 500, fontFamily: '"Inter", sans-serif' }}>
                    Selected: {formData.file.name}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center', mt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: '350px' },
                  py: 1.6,
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.9rem',
                  borderRadius: '4px',
                  border: '2px solid #A66B3F',
                  fontFamily: '"Inter", sans-serif',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(166, 107, 63, 0.15)',
                    borderColor: '#A66B3F',
                    transform: 'scale(1.02)'
                  }
                }}
              >
                Submit Design Request
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default NextDesignForm;