import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUseremail } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUseremail);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
