import { Profile } from "./components/Profile";
import ProfileClass from "./components/ProfileClass";

function App() {
    return (
        <>
            <Profile name="Вася Пупкин" registerAt={new Date(2021, 5, 22)} />
            <ProfileClass name="Denis Berezin" registerAt={new Date(1995, 9, 30)} />
        </>
    )
}
export default App;