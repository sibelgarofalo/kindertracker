import {
    Pane, 
    Paragraph
} from 'evergreen-ui'

const Footer = () => {

    return (
        <Pane display="flex"
        backgroundColor="#474d66"
        height={48}
        justifyContent="center"
        alignItems="center">
        <Paragraph color="white" textAlign="center">Terms & Conditions</Paragraph>
    </Pane>
    )
}

export default Footer;