import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Pane,
    Paragraph,
    TextInputField,
    Button,
    Heading,
} from 'evergreen-ui';

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <Pane display="flex" flexDirection="column">

            {props.showLogo &&
                <Heading
                    color="#474d66"
                    marginTop={33}
                    marginLeft={53}
                    marginRight={53}
                    size={900}
                    textAlign="center">Kinder Tracker</Heading>

            }
            <Pane
                maxWidth={400}
                minWidth={300}
                marginTop={128}
                marginLeft={32}
                marginRight={32}
            >
                <form>
                    <TextInputField
                        label="E-mail"
                        description="Enter your e-mail"
                        placeholder="e-mail"
                        value={email}
                        onChange={(args) => setEmail(args.target.value)}
                    />
                    <TextInputField
                        label="Password"
                        description="Enter your password"
                        placeholder="password"
                        value={password}
                        onChange={(args) => setPassword(args.target.value)}
                    />
                    <Button
                        type='submit'
                        appearance="primary"
                        width="100%"
                        onClick={() => navigate('/login')}>
                        Login
                    </Button>

                    <Pane
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        marginTop={91}>

                        <Button onClick={() => navigate('/forgot')}>
                            Forgot
                        </Button>
                        <Button onClick={() => navigate('/register')}>
                            Register
                        </Button>
                    </Pane>
                </form>
            </Pane>



        </Pane>

    );
}

export default LoginForm;
