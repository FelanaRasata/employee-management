import AppRoutes from "./shared/routes/AppRoutes.tsx"
import {UserProvider} from "./layouts/context/UserContext.tsx"
import {AlertProvider} from "./layouts/context/AlertContext.tsx"
import Alert from "./shared/core/component/Alert.tsx"


function App() {


    return (
        <UserProvider>
            <AlertProvider>
                <Alert/>
                <AppRoutes/>
            </AlertProvider>
        </UserProvider>
    )
}

export default App
