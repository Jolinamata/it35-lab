import {
     IonPage, 
     IonHeader, 
     IonToolbar, 
     IonTitle,
      IonContent,
      IonInput,
      IonItem,
      IonList
     } from '@ionic/react';

const Register: React.FC = () => {
  return (
    
    <IonPage>
      <IonHeader>
      <IonList>
      <IonItem>
        <IonInput label="Text input" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Number input" type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Password input" type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Telephone input" type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
    </IonList>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Your registration form will go here */}
        <h2>Register Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default Register;
