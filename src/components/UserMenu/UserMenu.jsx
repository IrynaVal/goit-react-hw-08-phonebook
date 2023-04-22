import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUseremail } from 'redux/auth/selectors';
import { Button, Typography } from '@mui/material';
import { Menu } from './UserMenu.styled';
import '@fontsource/roboto/300.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUseremail);

  return (
    <Menu>
      <Typography fontWeight={'bold'} paddingTop={'4px'}>
        {email}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Menu>
  );
};
