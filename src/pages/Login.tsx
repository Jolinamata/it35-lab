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

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            height: '130vh',
            backgroundPosition: 'center',
            backgroundImage: 'url("https://i.pinimg.com/originals/d1/20/e4/d120e49e9952232e0d593ceef62809b9.gif")',
            backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
        },
        avatar: {
            width: '300px',
            height: '300px',
            borderRadius: '',
            marginBottom: '20px',
        },
        inputItem: {
            width: '80%',
            maxWidth: '400px',
            marginBottom: '10px',
            borderRadius: '20px',
           
        },
        button: {
          width: '20%',
         
            marginTop: '5px',
            padding: '50px 80px',
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={styles.container}>
                    <IonAvatar style={styles.avatar}>
                        <img src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG" alt="Avatar" />
                    </IonAvatar>

                 
                    <IonItem style={styles.inputItem}>
                        <IonInput label="Email" type="email" placeholder="email@domain.com"></IonInput>
                    </IonItem>

                  
                    <IonItem style={styles.inputItem}>
                        <IonInput type="password" label="Password" placeholder="Enter your password">
                            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                        </IonInput>
                    </IonItem>

                
                    <IonButton style={styles.button} onClick={doLogin}>Login</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
