import { Box, Container, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import WifiIcon from '@mui/icons-material/Wifi';
import RouterIcon from '@mui/icons-material/Router';
import PasswordIcon from '@mui/icons-material/Password';
import DevicesIcon from '@mui/icons-material/Devices';

export const WiFi = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: '#ffffff',
        backgroundImage: 'url(../public/images/p_new0408_m_new04080.jpg)',
        backgroundSize: {
          xs: '150px',
          sm: '200px',
          md: '300px'
        },
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      {/* 半透明オーバーレイ */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
        }}
      />
      
      {/* Wi-Fi説明コンテンツ */}
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 'bold'
          }}
        >
          Wi-Fi接続
        </Typography>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              mb: 3
            }}
          >
            接続方法は、以下の手順に従ってください。
          </Typography>
          
          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <WifiIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Wi-Fiネットワーク名"
                secondary="SANTAMONICA_GUEST"
                primaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 'bold'
                }}
                secondaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif"
                }}
              />
            </ListItem>
            
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <PasswordIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="パスワード"
                secondary="Co11abo0ffice_guest"
                primaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 'bold'
                }}
                secondaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif"
                }}
              />
            </ListItem>
            
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <RouterIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="接続方法"
                secondary={
                  <>
                    1. デバイスのWi-Fi設定を開く<br />
                    2. 「SANTAMONICA_GUEST」を選択<br />
                    3. パスワード「Co11abo0ffice_guest」を入力<br />
                    4. 接続をタップ
                  </>
                }
                primaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 'bold'
                }}
                secondaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif"
                }}
              />
            </ListItem>
            
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <DevicesIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="対応デバイス"
                secondary="スマートフォン、タブレット、ノートPCなど、Wi-Fiに対応したすべてのデバイス"
                primaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 'bold'
                }}
                secondaryTypographyProps={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif"
                }}
              />
            </ListItem>
          </List>
          
        </Paper>
      </Container>
    </Box>
  );
}; 