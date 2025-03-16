import {
     IonPage, 
     IonHeader, 
     IonToolbar, 
     IonTitle,
      IonContent,
      IonInput,
      IonItem,
      IonList,
      IonButton
     } from '@ionic/react';

const Register: React.FC = () => {
  const handleRegister = () => {
    console.log('Register button clicked!');
 
  };
  return (
    
    <IonPage>
     
      <IonHeader>
     <div> <IonContent>
       <h2>Register Page</h2>
     </IonContent></div>

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
        <IonInput label="Password" labelPlacement="stacked" placeholder="Enter password"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Confirm Password" labelPlacement="stacked" placeholder="Enter confirm password"></IonInput>
      </IonItem>  
     
    </IonList>
    <IonButton onClick={handleRegister} expand="full">
  REGISTER
</IonButton>
    
       
      </IonHeader>
    
    </IonPage>
  );
};

export default Register;
