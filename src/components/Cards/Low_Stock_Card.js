import { Icon } from '@iconify/react';
// import androidFilled from '@iconify/icons-ant-design/android-filled';
import lowLevel from '@iconify/icons-healthicons/low-level';
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

import './Cards.css'


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: '#FFFFFF',
  backgroundColor: '#5c6bc0'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#FFFFFF',
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

// const TOTAL = 714000;

export default function LowStock() {
  return (
    <RootStyle className="borderRadius">
      <IconWrapperStyle>
        <Icon icon={lowLevel} width={30} height={30} />
      </IconWrapperStyle>
      <Typography className="number" variant="h3">25</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Low Stock
      </Typography>
    </RootStyle>
  );
}
