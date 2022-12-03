import LoginForm from '../../components/forms/LoginForm';

import {
    Pane,
    Paragraph
} from 'evergreen-ui';

import Footer from '../../components/footer';

const LoginMobile = () => {

    return (
        <Pane display="flex" flexDirection="column">
            <Pane
                height="calc(100vh - 48px)"
                display="flex"
                flexDirection="column"
                background='linear-gradient(191.6deg, #D6E0FF 0.35%, #F3F6FF 45.37%);'
                alignItems="center">
                <LoginForm showLogo={true} />
            </Pane>

            <Footer />
        </Pane>
    )
}

export default LoginMobile;