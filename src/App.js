import logo from './logo.svg';
import './App.css';

import { 
  AppBar,
  Box,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { ReposController } from './components/repos/repos.controller';

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fidu
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >

            <InputBase sx={{ ml: 1, flex: 1 }}
              placeholder="Procure alguém"
              inputProps={{ 'aria-label': 'Procure alguém' }} />
          </Paper>
        </Toolbar>
      </AppBar>

      <ReposController></ReposController>
    </Box>
  );
}