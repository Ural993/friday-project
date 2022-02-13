import React, {useEffect} from "react";
import styles from "./App.module.scss"
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/pages/p1- loginization/l1-login/login-page";
import {RegistrationPage} from "./components/pages/p1- loginization/l2-registration/registration-page";
import {ProfilePage} from "./components/pages/p2-profile/profile-page";
import {CreateNewPassPage} from "./components/pages/p1- loginization/l4-create-new-pass/create-new-pass-page";
import {PassRecoveryPage} from "./components/pages/p1- loginization/l3-pass-recovery/pass-recovery-page";
import {Error404Page} from "./components/pages/p3-error/error404-page";
import {TestPage} from "./components/pages/p4-test/test-page";
import {useDispatch} from "react-redux";
import {authorization} from "./bll/reducers/app/app-reducer";
import {PacksPage} from "./components/pages/packs/packs-page";

export const App = () => {
    console.log('App')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authorization())
    },[])
    return (
        <div className={styles.container}>
            <HashRouter>
                <nav>
                    <Link to={"login"}>Login</Link>
                    <Link to={"registration"}>Registration</Link>
                    <Link to={"recovery"}>Recovery pass</Link>
                    <Link to={"pass"}>New Pass</Link>
                    <Link to={"error"}>404</Link>
                    <Link to={"test"}>Test</Link>
                    <Link to={"packs-list"}>PacksList</Link>
                </nav>
                <div className={styles.contentContainer}>
                    <Routes>
                        <Route path={"/"} element={<ProfilePage/>}/>
                        <Route path={"login"} element={<LoginPage/>}/>
                        <Route path={"registration"} element={<RegistrationPage/>}/>
                        <Route path={"profile"} element={<ProfilePage/>}/>
                        <Route path={"recovery"} element={<PassRecoveryPage/>}/>
                        <Route path={"pass/:token"} element={<CreateNewPassPage/>}/>
                        <Route path={"error"} element={<Error404Page/>}/>
                        <Route path={"test"} element={<TestPage/>}/>
                        <Route path={"packs-list"} element={<PacksPage/>}/>
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}
