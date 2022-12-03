/** imports */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {
    Pane,
    Paragraph,
    TextInputField,
    Button,
    Heading,
    Alert

} from 'evergreen-ui';

const Register = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
   
    const [lastname, setLastName] = useState("");
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const navigate = useNavigate();

    const onFormSubmit = (event) => {
        event.preventDefault();
        // validation
        if (
            
            !email || email.length < 1 ||
            !firstname || firstname.length < 1 ||
            !lastname || lastname.length < 1
        ) {
            setFailure(true);
            return;
        }

        // finish
        setSuccess(true);
        setFailure(false);
    }

    return (
        <Pane display="flex" flexDirection="column">

            <Pane
                height="calc(100vh - 68px)"
                display="flex"
                flexDirection="column"
                background='linear-gradient(191.6deg, #D6E0FF 0.35%, #F3F6FF 45.37%);'
                alignItems="center">
                <Heading
                    color="#474d66"
                    marginTop={33}
                    marginLeft={53}
                    marginRight={53}
                    size={900}
                    textAlign="center">Kinder Tracker</Heading>
                <Pane
                    maxWidth={400}
                    minWidth={300}
                    marginTop={128}
                    marginLeft={32}
                    marginRight={32}
                >
                    <form onSubmit={onFormSubmit}>
                        
                        <TextInputField
                            label="E-mail"
                            description="Enter your e-mail"
                            placeholder="e-mail"
                            value={email}
                            onChange={(args) => setEmail(args.target.value)}
                        />
                        <TextInputField
                            label="First Name"
                            description="Enter your first name"
                            placeholder="first name"
                            value={firstname}
                            onChange={(args) => setFirstName(args.target.value)}
                        />
                        <TextInputField
                            label="Last Name"
                            description="Enter your last name"
                            placeholder="lastname"
                            value={lastname}
                            onChange={(args) => setLastName(args.target.value)}
                        />
                        <Button
                            type='submit'
                            appearance="primary"
                            width="100%">
                            Register
                        </Button>
                    </form>
                </Pane>

            </Pane>

            {failure &&
                <Alert
                    intent="danger"
                    title="Please ensure all information are correct."
                    style={{position: 'absolute', bottom: '72px', left: '0', right: '0', margin: '0 12px'}}
                />
            }
            {success &&
                <Alert
                    intent="success"
                    title="Success. Click here to Login."
                    style={{position: 'absolute', bottom: '72px', left: '0', right: '0', margin: '0 12px'}}
                    onClick={() => navigate('/login')}
                />
            }
            <Pane display="flex"
                backgroundColor="#474d66"
                height={48}
                justifyContent="center"
                alignItems="center">
                <Paragraph color="white" textAlign="center">Terms & Conditions</Paragraph>
            </Pane>

        </Pane>
    )
}

export default Register;