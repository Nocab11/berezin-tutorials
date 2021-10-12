export const Profile = ({ name, registerAt }) => {
    return (
        <>
            <p>Привет, <b>{name}</b> </p>
            <p>Дата регистрации: {registerAt.toLocaleDateString()}</p>
        </>
    )
}