export const FormAuth = () => {

    let email = '';
    let password = '';

    function handlerSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            alert('Все поля должны быть заполнены!');
        } else {
            console.log({email, password})
            email = '';
            password = '';
        }
        e.target.reset();
    }

    function handlerChange(event) {
        if (event.target.name === 'email') {
            email = event.target.value.trim()
        } else if (event.target.name === 'password') {
            password = event.target.value.trim()
        }
    }

    return (
        <form className="form-auth" onSubmit={handlerSubmit}>
            <div className="form-auth__item">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handlerChange} />
            </div>
            <div className="form-auth__item">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handlerChange} />
            </div>
            <button type="submit">Войти</button>
        </form>
    )
}