import { Alert, AlertTitle, Snackbar } from '@mui/material';

const CountryNotFound = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity='error' variant='filled' onClose={handleClose}>
          <AlertTitle>Error</AlertTitle>
          City not found, please check your spelling and try again!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CountryNotFound;
