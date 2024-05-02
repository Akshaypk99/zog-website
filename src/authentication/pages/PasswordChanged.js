import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MessagePopup from "./MessagePopup";
<script src="https://accounts.google.com/gsi/client" async defer></script>

const View = () => {
    
    let navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("userRoleRequest", "user")
        const redirectTimeout = setTimeout(() => {
            navigate("/login");
        }, 50000);

        return () => clearTimeout(redirectTimeout);

    }, [])

    return (
        <>
            <MessagePopup
                okClickedFunction={() => navigate('/login')}
                pageName={"password-changed"}
                titleWeb={"Your Password has been<br/>Reset Successfully !!!"}
                titleTab={"Your Password<br/>has been Reset<br/>Successfully !!!"}
                titleMob={"Your<br/>Password has<br/>been Reset<br/>Successfully !!!"}
                paraWeb={"Success! Your password has been reset<br/>securely. Enjoy seamless access to your<br/>account."}
                paraTab={"Success! Your password has been reset<br/>securely. Enjoy seamless access to your<br/>account."}
                paraMob={"Success! Your password has been reset securely. Enjoy seamless access to your account."}
                buttonText="SIGN IN NOW"
                buttonOnClick='/login'
                iconTopWeb={'50%'}
                iconLeftWeb={'70%'}
                iconRotationWeb={0}
                iconTopTab={'53%'}
                iconLeftTab={"55%"}
                iconRotationTab={215}
                iconTopMob={'50%'}
                iconLeftMob={170}
                iconRotationMob={-23}
            />
        </>
    )
}

export default View;