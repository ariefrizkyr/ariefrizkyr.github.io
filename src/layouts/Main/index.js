import HeaderComponent from '../../components/Header';

function MainLayout({
    ...otherProps
}) {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div>
                {otherProps.children}
            </div>
        </div>
    );
}

export default MainLayout;
