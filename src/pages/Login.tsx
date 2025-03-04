import React from 'react';
import { 
    IonAvatar,
    IonButton,
    IonContent, 
    IonHeader, 
    IonInput, 
    IonInputPasswordToggle, 
    IonItem, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    useIonRouter
} from '@ionic/react';

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
    }

    return (
        <IonPage>
            <IonContent fullscreen={true}>
                <style>
                    {`
                        .login-container {
                            position: fixed;
                            top: 0;
                            left: 0;
                            height: 100vh; 
                            width: 100%; 
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            background: linear-gradient(270deg, #FF6B6B, #6B8BFF, #6BFF95, rgb(88, 235, 108));
                            background-size: 600% 600%;
                            animation: GradientRotation 10s ease infinite;
                        }

                        @keyframes GradientRotation {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }

                        .avatar {
                            width: 150px;
                            height: 150px;
                            border-radius: 50%;
                            margin-bottom: 20px;
                        }

                        .input-item {
                            width: 80%;
                            max-width: 400px;
                            margin-bottom: 10px;
                            border-radius: 10px;
                    
                        }


                        .login-button {
                            width: 80%;
                            max-width: 100px;
                            margin-top: 20px;
                            background-color: aquamarine;
                            border-radius: 30px;
                        }
                    `}
                </style>

                <div className="login-container">
                    <IonAvatar className="avatar">
                        <img src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG" alt="Avatar" />
                    </IonAvatar>

                    <IonItem className="input-item">
                        <IonInput label="Email" type="email" placeholder=""></IonInput>
                    </IonItem>

                    <IonItem className="input-item">
                        <IonInput type="password" label="Password" placeholder="">
                            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                        </IonInput>
                    </IonItem>

                    <IonButton className="login-button" onClick={doLogin}>Login</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
