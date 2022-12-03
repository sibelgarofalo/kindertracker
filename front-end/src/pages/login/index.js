/** imports */
import { isDesktop, isMobile } from 'react-device-detect';

import LoginMobile from './mobile';
import LoginDesktop from './desktop';

const Login = () => {

    return (
        <>
            {
                isMobile &&
                <LoginMobile />
            }
            {
                isDesktop &&
                <LoginDesktop />
            }
        </>
    )
}

export default Login;