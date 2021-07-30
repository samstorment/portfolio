export const Headline = ({children}) => {

    const style = {
        textAlign: 'center',
        fontSize: '44px',
        margin: '10px 0px'
    }

    return <h2 style={style}>{children}</h2>
}