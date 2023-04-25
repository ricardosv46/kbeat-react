const Logo = (
    <amp-img
        className="footer__logo"
        alt={'logo-footer-libero amp'}
        title={'logo-footer-larepublica amp'}
        layout="responsive"
        src="/static/lr/logo_larepublica.png"
        width="169px"
        height="40px"
    />
);

const date = new Date();

const FooterAmp = () => {
    return (
        <footer className="container__footer-amp">
            {Logo}
            <b className="footer__owner">Grupo La República</b>
            <span className="footer__copy-rigth">© Todos los Derechos Reservados - {date.getFullYear()}</span>
        </footer>
    )
}

export { FooterAmp };