/** imports */
import {
    useNavigate
} from 'react-router-dom';

import {
    Pane,
    Heading,
    Button
} from 'evergreen-ui';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3} width={600}>
            <Pane flex={1} alignItems="center" display="flex">
                <Heading size={600}>Dashboard</Heading>
            </Pane>
            <Pane>
                <Button marginRight={16} onClick={() => navigate('/login')}>Login</Button>
                <Button appearance="primary" onClick={() => navigate('/register')}>Register</Button>
            </Pane>
        </Pane>
    )
}

export default Dashboard;