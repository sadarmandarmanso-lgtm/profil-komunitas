import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './page/index';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
