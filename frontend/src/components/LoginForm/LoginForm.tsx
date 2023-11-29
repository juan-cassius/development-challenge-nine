import { Button, FormControl, TextField } from '@mui/material'
import medcloudLink from '../../assets/medcloud-login.png'
import './LoginForm.css'
function LoginForm() {
    return (
        <div className='main-login-div'>
            <FormControl className='login-form-div'>
                <img src={medcloudLink} alt="Medcloud" className='medcloud-logo' />
                <TextField
                    className='form-input'
                    label="Email"
                    fullWidth
                    variant="outlined"
                    type="email"
                    name="email"
                />
                <TextField
                    className='form-input'
                    label="Senha"
                    fullWidth
                    variant="outlined"
                    type="password"
                    name="password"
                />
                <Button
                    variant="contained"
                    type="submit"
                    style={{ background: '#009adf', marginBottom: '5px' }}
                >
                    Login
                </Button>

            </FormControl>
        </div>
    )
}

export default LoginForm