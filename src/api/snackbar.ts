let snackbarRef: any = null;

export const setSnackbar = (enqueueSnackbar: any) => {
  snackbarRef = enqueueSnackbar;
};

export const showSnackbar = (message: string, variant: any = "default") => {
  if (snackbarRef) {
    snackbarRef(message, { variant });
  }
};
