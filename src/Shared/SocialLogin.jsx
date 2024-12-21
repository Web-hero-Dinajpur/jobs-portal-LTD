import React, { useContext } from 'react';
import AuthContaxt from '../contaxt/AuthContaxt/AuthContaxt';

const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContaxt);

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(resutl =>{
            console.log(resutl.user)
        })
        .catch(error =>{
            console.log(error.result)
        })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn'>Google Login</button>
        </div>
    );
};

export default SocialLogin;