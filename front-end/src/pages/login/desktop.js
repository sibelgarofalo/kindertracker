import LoginForm from '../../components/forms/LoginForm';

import {
    Pane,
    Paragraph
} from 'evergreen-ui';

import Footer from '../../components/footer';

import Logo from '../../assets/login-logo.png';

const LoginDesktop = () => {

    return (
        <Pane display="flex" flexDirection="column">
            <Pane display="flex" flexDirection="row" height="calc(100vh - 48px)">
                <Pane
                    height="calc(100vh)"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="white"
                    width="50%">
                    <img alt="Kindertracker Logo" src={Logo} />
                </Pane>
                <Pane
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="calc(100vh)"
                    backgroundColor="#D6E0FF"
                    width="50%">
                    <div style={{ maxWidth: '400px' }}>
                        <LoginForm showLogo={true} />
                    </div>
                </Pane>
            </Pane>
            <Footer />
        </Pane>
    )
}

export default LoginDesktop;