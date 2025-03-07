import { 
  IonAvatar,
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonImg, 
      IonMenuButton, 
      IonPage, 
      IonThumbnail, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <style>
                {
                  
                }
          </style>

          <div>
         
          <IonCard color="primary">
        <IonCardHeader>
        <IonAvatar>
        <img alt="Silhouette of a person's head" src="https://cdn.fbsbx.com/v/t59.2708-21/481402466_1234501781521750_8456698088566388224_n.gif?_nc_cat=106&ccb=1-7&_nc_sid=66e727&_nc_eui2=AeGIP8FCJlerWwB0xfprODlB_JKscNERxFf8kqxw0RHEV94xrNEP_CYk6rpuX-3qp1BSpwDtv1zWVib05GUmN_zi&_nc_ohc=rZdEPxpyEcEQ7kNvgHpdh31&_nc_oc=AdiC1vDZd4rz1qTI5DMWaoHsKi7Mjy-pEqhoWVnoz0JWCxspOKozmuDKxBIjTlx2bLU&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=A7s-JWbqMGCsPwWJ7wzBgZe&oh=03_Q7cD1wFRVpEEmb1pipv8omFn6EJkW4kK6wiKi4NWUrdP-rasFA&oe=67CC6093" />
      </IonAvatar>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
        
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="warning">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="light">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="medium">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            Feed
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;