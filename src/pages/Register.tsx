import {
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  useIonRouter 
} from '@ionic/react';

const Register: React.FC = () => {
  const router = useIonRouter(); 

  // ✅ Handle Register
  const handleRegister = () => {
    console.log('Register button clicked!');
    router.push('/it35-lab/login', 'forward', 'replace');
  };

  // ✅ Handle Go to Login
  const doLogin = () => {
    router.push('/it35-lab/login', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: 'center' }}>Register Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonInput label="First Name" labelPlacement="stacked" placeholder="Enter First Name"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Last Name" labelPlacement="stacked" placeholder="Enter Last Name"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Address" labelPlacement="stacked" placeholder="Enter address"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Email" labelPlacement="stacked" placeholder="Enter email@domain.com"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Password" labelPlacement="stacked" placeholder="Enter password" type="password"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Confirm Password" labelPlacement="stacked" placeholder="Confirm password" type="password"></IonInput>
          </IonItem>
        </IonList>

        {/* ✅ Register Button */}
        <IonButton onClick={handleRegister} expand="full" color="primary" style={{ marginTop: '20px' }}>
          REGISTER
        </IonButton>

        {/* ✅ Go to Login Button */}
        <IonButton onClick={doLogin} expand="full" color="secondary" style={{ marginTop: '10px' }}>
          GO TO LOGIN
        </IonButton>

        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Already have an account?
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
