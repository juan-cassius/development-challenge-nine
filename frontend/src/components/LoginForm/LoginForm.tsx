import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import medcloudLink from '../../assets/medcloud-login.png'
import './LoginForm.css'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        console.log(formData);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { email, password } = formData

        if (!email || !password) {
            alert('Preencha todos os campos!')
            return
        }
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)

    return (
        <div className='main-login-div'>
            <form
                className='login-form-div'
                onSubmit={handleSubmit}
            >
                <img src={medcloudLink} alt="Medcloud" className='medcloud-logo' />
                <TextField
                    className='form-input'
                    fullWidth
                    label="Email"
                    name="email"
                    onChange={handleFormChange}
                    required
                    type="email"
                    variant="outlined"
                />
                <TextField
                    className='form-input'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    fullWidth
                    label="Senha"
                    name="password"
                    onChange={handleFormChange}
                    required
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                />
                <Button
                    className='form-button'
                    style={{ background: '#009adf', marginBottom: '10px' }}
                    type="submit"
                    variant="contained"
                >
                    Login
                </Button>

            </form>
        </div>
    )
}

export default LoginForm