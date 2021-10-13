export const Profile = (props) => {
    return (
        <>
            <p>Привет, <b>{props.name || 'Аноним'}</b> </p>
            <p>Дата регистрации: {props.registerAt.toLocaleDateString()}</p>
        </>
    )
}