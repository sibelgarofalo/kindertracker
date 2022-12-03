import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Pane,
    Paragraph,
    TextInputField,
    Button,
    Heading,
    
 
} from 'evergreen-ui';

const Forgot = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); 
   

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
                    <form>
                        <TextInputField
                            label="E-mail"
                            description="Enter your e-mail"
                            placeholder="e-mail"
                            value={email}
                            onChange={(args) => setEmail(args.target.value)}
                        />
                       
                        <Button 
                        type='submit' 
                        appearance="primary" 
                        width="100%"
                        onClick={() => navigate('/verification')}>
                            SEND
                        </Button>

                        
                    </form>
                </Pane>

            </Pane>
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

export default Forgot;