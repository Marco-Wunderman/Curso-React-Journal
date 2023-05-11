import { Link as RouterLink } from "react-router-dom";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre"
            type="text"
            placeholder="Marco García"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
          ></TextField>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Typography>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            &nbsp;Inicia sesión aquí
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
